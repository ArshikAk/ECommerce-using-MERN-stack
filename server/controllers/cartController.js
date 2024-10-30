const cartModel = require("../models/cartModel")

exports.getCart = async (req,res) => {
    try {
        cartModel.findOne({email : req.user.email})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(500).json({message : "Error fetching cart" , error : err})
        })
    }
    catch (err) {
        console.log(err)
    }
}

exports.addCartItem = async (req,res) => {
    try {
        const {product} = req.body

        cartModel.findOne({email : req.user.email})
        .then((result) => {
            if(result) {
                const existingProduct = result.cartItems.filter((item) => item.productId == product.productId)
                if(existingProduct.length != 0) {
                    res.json("Success")
                }
                else{
                    result.cartItems.push(product)
                    result.save()
                    res.json("Success")
                }

            }
            else{
               cartModel.create({
                email : req.user.email,
                cartItems : [product]
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

exports.addToCart = async (req,res) => {
    try {
        const {items} = req.body

        cartModel.findOne({email : req.user.email})
        .then((result) => {
            if(result) {
                items.forEach((product) => {
                    const existingProduct = result.cartItems.filter((item) => item.productId == product.productId)
                    if(existingProduct.length == 0) {
                        result.cartItems.push(product)
                    }
                })
                result.save()
                res.json("Success")
            }
            else{
               cartModel.create({
                email : req.user.email,
                cartItems : items
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


exports.deleteCartItem = async (req,res) => {
    try {
        const {productId} = req.params
        cartModel.findOne({email : req.user.email})
        .then((result) => {
            if(result) {
                result.cartItems = result.cartItems.filter(item => item.productId != productId)
                result.save()
                res.json("Success")
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}