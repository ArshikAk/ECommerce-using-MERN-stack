const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")


exports.getDashboardData = async(req,res) => {
    try {
        const userCount = await userModel.countDocuments()
        const productCount = await productModel.countDocuments()
        const orderCount = await orderModel.countDocuments()
        const orders = await orderModel.find()

        let totalSales = 0
        orders.forEach(async (item) => {
            totalSales = totalSales + item.order.product.price
        })

        const lastTenElements = orders.slice(-5).reverse();
        
        let temp = {
            totalUsers : userCount,
            totalProducts : productCount,
            totalOrders : orderCount,
            totalSales : totalSales,
            recentOrders : lastTenElements
        }

        res.json(temp)
    }
    catch (err){
        console.log(err)
    }
}


exports.getOrders = async (req,res) => {
    try{
        const orders = await orderModel.find()
        res.json(orders)
    }
    catch (err) {
        console.log(err)
    }
}


exports.addProduct = async (req,res) => {
    try{
        const {product} = req.body
        const productCount = await productModel.countDocuments()

        product.productId = productCount+1

        productModel.create(product)
        .then((result) => {
            res.json("Success")
        }).catch((err) => {
            res.statsu(401).json(err)
        });
    }
    catch (err) {
        console.log(err)
    }
}


exports.updateProduct = async (req,res) => {
    try{
        const {product} = req.body

        productModel.updateOne({productId : product.productId},product)
        .then((result) => {
            res.json("Success")
        }).catch((err) => {
            res.statsu(401).json(err)
        });
    }
    catch (err) {
        console.log(err)
    }
}

exports.deleteProduct = async (req,res) => {
    try{
        const {productId} = req.params
        productModel.deleteOne({productId : productId})
        .then((result) => {
            res.json("Success")
        }).catch((err) => {
            res.statsu(401).json(err)
        });
    }
    catch (err) {
        console.log(err)
    }
}
