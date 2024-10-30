const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    items : {
        type : Array,
        default : []
    }
})

const wishlistModel = mongoose.model("wishlist",wishlistSchema)


module.exports = wishlistModel