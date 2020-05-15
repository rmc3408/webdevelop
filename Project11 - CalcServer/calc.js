//jshint esversion:6


const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 
app.use(bodyParser.urlencoded({ extended: true }));

//////////////////


app.listen(3000, function (){
    console.log("Server online on port 3000");
});




///////////////////////////////////////

app.get('/', function (req, res){
    // res.send("home page");
    // res.sendFile('index.html');
    res.sendFile(__dirname+'/index.html'); //! Doesn't matter location//

});

app.post('/', function(req, res){
    
    console.log(req.body); //! Request from post and show what store at req.body object /
    console.log(req.body.num1);
    
    // TODO: They code is from URL encode is text, So, convert Parse to number
    var num1 = Number(req.body.num1); 
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send(`The addiction is ${result}.`); 
});



///////////////////////////////////////////////


app.get('/bmi', function(req, res){
    res.sendfile(__dirname+'/bmi.html');

});

app.post('/bmi', function(req,res){
    
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

        function CalculateBmi(kg, m) {
            var total = kg / (m * m);
            return Math.round(total);

        }
    res.send('Your BMI is '+CalculateBmi(weight, height));
    
});