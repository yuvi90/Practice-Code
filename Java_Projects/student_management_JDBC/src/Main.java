import java.util.Scanner;

import com.student.manage.Student;
import com.student.manage.StudentDao;

public class Main {

	public static void main(String[] args) {
		
		System.out.println("Welcome to Student Management App");
		
		Scanner sc = new Scanner(System.in);

		while(true)
		{
			System.out.println("Press 1 to Add student");			
			System.out.println("Press 2 to Delete student");			
			System.out.println("Press 3 to Display student");			
			System.out.println("Press 4 to Exit");
			int input = sc.nextInt();
			
			if (input == 1) 
			{
				// Add Student
				System.out.println("Enter Student Name");
				String name = sc.next();
				
				System.out.println("Enter Student Phone Number");
				String phone = sc.next();
				
				System.out.println("Enter Student City");
				String city = sc.next();
				
				//Create Student Obj
				Student std = new Student(name,phone,city);
				System.out.println(std);
				
				//Inserting Student
				boolean insertQuery = StudentDao.insertStudentToDB(std);
				if (insertQuery == true) 
				{
					System.out.println("Student added successfully...");
				}
				else {System.out.println("Something went wrong, try again...");}
			}
			else if (input == 2) 
			{
				// Delete Student
				System.out.println("Enter Student ID");
				int sid = sc.nextInt();
				
				//Deleting Student
				boolean deleteQuery = StudentDao.deleteStudentFromDB(sid);
				if (deleteQuery == true) 
				{
					System.out.println("Student deleted successfully...");
				}
				else {System.out.println("Something went wrong, try again...");}
			}
			else if (input == 3) 
			{
				// Display Student
				StudentDao.showStudents();
			}
			else if (input == 4) 
			{
				// Quit
				break;
			}
			else 
			{
				// Default
				System.out.println("Invalid input, try again...");
			}			
		}
		
		System.out.println("Exiting Application...");
	}
}
