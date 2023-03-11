const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createUser", async (req, res) => {
    try {
       await User.create({
        name : req.body.name,
        location : req.body.location,
        email : req.body.email,
        password : req.body.password
       })
       return res.json({
        success : true,
        message : "Successfully created User",
        err : {}
       })
    }
    catch(error){
       console.log(error);
       return res.json({
        success : false,
        message : "Not able to create User",
        err : error
       })
    }
});

module.exports = router;