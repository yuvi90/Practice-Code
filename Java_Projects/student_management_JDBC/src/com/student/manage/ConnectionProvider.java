package com.student.manage;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConnectionProvider {
	
	static Connection con;
	
	public static Connection creatConnection()
	{
		try {
			//Load Driver
			Class.forName("com.mysql.jdbc.Driver");	
			
			// Create Connection
			String user="root";
			String password = "Yuv1@sql";
			String url = "jdbc:mysql://localhost:3306/student_manage";
			
			con = DriverManager.getConnection(url,user,password);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return con;
	}
}
