const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json())


app.use(cors({
    origin: 'https://exclusive-ecommerce-bin5t1i8p-arshiks-projects.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }));



mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT,() => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})


app.get("/",(req,res) => {
    res.send("Hello World I am Server");
})

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/product" , require("./routes/productRoutes"))
app.use("/api/cart" , require("./routes/cartRoutes"))
app.use("/api/wishList" , require("./routes/wishlistRoutes"))
app.use("/api/orders" , require("./routes/orderRoutes"))
app.use("/api/contact" , require("./routes/contactRoutes"))
app.use("/api/review" , require("./routes/reviewRoutes"))
app.use("/api/admin" , require("./routes/adminRoutes"))
app.use("/api/address" , require("./routes/addressRoutes"))
app.use("/api/account" , require("./routes/accountRoutes"))
// app.use("/api/payment" , require("./routes/paymentRoutes"))
