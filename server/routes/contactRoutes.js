const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")

const {sendContactMail}  = require("../controllers/contactController")

router.post('/sendContact', authMiddleware,sendContactMail);

module.exports = router;
