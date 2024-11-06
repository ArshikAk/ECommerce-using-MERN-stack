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