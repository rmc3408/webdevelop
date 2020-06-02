//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//** LOCAL MODULE */

const date = require(__dirname+"/date.js");

let hojeOne = date.getShortDate();
console.log(hojeOne); // Output: Short format of Todays.

let hojeTwo = date.getFullDate();
console.log(hojeTwo); // Output: Full format of Todays 
// Print Or you can insert as value in property.

//** LOCAL MODULE */

app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function () {
    console.log("server running on port 3000");
});

app.set('view engine', 'ejs');
app.use(express.static("public")); //for CSS, images file


//? global variable = outside function//
let newAddItems = ["Buy Food"]; 
let newWorkItems = ["Computer"];


app.get("/", function (req, res) {
     
    let today = new Date();
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        
    };

    let newday = today.toLocaleDateString("pt-BR", option);
    res.render('index', { ListTitle: newday, task: newAddItems});
    // newAddItem outside
});

app.post("/", function(req, res){
//** newAddItem can acess function app.get (local variable) */
//? YOU cannot run this, it will miss sevendays in app.get
//? -> res.render('index', { task: taskItem });


// FORM WILL POST data info HERE (from "/" or "/work")
    console.log(req.body); 
    if (req.body.buttonKey == "WorkList") {
        let item = req.body.newItem;
        newWorkItems.push(item);
        res.redirect("/work");

    } else {
        item = req.body.newItem;
        newAddItems.push(item);
        res.redirect("/");

    }
});
 
app.get("/work", function (req, res) {
    res.render('index', { ListTitle: "WorkList", task: newWorkItems});
    
});

app.get("/about", function (req, res) {
    res.render('about');
    
});


 

