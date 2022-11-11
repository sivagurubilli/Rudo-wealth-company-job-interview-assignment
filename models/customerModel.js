const mongoose = require("mongoose")
 
//model for cusomer object in database
const customer = new mongoose.Schema({
    fullName:{type:String,required:true},
    currentLocation:{type:String,required:true},
    numberofRides:{type:Number,required:true},
    averageRating:{type:Number,required:true},
   distance:{type:Nummber,required:true},
})

module.exports = mongoose.model("customer",customer)