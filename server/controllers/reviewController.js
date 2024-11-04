const reviewModel = require("../models/reviewModel")


exports.getReviews = async (req,res) => {

    const {productId} = req.params

    reviewModel.findOne({productId : productId})
    .then((result) => {
        if(result)
        {
            res.json(result)
        }
        else{
            res.json("No reviews found")
        }
    })
    .catch((err) => {
        console.log(err)
    })
}


exports.addReview = async (req,res) => {

    const {id,message} = req.body

    reviewModel.findOne({productId : id})
    .then((result) => {
        if(result)
        {
            let newReview = {
                email : req.user.email,
                feedBack : message
            }

            result.review.push(newReview)
            result.save()
            res.json("Success")
        }
        else{
            let newReview = {
                email : req.user.email,
                feedBack : message
            }

            reviewModel.create({
                productId : id,
                review : [newReview]
            })
            res.json("Success")
        }
    })
    .catch((err) => {
        console.log(err)  
    })
}