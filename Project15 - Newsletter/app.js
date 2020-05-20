//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public")); //folder where all local files
// CSS and images MUST be in subfolders.

////////////////////////////

app.listen(3000, function () {
    console.log("server running on port 3000");
});




/////////////////////////////////
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");


});

////////////////////////
app.post("/", function (req, res) {
    var fname = req.body.first;
    var lname = req.body.last;
    var email = req.body.email;

    var username = "rmc3408";
    var password = "f0679f27a55fd90412b5ef954423874b-us18";
    var auth = username + " " + password;

    console.log(fname, lname, email);
    //res.send("<h2>Full Name: "+ fname +" "+ lname + " ,email: "+email+ "</h2>");

    var option = {
        url: 'https://us18.api.mailchimp.com/3.0/lists/f6f5e44c55',
        method: 'POST',
        headers: {                  //! Basic HTTP authorization
            "Authorization": auth}
    };

    request(option, function (error, response, body) {
        if (error) {
            console.log(error);

        } else {
            console.log(response.statusCode);
            console.log('body : ', body);
        }

    });

});