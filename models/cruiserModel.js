
const mongoose = require("mongoose")
 
const cruiser = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    mobileno:{type:String,required:true},
})

module.exports = mongoose.model("cruiser",cruiser)