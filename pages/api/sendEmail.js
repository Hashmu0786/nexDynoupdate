// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Replace with your SMTP server
  port: 587, // Usually 587 for TLS, 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.NEXT_GMAIL, // Your email
    pass: process.env.NEXT_PASS, // Your email password or application password
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.NEXT_GMAIL, // Your email
      subject: 'New Contact Form Submission',
      text: `
        You have a new contact form submission:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
