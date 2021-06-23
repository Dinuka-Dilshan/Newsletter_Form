const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
  }));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/", function(req,res){
    console.log(req.body.email);
})
app.listen("3000", function(){
    console.log("server running on port 3000");
})