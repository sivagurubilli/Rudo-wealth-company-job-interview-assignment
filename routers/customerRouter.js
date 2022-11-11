const customer = require("../models/customerModel")
const router = require("express").Router();

 // get the all customers data
 router.get("/",async(req,res)=>{
    const allCustomers = await customer.find()
    return res.send({customers:allCustomers})
})



//post the new customer data
router.post("/create",async(req,res)=>{
    try{
      
   const {fullName,currentLocation,numberofRides,
    averageRating} = req.body;
    

let newcustomer = new customer({
    fullName,currentLocation,numberofRides,
    averageRating
})
 await newcustomer.save()
res.status(200).send("customer created succesfully")

}catch(err){
        console.log(err)
        res.status(500).send("internal error")
    }

});

//edit customer by id 

router.put("/:id",async(req,res)=>{
    try{
        const editCustomer =await customer.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        return res.send({message:"successfully updated"})
    }catch(err){
        res.status(500).send("internal error")
    }
})

// delete customer by id

router.delete("/:id",async(req,res)=>{
    try{
        await customer.findByIdAndDelete(req.params.id)
        return res.send({message:"successfully deleted"})
    }catch(err){
        res.status(500).send("internal error")
    }
})
module.exports =router;