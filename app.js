const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const res = require("express/lib/response");

const app = express();
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended : true
}));
// ---------------------------------------------

app.get("/",function(req,res){
    res.render("home");
});
app.get("/login",function(req,res){
    res.redirect("/");
});
app.get("/register",function(req,res){
    res.render("register");
});

app.get("/success",function(req,res){
    res.render("success");
});

// ---------------------------------------------

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
