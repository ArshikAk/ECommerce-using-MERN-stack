const mongoose = require("mongoose")

const elementSchema = new mongoose.Schema({
    email: {
        type : String,
        required: true,
    },
    feedBack : {
        type : String,
        required : true
    }
})

const reviewSchema = new mongoose.Schema({
    productId : {
        type : Number,
        required : true,
        unique : true
    },
    review : {
        type : [elementSchema],
    }
})

const reviewModel = mongoose.model("review",reviewSchema)

module.exports = reviewModel