const orderModel = require("../models/orderModel")
const {sendThankYouMail} = require("./contactController")


exports.getOrders = async (req,res) => {
    try {
        orderModel.find({email : req.user.email})
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

        const {name,email,phone,address,city,landmark,pincode,paymentMethod,items} = req.body

        let todayDate = new Date()

                let day = todayDate.getDate()
                let month = todayDate.getMonth() + 1
                let year = todayDate.getFullYear()

                let date = `${year}-${month}-${day}`

                let temp = []

                items.forEach((item) => {
                    let newElement = {}

                    newElement.email = req.user.email

                    let newOrder = {
                        name : name,
                        email : email,
                        phone : phone,
                        address : address,
                        city : city,
                        landMark : landmark,
                        pincode : pincode,
                        paymentMethod : paymentMethod,
                        product : item,
                        date : date
                    }

                    newElement.order = newOrder

                    temp.push(newElement)
                })
                orderModel.insertMany(temp)
                .then((result) =>  {
                    sendThankYouMail(req.user.email,temp)
                    res.json("Success")
                })
                .catch((err) => {
                    res.status(500).json(err)  
                })

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}