const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")
const {addAddress , getAddress, getPrimaryAddress, changeDefaultAddress } = require("../controllers/addressController")

router.get("/getAddress",authMiddleware,getAddress)
router.get("/getPrimaryAddress",authMiddleware,getPrimaryAddress)
router.post("/addAddress",authMiddleware,addAddress)
router.put("/changeDefaultAddress",authMiddleware,changeDefaultAddress)


module.exports = router