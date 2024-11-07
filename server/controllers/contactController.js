const nodemailer = require('nodemailer');
const fs = require("fs")
const path = require("path")

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


const generateOrderItemsHTML = (items) => {
  return items.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>1</td>
      <td>₹${item.price}</td>
    </tr>
  `).join('');
};


exports.sendThankYouMail = async (email,orderDetails) => {
  let content = fs.readFileSync(path.join(__dirname,"..","mailTemplate","thankYouMailTemplate.html"),'utf-8')

  let totalProducts = []
  let totalAmount = 0

  orderDetails.forEach((item) => {
    totalProducts.push(item.order.product)
  })

  totalProducts.forEach((item) => {
    totalAmount += item.price
  })

  const htmlContent = content
    .replace('[Customer Name]', orderDetails[0].order.name)
    .replace('[Order Date]', orderDetails[0].order.date)
    .replace('[Customer Address]', `${orderDetails[0].order.address + ", " + orderDetails[0].order.city}`)
    .replace('[Order Items]', generateOrderItemsHTML(totalProducts))
    .replace('[Total Amount]', `₹${totalAmount}`);

  const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Order Confirmation Mail`,
      html: htmlContent
  };
  
  try {
    await transporter.sendMail(mailOptions);
  } 
  catch (error) {
      console.error('Error sending message:', error);
  }
}