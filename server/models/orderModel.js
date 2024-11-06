const mongoose = require("mongoose")


const itemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    landMark : {
        type : String,
        required : true
    },
    paymentMethod : {
        type : String,
        required : true,
        enum : ["Cash","Online"]
    },
    product : {
        type : Object,
        required : true
    },
    date : {
        type : String,
        required : true
    }
})

const orderSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
    },
    order : {
        type : itemSchema,
        default : {}
    }
})


const orderModel = mongoose.model("orders",orderSchema)

module.exports = orderModel