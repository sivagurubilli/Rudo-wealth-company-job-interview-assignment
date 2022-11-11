
const express = require("express")
const  port = process.env.PORT||5000
const mongoose = require("mongoose")

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

//importing models of cruisers and customers
const cruiser = require("./models/cruiserModel")
const customer = require("./models/customerModel")


//connect ot mongodb database
mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/RudoWealth",
(err)=>{
    if(err)return console.log(err);
    console.log("connected to mongodb")
})

app.get("/",(req,res)=>{
    return res.status(200).send({
   "for customers data go to" :"/customers",
    })
})
// routers
app.use("/customers",require("./routers/customerRouter"))
app.use("/cruisers",require("./routers/cruiserRouter"))


// display all available cruisers using cli
const cruisers = async(req,res)=>{
    const allCruiser= await cruiser.find()
    console.log(allCruiser)
   
}

// display all customers using cli
const customers = async(req,res)=>{
    const allcustomers= await  customer.find()
    console.log(allcustomers)
   
}


app.listen(port,()=>console.log(`server start on port ${port}`))

module.exports={
    cruisers,
    customers
}