//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); 

app.listen(3000, function () {  
    console.log("server running on port 3000");
});

app.get("/", function (req, res) {

    var today = new Date();
    console.log(today, today.getDay());

    if (today.getDay() == 6 || today.getDay() == 0) {
        console.log("YEY, weekend");
        res.sendFile(__dirname + "/index.html");

    }
    else{
        console.log("workDay");
        res.sendFile(__dirname + "/index.html");
    }
    

});

