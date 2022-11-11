const mongoose = require("mongoose")
 
const customer = new mongoose.Schema({
    fullName:{type:String,required:true},
    currentLocation:{type:String,required:true},
    numberofRides:{type:String,required:true},
    averageRating:{type:Number,required:true},
   
})

module.exports = mongoose.model("customer",customer)