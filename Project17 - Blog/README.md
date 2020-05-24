# Personal Blog Creation Notes



### NPM
1. Express
2. Body-parser
3. EJS
4. lodash

####

array.forEach(item => { console.log(item);  });

Express route params
---------------

```
app.get("/post/:topic", function(req, res){
    if (req.params.topic == option.posted[0].postedTitle){
        console.log("matched found");
    }
});
```