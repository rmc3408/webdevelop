# EJS


https://ejs.co/


#### Table of contents
-----------------

- Basic format
- Delimiters
- Starting tags
  - `<%=`: Escaped output
  - `<%-`: Unescaped output
  - `<%#`: Comments
  - `<%`: Scriptlet
  - `<%_`: Scriptlet, removes all preceding whitespace
- Ending tags
  - `%>`: Regular ending tag
  - `-%>`: Removes trailing newline
  - `_%>`: Removes all trailing whitespace
- Literal tags
- Including other files
  - “Preprocessor” directive
  - JavaScript `include()` function
- Copyright

#### Code JS
-----------------
Must be using NPM with express, body-parser and EJS.

1. Create directory views ,and index.ejs inside.


```
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    
    res.render('index', { codeOnHTML_key: newAddItems_Values});
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    newAddItems.push(item);
    res.redirect("/"); 

});

```

----------------
# SCOPE VARIABLES
----------------

### CONST
----

If declares CONST to variable = not change number.
``` const a = 5; ```

But if declare CONST to [array]. The elements assign at beginning won't change. BUT you can Add new value.

``` 
const a = [5];
a.push(6); //Output: a = [5,6]
a = [20];  // error!

```

Same to Objects => You can change value in key name. 
You can NOT change the key name. 

``` 
const MyObj = {'key':"value'};

MyObj = {'otherkey':"value'}; //ERROR
MyObj.key = 'Value2'; // Ok!
```



### LET
----

If declares inside block of function (if-Else/function), ONLY will be execute inside block of syntax. 

```
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
```

### VAR
----

If declares in a block-scoped (if-Else / function-scoped) variable, change k-scoped of local and global variable. 

```
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 2
``
