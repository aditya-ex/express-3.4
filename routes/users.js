const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post('/',async(req,res)=>{
    try{
        const user = await new User(req.body).save();
        res.send(user);
    }catch (error){
        res.send("an error occured");
        console.log(error);
    }
});

module.exports = router;
