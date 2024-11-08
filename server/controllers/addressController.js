const addressModel = require("../models/addressModel")


exports.getAddress = (req,res) => {

    addressModel.findOne({email : req.user.email})
    .then((result) => {
        if(result)
        {
            res.json(result.addresses)
        }
        else
        {
            res.json("No address found")
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

exports.getPrimaryAddress = (req,res) => {

    addressModel.findOne({email : req.user.email , "addresses.primary" : true},{ "addresses.$": 1 })
    .then((result) => {
        if(result)
        {
            res.json(result.addresses[0])
        }
        else
        {
            res.json("No address found")
        }
    })
    .catch((err) => {
        console.log(err)
    })
}



exports.addAddress = (req,res) => {

    const {name, email,phone,address,landmark,pincode,city} = req.body

    addressModel.findOne({email : req.user.email})
    .then((result) => {
        if(result)
        {
            result.addresses.push({
                name : name,
                email : email,
                phone : phone, 
                address : address,
                landMark : landmark,
                pincode : pincode,
                city : city,
            })
            result.save()
            res.json("Success")
        }
        else
        {
            let temp = {
                name : name,
                email : email,
                phone : phone, 
                address : address,
                landMark : landmark,
                pincode : pincode,
                city : city,
                primary : true
            }
            addressModel.create({
                email : req.user.email,
                addresses : [temp]
            })
            res.json("Success")
        }
    })
    .catch((err) => {
        console.log(err)
    })
}


exports.changeDefaultAddress = (req,res) => {
    
    const {index} = req.body

    addressModel.findOne({email : req.user.email})
    .then((result) => {
        if(result)
        {
            result.addresses.forEach((item,i) => {
                if(index == i)
                {
                    item.primary = true
                }
                else
                {
                    item.primary = false
                }
            })
            result.save()
            res.json("Success")
        }
    
    })
    .catch((err) => {
        console.log(err)
    })
}


exports.updateAddress = (req,res) => {

    const {name, email,phone,address,landmark,pincode,city,index} = req.body

    addressModel.findOne({email : req.user.email})
    .then((result) => {
        if(result)
        {
            result.addresses[index] = {
                name : name,
                email : email,
                phone : phone, 
                address : address,
                landMark : landmark,
                pincode : pincode,
                city : city,
            }
            result.save()
            res.json("Success")
        }
    })
    .catch((err) => {
        console.log(err)
    })
}


exports.deleteAddress = (req,res) => {

    const {index} = req.params

    addressModel.findOne({email : req.user.email})
    .then((result) => {
        if(result)
        {
            result.addresses.splice(index,1)
            addressModel.findOne({email : req.user.email , "addresses.primary" : true},{ "addresses.$": 1 })
            .then((response) => {
                if(response == null && result.addresses.length > 0)
                {
                    result.addresses[0].primary = true
                }
                result.save()
                res.json("Success")
            })
            .catch((err) => {
                console.log(err)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })

}