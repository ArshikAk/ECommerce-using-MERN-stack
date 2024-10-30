const wishlistModel = require("../models/wishlistModel")

exports.getWishList = async (req,res) => {
    try {
        wishlistModel.findOne({email : req.user.email})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(500).json({message : "Error fetching wishlist" , error : err})
        })
    }
    catch (err) {
        console.log(err)
    }
}

exports.addWishListItem = async (req,res) => {
    try {
        const {product} = req.body

        wishlistModel.findOne({email : req.user.email})
        .then((result) => {
            if(result) {
                const existingProduct = result.items.filter((item) => item.productId == product.productId)
                if(existingProduct.length != 0) {
                    res.json("Success")
                }
                else{
                    result.items.push(product)
                    result.save()
                    res.json("Success")
                }

            }
            else{
               wishlistModel.create({
                email : req.user.email,
                items : [product]
               })
               .then((result) => {
                    res.json("Success")
               })
               .catch((err) => {
                    res.json(err)
               })
            }
        })
        .catch((err) => {
            res.json(err)
        })
    }
    catch (error) {
        console.log(error)
    }
}


exports.deleteWishListItem = async (req,res) => {
    try {
        const {productId} = req.params
        wishlistModel.findOne({email : req.user.email})
        .then((result) => {
            if(result) {
                result.items = result.items.filter(item => item.productId != productId)
                result.save()
                res.json("Success")
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}

