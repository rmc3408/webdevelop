//jshint esversion:6
  

//* Get and import module Express
const express = require('express');



//*Create a object with property and function from Express Server.
const app = express();



//* make server avaliable and listenning for any webbrowser
app.listen(3000, function(){
    console.log("Server is online on port 3000 - http://localhost:3000");
});


//* Any Get from Browser in location "/" will callback function to say what server to do? 
//TODO: req = request; res = response
// console.log(request);  = info about server

app.get("/", function(req, rep){ 
    rep.send("<h1>Main Page Server Connected!</h1>");  //! Server send response
    
});

//* Browser want get Contact page response 
app.get("/contact", function(req, rep){ 
    rep.send("<h3>Contact Server: rmc3408@gmail.com!</h3>");  //! Server send response
    
});

app.get("/aboutus", function(req, rep){ 
    rep.send("<h3>My name is Raphael and it is my server!</h3>");

});






