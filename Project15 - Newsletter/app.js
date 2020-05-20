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
    var password = "f0679f27a55fd90412b5ef954423874b-<4CODE>";
    var auth = username + " " + password;
    

    console.log(fname, lname, email);
    //res.send("<h2>Full Name: "+ fname +" "+ lname + " ,email: "+email+ "</h2>");
  


    //? info designated from HTML to mailchimp.
    var rawdata = {
        members: [ 
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {FNAME: fname, LNAME: lname }
            } ]
        
    };


    var jdata = JSON.stringify(rawdata);
   

    
    //? Object to mailChimp.
    var option = {
        url: 'https://us18.api.mailchimp.com/3.0/lists/f6f5e44c55',
        method: 'POST',
        headers: { "Authorization": auth }, //! Basic HTTP authorization
        body: jdata
            
    };

    

    request(option, function (error, response, body) {
        console.log(response.statusCode);
        if (error == 401) {
            res.send("<h1>Authetication Error - Change FOUR Characters CODE to us18</h1>");
        
        } else if (response.statusCode == 200) {
            res.sendFile(__dirname+"/sucess.html");
    
        } else {
            res.sendFile(__dirname+"/failure.html");
        }
        
  
    });

});

app.post("/failure", function(req, res){
    res.redirect("/");      //! Redirect to main route.


} );

