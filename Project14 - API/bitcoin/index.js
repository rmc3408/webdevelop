//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));



//TODO: Create port and location
app.listen(3000, function(){    
    console.log("server running on port 3000");
});



//TODO: Server will get from Browser and RESpond sending url index
app.get("/", function (req, res){
    res.sendfile(__dirname+"/index.html");

});




//TODO: From Browser (using the POST info), server will request.
app.post("/", function(req,res){
    //console.log(req.body.crypto);
    //console.log(req.body.fiat);


    //TODO: It will request a JSON with info BTC+USD and other info
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/" + req.body.crypto + req.body.fiat , function(error, response, body) {
        
        // It will get response from external server
        // Get key+value in JSON format (statuscode, body).
        //console.log(response.statuscode);
        // console.log(response.body);

        //TODO: Convert from JSON to JS Object and use it.
        var flatdata = JSON.parse(body);
        var price = flatdata.last;
        //console.log(price);

        var avgprice = flatdata.averages.week;
        //console.log(avgprice);
        


        res.write("<p> The current date is "+ flatdata.display_timestamp + " </p>");
        res.write("<h1>The price of " + req.body.crypto + 
        " is "+ price + " " + req.body.fiat +" </h1>");

        res.send();

    });

});

