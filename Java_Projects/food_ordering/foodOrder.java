import java.util.Scanner;

public class foodOrder 
{
    // Declared food variables.

    int burger = 80;
    int pizza = 100;
    int patty = 30;
    int samosa = 20;
    int tea = 10;
    int choice;
    int quantity;
    String orderAgain;
    static int total;

    Scanner input = new Scanner(System.in);

    // Display menu method.

    public void displayMenu() 
    {
        System.out.println("\n");
        System.out.println("***************  Menu  *****************");
        System.out.println("========================================");
        System.out.println("\n");
        System.out.println("       1. Burger        Rs. 80          ");
        System.out.println("       2. Pizza         Rs. 100         ");
        System.out.println("       3. Patty         Rs. 30          ");
        System.out.println("       4. Samosa        Rs. 20          ");
        System.out.println("       5. Tea           Rs. 10          ");
        System.out.println();
        System.out.println("       0. Exit                          ");
        System.out.println("\n");
        System.out.println("========================================");
        System.out.println("   What would you like to order today?  ");
        System.out.println("\n");
    }
    
    // Order Method.
    
    public void order() 
    {
        while (true)
        {
            System.out.print("Please choose your item : ");
            choice = input.nextInt();

            switch (choice)
            { 
                    case 1: // Burger
                    System.out.println();
                    System.out.println("You have selected Burger");
                    System.out.println();
                    System.out.print("Enter quantity : ");
                    quantity = input.nextInt();
                    total = total + quantity * burger;

                    break;
                
                    case 2: // Pizza
                    System.out.println();
                    System.out.println("You have selected Pizza");
                    System.out.println();
                    System.out.print("Enter quantity : ");
                    quantity = input.nextInt();
                    total = total + quantity * pizza;

                    break;
                
                    case 3: // Patty
                    System.out.println();
                    System.out.println("You have selected Patty");
                    System.out.println();
                    System.out.print("Enter quantity : ");
                    quantity = input.nextInt();
                    total = total + quantity * patty;

                    break;
                
                    case 4: // Samosa
                    System.out.println();
                    System.out.println("You have selected Samosa");
                    System.out.println();
                    System.out.print("Enter quantity : ");
                    quantity = input.nextInt();
                    total = total + quantity * samosa;

                    break;
                
                    case 5: // Tea
                    System.out.println();
                    System.out.println("You have selected Tea");
                    System.out.println();
                    System.out.print("Enter quantity : ");
                    quantity = input.nextInt();
                    total = total + quantity * tea;

                    break;

                    case 0:
                    System.out.println();
                    System.out.println("Exiting.....");
                    System.out.println();
                    System.exit(1);
                    break;

                    default:
                    System.out.println();
                    System.out.println("Invalid Input !!!!");
                    System.out.println();
                    System.out.println("Try again");
                    System.out.println();
                    
                    continue;
                }
                
                while (true)
                {
                    System.out.println();
                    System.out.print("Would you like to order something else?\n\nChoose (Y/N) : ");
                    orderAgain = input.next();
                    
                    if (orderAgain.equalsIgnoreCase("y"))
                    {
                        System.out.println();
                        break;
                    } 
                    else if (orderAgain.equalsIgnoreCase("n")) 
                    {
                        generateBill();
                        System.exit(1);
                        break;
                    } 
                    else 
                    {
                        System.out.println();
                        System.out.println("Invalid Input !!!!");
                        System.out.println();
                        System.out.println("Try again");
                    continue;
                }
            }
        }
    }

    // Generate Bill Method.

    public void generateBill()
    {
        System.out.println();
        System.out.println("******** Thank You for Ordering ********");
        System.out.println("========================================");
        System.out.println("\n");
        System.out.println("         Your total bill : " + total);
        System.out.println("\n");
    }

    public static void main(String[] args) 
    {
        foodOrder od1 = new foodOrder();
        od1.displayMenu();
        od1.order();
    }
}