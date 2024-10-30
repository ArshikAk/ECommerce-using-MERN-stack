const express = require("express")
const router = express.Router()

const { getOrders , placeOrder } = require("../controllers/ordersController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/getOrders",authMiddleware,getOrders)
router.post("/placeOrder",authMiddleware,placeOrder)

module.exports = router