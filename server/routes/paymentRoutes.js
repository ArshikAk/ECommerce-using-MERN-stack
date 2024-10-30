const express = require('express');
const router = express.Router();

const { createOrder , verifyOrder }  =  require("../controllers/paymentController")


router.post('/createOrder',createOrder);
router.post('/verify-payment', verifyOrder);
  

module.exports = router;
