const express = require("express")
const router = express.Router()

const { getDashboardData , getOrders } = require("../controllers/adminController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/getDashboardData",authMiddleware,getDashboardData)
router.get("/getOrders",authMiddleware,getOrders)

module.exports = router