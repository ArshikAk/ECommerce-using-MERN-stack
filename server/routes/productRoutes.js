const express = require("express")
const router = express.Router()

const { addProduct , getProducts } = require("../controllers/productController")

router.get("/getProducts",getProducts)
router.post("/addProduct",addProduct)

module.exports = router