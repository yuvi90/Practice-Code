import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

class MyFrame extends JFrame implements ActionListener {
	
	JLabel NameLabel, EmailLabel, GenderLabel, DOBLabel, AddressLabel, MsgLabel;
	JTextField NameField,EmailField;
	JRadioButton male, female;
	JComboBox day, month, year;
	JTextArea AddressText, OutputScreen;
	JCheckBox terms;
	JButton SubmitBtn;
	
	MyFrame(){
		this.setTitle("Registration Form");
		this.setSize(700,500);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setLayout(null);
		
		this.NameLabel = new JLabel("Name : ");
		this.NameLabel.setBounds(20,50,150,20);
		this.add(NameLabel);
		
		this.NameField = new JTextField();
		this.NameField.setBounds(130,50,150,20);
		this.add(NameField);
		
		this.EmailLabel = new JLabel("Email : ");
		this.EmailLabel.setBounds(20,100,150,20);
		this.add(EmailLabel);
		
		this.EmailField = new JTextField();
		this.EmailField.setBounds(130,100,150,20);
		this.add(EmailField);
		
		this.GenderLabel = new JLabel("Gender : ");
		this.GenderLabel.setBounds(20,150,150,20);
		this.add(GenderLabel);
		
		this.male = new JRadioButton("Male");
		this.female = new JRadioButton("Female");
		
		this.male.setBounds(130,150,80,20);
		this.female.setBounds(210,150,80,20);
		
		ButtonGroup GenderGrp = new ButtonGroup();
		GenderGrp.add(male);
		GenderGrp.add(female);
		
		this.male.setSelected(true);
		this.add(male);
		this.add(female);
		
		this.DOBLabel = new JLabel("DOB : ");
		this.DOBLabel.setBounds(20,200,150,20);
		this.add(DOBLabel);
		
		String days [] = {"1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"};
		String months [] = {"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"};
		String years [] = {"2018","2019","2020","2021","2022","2023"};
		
		
		this.day = new JComboBox(days);
		this.month = new JComboBox(months);
		this.year = new JComboBox(years);
		
		this.day.setBounds(130,200,50,20);
		this.month.setBounds(190,200,50,20);
		this.year.setBounds(250,200,60,20);
		
		this.add(day);
		this.add(month);
		this.add(year);
		
		this.AddressLabel = new JLabel("Address : ");
		this.AddressLabel.setBounds(20,250,100,20);
		this.add(AddressLabel);
		
		this.AddressText = new JTextArea();
		this.AddressText.setBounds(130,240,200,50);
		this.add(AddressText);
		
		this.terms = new JCheckBox ("Please accept terms and conditions.");
		this.terms.setBounds(20,320,250,20);
		this.add(terms);
		
		this.SubmitBtn = new JButton("Submit");
		this.SubmitBtn.setBounds(125,370,80,20);
		this.SubmitBtn.addActionListener(this);
		this.add(SubmitBtn);
		
		this.OutputScreen = new JTextArea();
		this.OutputScreen.setBounds(360,50,300,300);
		this.add(OutputScreen);
		
		this.MsgLabel = new JLabel("");
		this.MsgLabel.setBounds(20,420,250,20);
		this.add(MsgLabel);
		
		this.setVisible(true);
	} 
	
	public void actionPerformed (ActionEvent e) {
		if (this.terms.isSelected()){
			MsgLabel.setText("Registration Successfully !!");
			
			String name = this.NameField.getText();
			String email = this.EmailField.getText();
			String gender = "male";
			if (this.female.isSelected()){
				gender = "female";
			}
			String dob = this.day.getSelectedItem()+"-"+this.month.getSelectedItem()+"-"+this.year.getSelectedItem();
			String address = this.AddressText.getText();
			
			this.OutputScreen.setText("Name : "+name+"\n"+"Email : "+email+"\n"+"Gender : "+gender+"\n"+"DOB : "+dob+"\n"+"Address : "+address);
		} 
		else {
			MsgLabel.setText("Please accept terms and conditions. !!");
			this.OutputScreen.setText("");
		}
	}
	
}

class RegistrationForm {
	public static void main(String[] args) {
		
		MyFrame RegistrationWindow = new MyFrame();
		
	}
}