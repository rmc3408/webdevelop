# SQL
--------

## SQL
1. CREATE TABLE ... FROM
2. SELECT ... FROM
3. INSERT INTO .... VALUES
4. UPDATE .... SET .... WHERE ..
5. DELETE FROM .... WHERE.

## Mongo DB - NoSQL

- download mongoDB Server (no cloud);
- DO NOT install mongo compass;
- Create a PATH (.bash_profile).

1. Open mongoD and keep server running.
2. Open new Tab, open mongo.exe



### Mongo Commands
--------------

* help
* show dbs
* use __to create__
* db __to see current working db__

#### create collection ( In NoSQL is not table, is collections)

db.collection.insertOne()   __one row__
db.collection.insertMany()  __multiples row__


```
db.products.insertOne( { id:1, name:"Pen", price:1.20 })

```

#### Read collection = find()

db.collection.find()   

```
db.products.find( { id:1, name:"Pen", price:1.20 })

```
