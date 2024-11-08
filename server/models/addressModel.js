const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    landMark : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    pincode : {
        type : Number,
        required : true,
    },
    primary : {
        type : Boolean,
        default : false
    }
})


const addressSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    addresses : {
        type : [itemSchema],
        default : []
    }
})


const addressModel = mongoose.model("address",addressSchema)

module.exports = addressModel