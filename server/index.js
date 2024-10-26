const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors({
    origin: true,
    credentials : true
}))


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


app.use("/api/auth", require("./routes/authRoutes"))