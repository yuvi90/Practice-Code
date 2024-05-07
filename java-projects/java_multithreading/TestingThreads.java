class BookTickets extends Thread {
    static int availableSeats = 2;
    static int booking;

    BookTickets (int n) {
        this.booking = n;
    }

    static synchronized public void book () {
            String name = Thread.currentThread().getName();
            if(booking<=availableSeats) {
                System.out.println(name + " booked ticket : " +  booking);
                availableSeats = availableSeats-booking;
            } 
            else {
                System.out.println("Tickets not available");
            }
    }

    public void run() {
        book();
    }
}

public class TestingThreads {
        public static void main(String[] args) {
            BookTickets obj1 = new BookTickets(2);
            // Thread t1 = new Thread(obj1);
            // Thread t2 = new Thread(obj1);

            // BookTickets obj2 = new BookTickets(2);
            // Thread t3 = new Thread(obj2);
            // Thread t4 = new Thread(obj2);

            // t1.start();
            // t2.start();
            // t3.start();
            // t4.start();

            obj1.start();
            System.out.println(obj1.getName());
        }
}
