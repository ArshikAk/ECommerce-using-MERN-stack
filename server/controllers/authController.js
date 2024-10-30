const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel")

exports.registerUser = async (req,res) => {
    try {
        const {name,email,password} = req.body

        userModel.findOne({email : email})
        .then((result) => {
            if(result) {
              return  res.json("Already Existed")
            }
        })

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        let user = new userModel({
            name : name,
            email : email,
            password : hashedPassword
        })

        await user.save()

        return res.json("Success")
    }
    catch (error) {
        console.log(error)
    }
}


exports.loginUser = async (req,res) => {
    try {
        const {email,password} = req.body

        const user = await userModel.findOne({email : email})

        if(!user) {
            return res.json("User Not Found")
        }

        const isValidPassword = await bcrypt.compare(password,user.password)

        if(!isValidPassword) {
            return res.json("Invalid Password")
        }

        const token = jwt.sign({id : user._id},process.env.SECRET_KEY,{expiresIn : "1d"})
        
        return res.json({
            token : token,
            message : "Success"
         })
    }
    catch (error) {
        console.log(error)
    }
}
