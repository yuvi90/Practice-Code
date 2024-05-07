class passenger extends Thread {
    int total = 0;

    public void run() {
        synchronized (this) {
            System.out.println(Thread.currentThread().getName());
            System.out.println("wait .... ");
            for (int i = 0; i <= 10; i++)
                total = i + 2;
            System.out.println("passenger is given notification call");
            notify();
        }
    }
}

public class Test {
    public static void main(String[] args) throws InterruptedException {
        passenger p = new passenger();
        p.start();
        synchronized (p) {
            System.out.println(Thread.currentThread().getName());
            System.out.println("passenger is waiting for the bus ");
            p.wait();
            System.out.println("passenger got notification");
        }
        System.out.println("after " + p.total + " time");
    }
}