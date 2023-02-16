import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Login extends JFrame implements ActionListener {
	
	JButton startBtn, exitBtn;
	JTextField tfname;
	
	Login () 
	{	
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setTitle("Quiz App");
		setSize(1200, 500);
		setLocation(400, 200);
		getContentPane().setBackground(Color.WHITE);
		setLayout(null);
		setResizable(false);
		
		ImageIcon quizLogin = new ImageIcon("src/img/login.jpeg");
		JLabel quizImg = new JLabel(quizLogin);
		quizImg.setBounds(0,0,600,480);
		add(quizImg);
		
		JLabel title = new JLabel("Quiz Time");
		title.setBounds(800,60,300,45);
		title.setFont(new Font("Viner Hand ITC", Font.BOLD, 40));
		title.setForeground(new Color(30,144,254));
		add(title);
		
		JLabel enterName = new JLabel("Enter your name : ");
		enterName.setBounds(820,150,300,20);
		enterName.setFont(new Font("Mongolian Baiti", Font.BOLD, 20));
		enterName.setForeground(new Color(30,144,254));
		add(enterName);
		
		tfname = new JTextField();
		tfname.setBounds(790,200,210,25);
		add(tfname);
		
		startBtn = new JButton("Start");
		startBtn.setBackground(new Color(30,144,254));
		startBtn.setForeground(Color.WHITE);
		startBtn.setBounds(770,300,100,25);
		startBtn.addActionListener(this);
		
		exitBtn = new JButton("Exit");
		exitBtn.setBackground(new Color(30,144,254));
		exitBtn.setForeground(Color.WHITE);
		exitBtn.setBounds(920,300,100,25);
		exitBtn.addActionListener(this);
		
		add(startBtn);
		add(exitBtn);
		
		setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == startBtn)
		{
			setVisible(false);
			new Rules(tfname.getText());				
		}
		
		if (e.getSource() == exitBtn)
		{
			System.exit(0);
		}	
	}
	
}
