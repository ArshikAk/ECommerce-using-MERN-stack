const orderModel = require("../models/orderModel")


exports.getOrders = async (req,res) => {
    try {
        orderModel.findOne({email : req.user.email})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(500).json({message : "Error fetching orders" , error : err})
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}


exports.placeOrder = async (req,res) => {
    try{

        const {name,email,phone,address,city,landmark,paymentMethod,items} = req.body

        orderModel.findOne({email : req.user.email})
        .then((result) => {
            if(result) {
                let todayDate = new Date()

                let day = todayDate.getDate()
                let month = todayDate.getMonth() + 1
                let year = todayDate.getFullYear()

                let date = `${year}-${month}-${day}`

                items.forEach((item) => {
                    let newOrder = {
                        name : name,
                        email : email,
                        phone : phone,
                        address : address,
                        city : city,
                        landMark : landmark,
                        paymentMethod : paymentMethod,
                        product : item,
                        date : date
                    }
                    result.orders.push(newOrder)
                })
                result.save()
                res.json("Success")
            }
            else{
                let todayDate = new Date()

                let day = todayDate.getDate()
                let month = todayDate.getMonth() + 1
                let year = todayDate.getFullYear()

                let date = `${year}-${month}-${day}`

                let temp = []

                items.forEach((item) => {
                    let newOrder = {
                        name : name,
                        email : email,
                        phone : phone,
                        address : address,
                        city : city,
                        landMark : landmark,
                        paymentMethod : paymentMethod,
                        product : item,
                        date : date
                    }
                    temp.push(newOrder)
                })

                orderModel.create({
                    email : req.user.email,
                    orders : temp
                })

                res.json("Success")
            }
        })
        .catch((err) => {
            res.status(500).json({message : "Error fetching orders" , error : err})  
        })

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}