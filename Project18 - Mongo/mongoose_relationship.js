//jshint esversion: 6

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/';
const userDatabase = 'fruitsDB'; //!Database name
mongoose.connect(url+userDatabase, { useUnifiedTopology: true, useNewUrlParser: true });


/////////////////////////////
var fruitSchema = new mongoose.Schema({ //TODO: Structure of table
    name:  String, // String is shorthand for {type: String}
    rating: Number,
    review:   String    
});

var personSchema = new mongoose.Schema({ //Structure
    name: String,
    age: Number,
    favfruit: fruitSchema
});

var personModel = mongoose.model("people", personSchema);
var fruitModel = mongoose.model("fruits", fruitSchema); //! Collection


const figo = new fruitModel({ //! Document
    name: "Figo", 
    rating: 1,
    review: "Nausty taste"
});

figo.save();


var president = new personModel({
    name: "Bozo",
    age: 63,
    favfruit: figo
});

president.save();


personModel.find(function(err,docs) {
    if (err){
        console.log(err);
    }else {
        console.log(docs);
    }

});

