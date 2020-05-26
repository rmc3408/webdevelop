# SQL
--------

### SQL Commands
1. CREATE TABLE ... FROM
2. SELECT ... FROM
3. INSERT INTO .... VALUES
4. UPDATE .... SET .... WHERE ..
5. DELETE FROM .... WHERE.


# Mongo DB - NoSQL
-----------------

- download mongoDB Server (no cloud);
- DO NOT install mongo compass;
- Create a PATH (.bash_profile).

1. Open mongoD and keep server running.
2. Open new Tab, open mongo.exe




### Mongo Commands

* help
* show dbs
* show collections
* show users
* use __to create__
* db __to see current working db__

__Dictionary__

[SQL Comparasion](https://docs.mongodb.com/manual/reference/sql-comparison/)


db              = database
collection      = table
field           = collumn
row             = document
embedded doc    = joinTable
primary key     = primary key

Database Server = mongod
Database Client = mongo


#### create collection ( In NoSQL is not table, is collections)

db.collection.insertOne()   __one row__
db.collection.insertMany()  __multiples row__


```
db.products.insertOne( { id:1, name:"Pen", price:1.20 })

```

#### Read collection = find( query, projections)

db.collection.find( query )   

```
db.products.find( {name:"Pen"})

```

#### Query operators and  projection selectors.

  * query is the condition = WHERE.

```
db.products.find( price: {$gt:1} )

```

* Projection = Only return that Key.
  * 1 or true to include the field in the return documents.
  * 0 or false to exclude the field.

```
db.products.find(price: 0.80, {id:0, name:1} )

```

#### Update Collection = Update(query, update)

- query is WHERE is located. Must be between {}.
- update = {$SET: {key:value}}

```
db.products.updateOne({id:1}, {$set: {stock: 32} })

```


#### Delete Collection = DeleteOne(query)

- query is WHERE is located. Must be between {}.

```
db.products.deleteOne({stock:12}) 

```

#### Relatioship

One inside the other. its like Join

```
{
    id:3,
    name:"Pencil",
    price:0.80,
    stock:12,
    reviews:[{
        authorName:"John",
        rating:4,
        review:"Good"
      },{
        authorName:"Anne",
        rating:2,
        review:"Poor"
        }]
}
```

#### Other format Relatioship 

- This is another format to show CROSS Join

For each ID (using underscore).

Same price, using productOrdered: [1,2]

``
{
  _id:1,
  stock: 32
}

{
  _id:2,
  stock: 43
}

{
  price: 0.80,
  productsOrdered: [1, 2]
}

``

### Mongo Driver for Node.js
------------------------------

1. npm init
2. npm install mongodb
3. Create app.js file and connection commands.

* if see Depracation Warning... Iit is a possible error, check: (node: code) and google it. But usual add option object to new client.
` const client = new MongoClient(url, { useUnifiedTopology: true } ); `

##### MongoD Server must be running before your node app.js