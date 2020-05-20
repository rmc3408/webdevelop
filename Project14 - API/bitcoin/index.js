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








/******************************************
 * TODO: Server will request a JSON with info BTC+USD and other info
                
    It will get response from external server, 
    Get key+value in JSON format (statuscode, body).
                    
//! REQUEST: this module have two options: URL or Object
    Get information from URL or Object (JSON to JS Object)
*  ? To check JSON content -> Check URL on browser!!
****************************************/



//! REQUEST From URL



app.post("/", function(req, res){
    var moeda = req.body.crypto;
    var papel = req.body.fiat;

    var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var finalURL = baseURL + moeda + papel;


    request(finalURL, function(error, response, body){

        var flatdata = JSON.parse(body);
        var price = flatdata.last;

        console.log(response.statuscode);
        console.log(response.body);
        console.log(response.body.last);
       

        res.write("<p> The current date is "+ flatdata.display_timestamp + " </p>");
        res.write("<h1>Crypto:\t" + crypto + "\nPrice:\t" + price + "in " + fiat + " </h1>");
        res.send();

    });
    


});



//! REQUEST From OBJECT






//TODO: CALCULATE AMOUNT and COVERT
/**
app.post("/", function(req, res) {
    console.log(req.body.crypto);
    console.log(req.body.fiat);

    var crypto = req.body.crypto; //! crypto in Object class
    var fiat = req.body.fiat;
    var amount = req.body.amount;
    
    var baseURL = "https://apiv2.bitcoinaverage.com/convert/global";

    var option = {
        url: baseURL,
        method: "GET",
        qs: {
            from: crypto,  //! crypto in Object class
            to: fiat,
            amount: amount
            }
    };


            
    
    var flatdata = JSON.parse(body);  
    
    request(option, function(){
            
        var price = flatdata.price;
            
        res.write("<p> The current date is "+ flatdata.time + " </p>");
        //res.write("<h1>Crypto:\t" + crypto +
        //            "\nPrice:\t" + price + 
        //            "\nFiat:\t" + fiat + 
        //            "\n\nAmount:\t" + amount + " </h1>");
        res.send();

    }); 

});
**/
