//jshint esversion: 6

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/';
const userDatabase = 'fruitsDB'; //!Database name
mongoose.connect(url+userDatabase, { useUnifiedTopology: true, useNewUrlParser: true });


/////////////////////////////
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




//////////////////////////////////

const banana = new fruitModel({ //! document 01
    //name: "Banana",     
                            //! Skipping one key.
    rating: 9,
    //rating: 34,           //! Out of Range
    review: "Awesome"
});

banana.save();
mongoose.connection.close();

