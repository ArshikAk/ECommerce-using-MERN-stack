const express = require("express")
const router = express.Router()

const { getCart , addCartItem , addToCart , deleteCartItem } = require("../controllers/cartController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/getCart",authMiddleware,getCart)
router.post("/addCartItem",authMiddleware,addCartItem)
router.post("/addToCart",authMiddleware,addToCart)
router.delete("/deleteCartItem/:productId",authMiddleware,deleteCartItem)

module.exports = router