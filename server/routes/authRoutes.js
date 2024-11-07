const express = require("express")
const router = express.Router()

const { loginUser , registerUser , getOTP , verifyOTP , changePassword } = require("../controllers/authController")

router.post("/login",loginUser)
router.post("/register",registerUser)
router.post("/getOTP",getOTP)
router.post("/verifyOTP",verifyOTP)
router.put("/changePassword",changePassword)

module.exports = router