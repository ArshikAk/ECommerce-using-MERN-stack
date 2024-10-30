const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productId : Number,
    name : String,
    price : Number,
    description : String,
    image : String,
    category : String
})

const productModel = mongoose.model("products",productSchema)

module.exports = productModel