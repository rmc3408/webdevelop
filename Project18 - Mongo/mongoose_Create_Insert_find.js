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

var fruitModel = mongoose.model("fruits", fruitSchema); //! Collection

const fruit = new fruitModel({ //! Document
    name: "Apple", 
    rating: 6,
    review: "Good taste"
});

fruit.save();

//TODO: To read. 

fruitModel.find(function(err,docs) {
    if (err){
        console.log(err);
    }else {
        console.log(docs);
    }

});


//////////////////////////////////

var personSchema = new mongoose.Schema({ //Structure
    name: String,
    age: Number
});

var personModel = mongoose.model("Id", personSchema);

var personOne = new personModel({
    name: "John",
    age: 37
});

var personTwo = new personModel({
    name: "Jane",
    age: 25
});



personOne.save();
 


//////////////////////////
personModel.insertMany([personOne, personTwo], function(error, dataAdded) {
    if(error){
        console.log(error);
    } else {
        console.log(dataAdded);
        console.log("Sucessful Added!!");
    }

});

/////////////////////////////

//TODO: TO read

fruitModel.find(function(err,docs) {
    if (err){
        console.log(err);
    }else {
        console.log(docs);
    }

});
/*8888888888888888888888888*/


/******* INSERT MULTIPLE OBJECTS AND FIND *******************/
const apple = new fruitModel({ //! document 01
    name: "Apple", 
    rating: 9,
    review: "Good taste"
});

const kiwi = new fruitModel({ //! document 02
    name: "Kiwi", 
    rating: 6,
    review: "Regular taste"
});

const banana = new fruitModel({ //! Document 03
    name: "Banana", 
    rating: 1,
    review: "Good taste"
});

fruitModel.insertMany([kiwi, apple, banana], function(err, docs){
    if(err){
        console.log(err);
    }else {
        console.log("Successful Added!");
        console.log(docs);
    }
});


fruitModel.find(function(err, docs){ //! docs (final object is array)
    if(err){
        console.log(err);
    }else {
        docs.forEach(function (item) {
            console.log(item.name);
        });
    mongoose.connection.close();
        
    }
});
/*******************************************/
