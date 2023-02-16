import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Rules extends JFrame implements ActionListener {
	
	String user;
	JButton startBtn, exitBtn;
	
	Rules (String user) 
	{	
		this.user = user;
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setTitle("Rules");
		setSize(900, 700);
		setLocation(400, 200);
		getContentPane().setBackground(Color.WHITE);
		setLayout(null);
		setResizable(false);
		
		JLabel title = new JLabel("Welcome , " + user + ". " + "Rules for quiz.");
		title.setBounds(120,60,800,45);
		title.setFont(new Font("Viner Hand ITC", Font.BOLD, 40));
		title.setForeground(new Color(30,144,254));
		add(title);
		
		JLabel rules = new JLabel();
		rules.setBounds(90,150,700,350);
		rules.setFont(new Font("Tahoma", Font.PLAIN, 16));
		rules.setForeground(new Color(30,144,254));
		rules.setText(
	            "<html>"+ 
	                "1. You are trained to be a programmer and not a story teller, answer point to point" + "<br><br>" +
	                "2. Do not unnecessarily smile at the person sitting next to you, they may also not know the answer" + "<br><br>" +
	                "3. You may have lot of options in life but here all the questions are compulsory" + "<br><br>" +
	                "4. Crying is allowed but please do so quietly." + "<br><br>" +
	                "5. Only a fool asks and a wise answers (Be wise, not otherwise)" + "<br><br>" +
	                "6. Do not get nervous if your friend is answering more questions, may be he/she is doing Jai Mata Di" + "<br><br>" +
	                "7. Brace yourself, this paper is not for the faint hearted" + "<br><br>" +
	                "8. May you know more than what John Snow knows, Good Luck" + "<br><br>" +
	            "<html>"
				);
		add(rules);
		
		startBtn = new JButton("Start");
		startBtn.setBackground(new Color(30,144,254));
		startBtn.setForeground(Color.WHITE);
		startBtn.setBounds(270,550,100,25);
		startBtn.addActionListener(this);
		
		exitBtn = new JButton("Exit");
		exitBtn.setBackground(new Color(30,144,254));
		exitBtn.setForeground(Color.WHITE);
		exitBtn.setBounds(500,550,100,25);
		exitBtn.addActionListener(this);
		
		add(startBtn);
		add(exitBtn);
		
		setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == startBtn)
		{
			
		}
		
		if (e.getSource() == exitBtn)
		{
			System.exit(0);
		}	
	}
}
