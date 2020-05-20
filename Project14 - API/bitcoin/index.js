//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));



//TODO: Create port and location
app.listen(3000, function () {
    console.log("server running on port 3000");
});



//TODO: Server will get from Browser and RESpond sending url index
app.get("/", function (req, res) {
    res.sendfile(__dirname + "/index.html");

});








/******************************************
 * TODO: Server will request a JSON with info BTC+USD and other info
                
    It will get response from external server, 
    Get key+value in JSON format (statuscode, body).
                    
//! REQUEST: this module have two options: URL or Object
    Get information from URL or Object (JSON to JS Object)
*  ? To check JSON content -> Check URL on browser!!
****************************************/








//! REQUEST From URL


/**
app.post("/", function(req, res){
    
    var moeda = req.body.crypto;
    var papel = req.body.fiat;

    var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var finalURL = baseURL + moeda + papel;


    request(finalURL, function(error, response, body){

        var flatdata = JSON.parse(body);
        var price = flatdata.last;
        
        console.log(response.body);
        console.log(price);
       

        res.write("<p> The current date is "+ flatdata.display_timestamp + " </p>");
        res.write("<h1> Crypto: " + moeda + " = Price: " + price + " in " + papel + " </h1>");
        res.send();

    });
    


});
*/






//! REQUEST From OBJECT



/**
//TODO: CALCULATE AMOUNT and COVERT

app.post("/", function (req, res) {

    var moeda = req.body.crypto; //! Override crypto in Object class
    var papel = req.body.fiat;
    var amount = req.body.amount;

    console.log(moeda);
    console.log(papel);

    var baseURL = "https://apiv2.bitcoinaverage.com/convert/local";

    //! OBJECT CREATE //
    var option = {
        url: baseURL,
        method: "GET",
        qs: {
            from: moeda, 
            to: papel,
            amount: amount
        }
    };

    request(option, function (error, response, body) {
        var flatdata = JSON.parse(body);
        var price = flatdata.price;

        console.log(price);

        //res.write("<p> The current date is " + flatdata.time + " </p>");
        //res.write("<h1>" + amount + " " + moeda + " = " + price + " " + papel + " </h1>");
        //res.send();

    });

});
*/