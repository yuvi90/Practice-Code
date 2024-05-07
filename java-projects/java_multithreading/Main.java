class Company {
    int n;

    boolean f = false;

    synchronized void producer(int n) {
        if (f) {
            try{wait();}catch(Exception e){};
        }

        this.n = n;
        System.out.println("Produced Item : " + this.n);
        f = true;
        notify();
    }

    synchronized int consumer() {
        if (!f) {
            try{wait();}catch(Exception e){};
        }

        System.out.println("Consumed Item : " + this.n);
        f = false;
        notify();
        return this.n;
    }
}

class Producer extends Thread {
    
    Company c;

    Producer(Company c) {
        this.c = c;
    }

    public void run() {
        int i = 1;

        while(true) {
            this.c.producer(i);
            try{Thread.sleep(1000);}catch(Exception e){};
            i++;
        }
    }

}

class Consumer extends Thread {
    
    Company c;

    Consumer(Company c) {
        this.c = c;
    }

    public void run() {

        while(true) {
            this.c.consumer();
            try{Thread.sleep(3000);}catch(Exception e){};
        }
    }

}

public class Main {
    public static void main(String[] args) {

        Company com = new Company();
        Producer p = new Producer(com);
        Consumer c = new Consumer(com);

        p.start();
        c.start();

    }
}