import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Load environment variables if needed, e.g., for cPanel password
// You can use process.env.CPANEL_PASSWORD for the password if you want to secure it using environment variables

export async function POST(request) {
  try {
    const { Ime, Prezime, telefona, Poruka } = await request.json();

    // Create a transporter object using the SMTP transport with cPanel credentials
    const transporter = nodemailer.createTransport({
      host: "mail.avio-apartmani.rs",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "_mainaccount@avio-apartmani.rs",
        pass: "HJIJ0lpVF6CBJz3", // replace with your cPanel password or use process.env.CPANEL_PASSWORD
      },
    });

    // Set up email data
    const mailOptions = {
      from: '"Website Contact Form" <_mainaccount@avio-apartmani.rs>', // sender address
      to: "avioapartmani@avio-apartmani.rs", // list of receivers (your email)
      subject: "New Contact Form Submission", // Subject line
      text: `You have a new message from ${Ime} ${Prezime}.\n\ntelefona: ${telefona}\n\nPoruka:\n${Poruka}`, // plain text body
      html: `<p>You have a new message from <strong>${Ime} ${Prezime}</strong>.</p>
             <p><strong>telefona:</strong> ${telefona}</p>
             <p><strong>Poruka:</strong></p>
             <p>${Poruka}</p>`, // html body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}
