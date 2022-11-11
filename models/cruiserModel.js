
const mongoose = require("mongoose")
 
//model for cusomer object in database
const cruiser = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobileno:{type:Number,required:true},
    driver:{type:String,required:true},
    rating:{type:Number,required:true}
})

module.exports = mongoose.model("cruiser",cruiser)