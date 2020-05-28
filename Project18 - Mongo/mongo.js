//jshint esversion: 6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); //Testing for errors

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, {
    useUnifiedTopology: true
});




//TODO:  Use connect method to connect to the Server

client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    


    //TODO: First will Insert, Second Find and next will Close.

    insertDocuments(db, function() { 
        findDocuments(db, function() {
            client.close();
          });      
      });
    
});





const insertDocuments = function(db, callback) {
    
    //TODO: Insert in collection called fruit
    const collectionTable = db.collection('fruit');
    
    
    //TODO: Insert some documents
    
    //Insert One document
    collectionTable.insertOne({
        name: "apple",
        score: 8,
        rating: "Popular Fruit"
    }, function (err, r) {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);
        console.log("Inserted 1 document into the collection");
        
    });

    // Insert multiple documents
    collectionTable.insertMany([{
            name: "Orange",
            score: 6,
            rating: "Sour Fruit"
        },
        {
            name: "banana",
            score: 10,
            rating: "Awesome Fruit"
        }
    ], function (err, r) {
        assert.equal(null, err);
        assert.equal(2, r.insertedCount);
        console.log("more 2 documents into collection");
        callback(r);
    });
    
        
};




const findDocuments = function(db, callback) {
    // Get the documents collection
    let collection = db.collection('fruit');
    

    //! Find one documents {a: 3} or all {}

    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
};