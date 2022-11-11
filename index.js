
const express = require("express")
const  port = process.env.PORT||5000
const mongoose = require("mongoose")

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())



mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/RudoWealth",
(err)=>{
    if(err)return console.log(err);
    console.log("connected to mongodb")
})



app.use("/customers",require("./routers/customerRouter"))


app.listen(port,()=>console.log(`server start on port ${port}`))