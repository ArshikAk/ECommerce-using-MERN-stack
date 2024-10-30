const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

exports.sendContactMail =  async (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `New Contact Us Message from ${name}`,
      html: `
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!'});
    } 
    catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
  }