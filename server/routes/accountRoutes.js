const express = require("express")
const router = express.Router()

const { getProfile , updateProfile } = require("../controllers/accountController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/getProfile",authMiddleware,getProfile)
router.put("/updateProfile",authMiddleware,updateProfile)


module.exports = router