const cruiser = require("../models/cruiserModel")
const router = require("express").Router();

 // get the all cruisers data available on database
 
 router.get("/",async(req,res)=>{
    const allCruiser= await cruiser.find()
    return res.send({cruisers:allCruiser})
})



//post the new cruiser data

router.post("/create",async(req,res)=>{
    try{
      
   const {name,email,mobileno,driver,
    rating} = req.body;
    

let newcustomer = new customer({
    name,email,mobileno,driver,
    rating
})
 await newcustomer.save()
res.status(200).send("cruiser created succesfully")

}catch(err){
        console.log(err)
        res.status(500).send("internal error")
    }

});

//edit cruiser by id 

router.put("/:id",async(req,res)=>{
    try{
        const {name,email,mobileno,driver,
            rating} = req.body;
    await cruiser.findByIdAndUpdate({_id:req.params.id},
        {  name:name,email:email,mobileno:mobileno,driver:driver,
            rating:rating }
        ,{new:true})
        return res.send({message:"successfully updated"})
    }catch(err){
        res.status(500).send("internal error")
    }
})

// delete cruiser by id

router.delete("/:id",async(req,res)=>{
    try{
        await cruiser.findByIdAndDelete(req.params.id)
        return res.send({message:"successfully deleted"})
    }catch(err){
        res.status(500).send("internal error")
    }
})
module.exports =router;