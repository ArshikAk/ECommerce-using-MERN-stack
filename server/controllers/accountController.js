const userModel = require("../models/userModel")
const bcrypt = require("bcryptjs");

exports.getProfile = (req,res) => {

    userModel.findOne({email : req.user.email})
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })

}

exports.updateProfile = async (req,res) => {

   const {name,email,changePassword,newPassword,currentPassword} = req.body

   if(changePassword == true)
   {

        const user = await userModel.findOne({email : email})
        const isMatch = await bcrypt.compare(currentPassword,user.password)

        if(isMatch)
        {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(newPassword, salt)
            userModel.updateOne({email : email},{name : name,password : hashedPassword})
            .then((result) => {
                res.json("Success")
            })
            .catch((err) => {
                console.log(err)
            })
        }
        else
        {
            res.json("Invalid Password")
        }
   }
   else{
    userModel.updateOne({email : email},{name : name})
    .then((result) => {
        res.json("Success")
    })
    .catch((err) => {
        console.log(err)
    })
   }
}