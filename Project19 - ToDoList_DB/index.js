//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.listen(3000, function () {
    console.log("server running on port 3000");
});


let newAddItems = ["Buy Food"]; 
let newWorkItems = ["Computer"];


//** CONNECT DATABASE - mongoose */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tdlistDB', {useNewUrlParser: true});

var itemsSchema = new mongoose.Schema({
    name: String
});

var itemsModel = new mongoose.model("itemDB", itemsSchema);



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


 

