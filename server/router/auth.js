const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({path:'../config.env'});



router.get("/", (req, res) => {
  res.send("hello World ads");
  console.log("hello World asd");
});


router.post("/register", async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill all field" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    const username = email.split('@')[0];
    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "WELCOME TO CRACK WITH US!",
      html: `
      <h1>WELCOME TO CRACK WITH US!</h1>
      <img src="cid:cwus" width=1000" alt="img"/><br/>
      <h1>Heyy <strong>${username}</strong> !!!  Thanks For Connecting With Us...</h1> <br/>
      <h2>Improve your skills with this Question recommended for you</h2><br/>
      <h3>Sign in to your Account using the same credentials...</h3><br/><br/>
      <h4>Happy Coding....</h4>
      <pre>



      Regards,
            Team Crack With Us!
      
      </pre>      `,
      attachments: [{
        filename:"cwus.png",
        path:"../server/images/cwus.png",
        cid:"cwus"
      }]
    };
    // transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
      },
    });



    if (userExist) {
      return res.status(422).json({ error: "Email Already exists" });
    }else if(password != cpassword){
      return res.status(422).json({ error: "Please type the same password in both fields" });
    }else{
      const user = new User({ name, email, password, cpassword });

      const userRegister = await user.save();
  
      if(userRegister){
          res.status(201).json({
          message: "user registered successfully",
        });

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("email send " + info.response);
          }
        });  
      }
      else{
        res.status(500).json({ error: "failed to register" });
      }
    }

    // yeha pe middalware

    // await user.save();
    // res.status(201).json({
    //   message: "user registered successfully",
    // });

  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {

  try {
    let token;
    const { email, password } = req.body;
    const username = email.split('@')[0];

    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "WELCOME TO CRACK WITH US!",
      html: `<img src="cid:cwus" width=1000" alt="img"/><br/>
      <h1>Heyy <strong>${username}</strong> !!!  Thanks For Connecting With Us...</h1> <br/>
      <h2>Improve your skills with this Question recommended for you</h2><br/>
      Topic: "Array"<br/>
      Problem: "Reverse the array"<br/>
      Quetion Url : https://practice.geeksforgeeks.org/problems/reverse-an-array/0
        `,
      attachments: [{
        filename:"cwus.png",
        path:"../server/images/cwus.png",
        cid:"cwus"
      }]
    };
    // transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
      },
    });
    



    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if(userLogin){
      const isMatch  = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken",token,{
        expires:new Date(Date.now()+25892000000),
        httpOnly:true
      })

      if (!isMatch) {
        res.status(404).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "user signed in successfully" });
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("email send " + info.response);
          }
        });  
      }
    }else{
      res.status(404).json({ error: "Invalid Credentials" });
    }

    
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
