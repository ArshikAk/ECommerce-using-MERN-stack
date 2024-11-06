const productModel = require("../models/productModel")


exports.addProduct = async (req,res) => {
    try {
        const {name , price , description , image , category } = req.body

        productModel.create({
            name : name,
            price : price,
            description : description,
            image : image,
            category : category
        })
        .then((result) => {
            res.status(200).json("Success")
        })
        .catch((err) => {
            res.status(400).json(err)
        })

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.getProducts = async (req,res) => {
    try {
        const {id} = req.params || null
        
        if(id == null)
        {
            productModel.find()
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
        }
        else{
            productModel.find({productId : id})
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}