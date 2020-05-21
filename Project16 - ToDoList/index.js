//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function () {
    console.log("server running on port 3000");
});

app.set('view engine', 'ejs');
app.use(express.static("public")); //for CSS, images file


//? global variable = outside function//
let newAddItems = ["WorkOut"]; 
let newWorkItems = ["Computer"];


app.get("/", function (req, res) {
    let today = new Date();
    

    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    let newday = today.toLocaleDateString("pt-BR", option);
    res.render('index', { sevenDays: newday, task: newAddItems});
    // newAddItem outside
});

app.post("/", function(req, res){
    
    item = req.body.newItem;
    newAddItems.push(item);
    res.redirect("/"); 
//** newAddItem can acess function app.get (local variable) */

    //? YOU cannot run this, it will miss sevendays in app.get
    //? -> res.render('index', { task: taskItem });

});

app.get("/work", function (req, res) {
    let today = new Date();
     
    let option = {
        weekday: "long",
        day: "numeric",
                
    };

    let newday = today.toLocaleDateString("pt-BR", option);
    res.render('work', { workDays: newday, task: newWorkItems});
    // newAddItem outside
});

app.post("/work", function(req, res){
    
    item = req.body.newItem;
    newWorkItems.push(item);
    res.redirect("/work"); 
//** newWorkItem can acess function app.get(/work) (to get local variable) */

    //? YOU cannot run this, it will miss sevendays in app.get
    //? -> res.render('index', { task: taskItem });

});
