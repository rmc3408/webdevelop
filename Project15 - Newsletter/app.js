//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); //folder where all local files
// CSS and images MUST be in subfolders.

////////////////////////////

app.listen(3000, function() {
    console.log("server running on port 3000");
});




/////////////////////////////////
app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
    

});

////////////////////////
app.post("/", function(req, res){
    var fname = req.body.first;
    var lname = req.body.last;
    var email = req.body.email;

    console.log(fname, lname, email);

    res.send("<h2>Full Name: "+ fname +" "+ lname + " ,email: "+email+ "</h2>");


});