const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    cartItems : {
        type : Array,
        default : []
    }
})

const cartModel = mongoose.model("cart",cartSchema)


module.exports = cartModel