//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function () {
    console.log("server running on port 3000");
});

app.set('view engine', 'ejs');

let newAddItems = ["Sleep"]; //? global variable = outside function//

app.get("/", function (req, res) {
    var today = new Date();
    

    var option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    var newday = today.toLocaleDateString("pt-BR", option);
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

