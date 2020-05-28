//jshint esversion: 6

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/';
const userDatabase = 'fruitsDB'; //!Database name
mongoose.connect(url+userDatabase, { useUnifiedTopology: true, useNewUrlParser: true });

var fruitSchema = new mongoose.Schema({ //TODO: Structure of table
    name: {
        type: String,   
        required: [true, "Which fruit"]      //? Data REQUIRED
    },  
    rating: {           
        type: Number,
        min: 1,             //? VALIDATION DATA
        max: 10
    },
    review: String     
});

var fruitModel = mongoose.model("fruits", fruitSchema); //! Collection

const fruit = new fruitModel({ //! Document
    name: "Apple", 
    rating: 6,
    review: "Good taste"
});



fruitModel.find(function(err, docs){ //! docs (final object is array)
    if(err){
        console.log(err);
    }else {
        docs.forEach(function (item) {
            console.log(item.name);
        });
      
    }
    mongoose.connection.close();
});



// *---------------UPDATE -------------------- **//

// filter = Specific location document
// doc = What to update;
// Callback function
fruitModel.updateOne(
    {_id:"5ecf20c65f81e132c49f2856"},
    {name:"Pineapple"},
    function(err, docs){ 
        if(err){
            console.log(err);
        }else {
            console.log("UPDATE WORKS FINE!");
            console.log(docs);
        }
    }
);
/************************************************* */

fruitModel.deleteOne({_id:"5ecf20c65f81e132c49f2856"},
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Line X was deleted");
        }
    }
);

