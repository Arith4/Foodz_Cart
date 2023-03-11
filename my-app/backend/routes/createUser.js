const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const jwtSecretString = "dbhsdhjbvjhavdhjfbhdbhjhsdbdvjhsd";

router.post("/createUser",[
    body('email','Invalid email address').isEmail(),
    body('name', 'Name must be of minimum 3 characters').isLength({ min: 3 }),
    body('password','Password must be of minimum 5 characters').isLength({ min: 5 }),
],
async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
       await User.create({
        name : req.body.name,
        location : req.body.location,
        email : req.body.email,
        password : secPassword
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

router.post("/loginUser", 
body('email','Invalid email address').isEmail(),
body('password','Password must be of minimum 5 characters').isLength({ min: 5 }),
async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;
  try {
    let userData = await User.findOne({email});
    if(!userData){
      return res.status(400).json({
        success : false,
        message : "Enter valid email address",
       })
    }

    const comparePassword = await bcrypt.compare(req.body.password, userData.password);

    if(!comparePassword){
      return res.status(400).json({
      success : false,
      message : "Enter valid password",
      })
    }

    else{
    const data = {
      user : {
        id : userData.id
      }
    }

    const authToken = jwt.sign(data, jwtSecretString);

      return res.status(200).json({
        success : true,
        message : "Email and password are verified successfully",
        authToken : authToken
        })   
    }
  }
  catch(error){
     console.log(error);
     return res.json({
      success : false,
      message : "Not able to login User",
      err : error
     })
  }
});

module.exports = router;