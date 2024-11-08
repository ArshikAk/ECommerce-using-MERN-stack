const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/authMiddleware")
const {addAddress , getAddress, getPrimaryAddress, changeDefaultAddress , updateAddress , deleteAddress } = require("../controllers/addressController")

router.get("/getAddress",authMiddleware,getAddress)
router.get("/getPrimaryAddress",authMiddleware,getPrimaryAddress)
router.post("/addAddress",authMiddleware,addAddress)
router.put("/changeDefaultAddress",authMiddleware,changeDefaultAddress)
router.put("/updateAddress",authMiddleware,updateAddress)
router.delete("/deleteAddress/:index",authMiddleware,deleteAddress)


module.exports = router