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