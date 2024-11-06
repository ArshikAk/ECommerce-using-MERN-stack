const express = require("express")
const router = express.Router()

const { getDashboardData , getOrders , addProduct , updateProduct } = require("../controllers/adminController")
const adminMiddleware = require("../middleware/adminMiddleware")

router.get("/getDashboardData",adminMiddleware,getDashboardData)
router.get("/getOrders",adminMiddleware,getOrders)
router.post("/addProduct",adminMiddleware,addProduct)
router.put("/updateProduct",adminMiddleware,updateProduct)

module.exports = router