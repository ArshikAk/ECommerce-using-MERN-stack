const express = require('express');
const router = express.Router();

const {sendContactMail}  = require("../controllers/contactController")


router.post('/sendContact', sendContactMail);

module.exports = router;
