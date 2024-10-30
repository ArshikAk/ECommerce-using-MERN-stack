const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: 'YOUR_RAZORPAY_KEY_ID',
    key_secret: 'YOUR_RAZORPAY_SECRET',
});


exports.createOrder =  async (req, res) => {
    const { amount, currency = 'INR', receipt } = req.body;
    try {
      const options = {
        amount: amount * 100,
        currency,
        receipt,
        payment_capture: 1,
      };
      const order = await razorpay.orders.create(options);
      res.status(200).json({ success: true, order });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
}


exports.verifyOrder = (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const crypto = require("crypto");
  
    const hmac = crypto.createHmac('sha256', 'YOUR_RAZORPAY_SECRET');
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generated_signature = hmac.digest('hex');
  
    if (generated_signature === razorpay_signature) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
}