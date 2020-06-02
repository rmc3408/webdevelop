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



//** CONNECT DATABASE - mongoose */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tdlistDB', { useUnifiedTopology: true, useNewUrlParser: true});

const itemsSchema = new mongoose.Schema({
    name: String
});

const itemsModel = new mongoose.model("itemDB", itemsSchema);

let new01 = new itemsModel({
    name: "Pencil"
});

let new02 = new itemsModel({
    name: "rubber"
});

let new03 = new itemsModel({
    name: "paper"
});

var newItems = [];

itemsModel.insertMany([new01, new02, new03], function(e, docs){
    if (e){
        console.log(e);
    }
    else{
        console.log(docs);
    }
} );





app.get("/", function (req, res) {
     

    res.render('index', { ListTitle: "Today", task: newAddItems});
    
});


app.post("/", function(req, res){



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


 

