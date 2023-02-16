package com.student.manage;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class StudentDao {
	public static boolean insertStudentToDB(Student std) 
	{
		boolean flag = false;
		try	
		{
			// JDBC Code
			Connection con = ConnectionProvider.creatConnection();
			
			String query = "insert into students(sname, sphone, scity) values (?,?,?)"; // ? marks for dynamic/parameterized query
			
			// Prepared Statement for dynamic query
			PreparedStatement pstmt = con.prepareStatement(query);
			// Set values in ? marks
			pstmt.setString(1, std.getStudentName()); // setInt if value is integer
			pstmt.setString(2, std.getStudentPhone()); // setInt if value is integer
			pstmt.setString(3, std.getStudentCity()); // setInt if value is integer
			
			// Execute Statement
			pstmt.executeUpdate(); // executeUpdate() used when returning no data
			flag=true;
		} 
		catch (Exception e) {e.printStackTrace();}
		return flag;
	}

	public static boolean deleteStudentFromDB(int sid) {
		boolean flag = false;
		try	
		{
			// JDBC Code
			Connection con = ConnectionProvider.creatConnection();
			
			String query = "delete from students where sid=?"; // ? marks for dynamic/parameterized query
			
			// Prepared Statement for dynamic query
			PreparedStatement pstmt = con.prepareStatement(query);
			// Set values in ? marks
			pstmt.setInt(1, sid);  // setString if value is integer
			
			// Execute Statement
			pstmt.executeUpdate(); // executeUpdate() used when returning no data
			flag=true;
		} 
		catch (Exception e) {e.printStackTrace();}
		return flag;
	}

	public static void showStudents() {	
		try	
		{
			// JDBC Code
			Connection con = ConnectionProvider.creatConnection();
			
			String query = "select * from students";
			
			// Statement for static query
			Statement stmt = con.createStatement();
						
			// Execute Statement
			ResultSet set = stmt.executeQuery(query); // executeQuery() used when returning data
			
			while(set.next()) 
			{
				int sid = set.getInt(1); // getInt() & getString() data from columns, arguments can be column number or column name 
				String sname = set.getString(2);
				String sphone = set.getString(3);
				String scity = set.getString(4);
				
				System.out.println("SID - " + sid + " " + ", Name - " + sname + " " + ", Phone - " + sphone + " " + ", City - " + scity);
				System.out.println("====================================================================");				
			}
			
			System.out.println("Data Displayed Successfully");
		} 
		catch (Exception e) {e.printStackTrace();}	
	}
}
