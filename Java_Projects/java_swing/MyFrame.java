import javax.swing.*;
import javax.swing.border.Border;
import java.awt.*;

public class MyFrame extends JFrame {
    MyFrame() {
        ImageIcon image = new ImageIcon("src/logo.png"); // Create Image icon Obj
        Border border = BorderFactory.createLineBorder(Color.green, 5);

        this.setTitle("My Java App"); // App Title
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Close button behavior
        this.setSize(600,600); // Frame Size
        this.setResizable(false);   // Allow Resizing or not
        this.setIconImage(image.getImage()); // Sets App Icon
        this.setVisible(true); // Sets Visibility
//        this.getContentPane().setBackground(Color.green); // Set Bg Color
//        this.getContentPane().setBackground(new Color(0x123456)); // Set Bg Color

//      JLable Code = a GUI display area for a string of text, an image, or both. Lable tries to take much room as possible in frame. But we can use limit size by setBounds Method
        JLabel lable = new JLabel();
        lable.setText("Lable Text"); // Set Text of Lable
        lable.setIcon(image);

        lable.setFont(new Font("MV Boli", Font.PLAIN, 20)); // Font of Text
        lable.setHorizontalTextPosition(JLabel.CENTER); // set Text Left, Center, Right relative to Image Icon
        lable.setVerticalTextPosition(JLabel.TOP); // set Text Top, Center, Bottom relative to Image Icon
//        lable.setIconTextGap(0);
        lable.setForeground(Color.green); // Text Color
        lable.setBackground(Color.black); // Display background color
        lable.setOpaque(true);
        lable.setBorder(border);

        lable.setVerticalAlignment(JLabel.CENTER); // set vertical Alignment position of icon + text within label
        lable.setHorizontalAlignment(JLabel.CENTER); // set horizontal Alignment position of icon + text within label

        this.add(lable); // by default frame sets border layout, it centers image and text position left side

    }
}
