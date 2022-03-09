require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const md5 = require("md5"); // For hashing 

const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended : true
}));

// Connecting our database
mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true});
// User Schema
const userSchema= new mongoose.Schema({
    email:String,
    password: String
});
const secret=process.env.SECRET_KEY; // key used for encryption

// Model
const User=new mongoose.model("User",userSchema);

// ---------------------------------------------

app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.redirect("/");
});
app.post("/login",function(req,res){
    const username= req.body.username;
    const password = md5(req.body.password);
    User.findOne({email: username},function(err,foundUser){
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(foundUser)
            {
                if(foundUser.password === password)
                {
                    res.render("success");
                }
                else
                {
                    res.redirect("/");
                }
            }
            else
            {
                res.redirect("/");
            }
        }
    });
});

app.get("/register",function(req,res){
    res.render("register");
});
app.post("/register",function(req,res){
    const newUser = new User({
        email: req.body.username,
        password: md5(req.body.password)
    });
    newUser.save(function(err){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render("success");
        }
    });
});

app.get("/logout",function(req,res){
    res.redirect("/");
})
// ---------------------------------------------

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
