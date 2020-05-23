//jshint esversion: 6

/////////////////////////
let homeContent = "This is a Home page of my WebBlog. This is a Home page of my WebBlog. This is a Home page of my WebBlog. This is a Home page of my WebBlog. This is a Home page of my WebBlog. This is a Home page of my WebBlog. ";
let aboutContent = "My name is Raphael, I live in Isabella St. My name is Raphael, I live in Isabella St. My name is Raphael, I live in Isabella St. My name is Raphael, I live in Isabella St. My name is Raphael, I live in Isabella St. ";
let contactContent = "My name is Raphael, I live in Isabella St. My email is rmc3408@protonmail.com and phone (647)838-9921 - My name is Raphael, I live in Isabella St. My email is rmc3408@protonmail.com and phone (647)838-9921 - My name is Raphael, I live in Isabella St. My email is rmc3408@protonmail.com and phone (647)838-9921";

var option = {
    pageContent: homeContent
    
             };

let posts = [];


/////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');




app.get("/",  function(req, res){ //home route
    console.log(posts);
    res.render('home', option); //just filename, no extension.
});



app.post("/compose", (req,res) =>{
    const post = {
        postedTitle: req.body.title,
        postedMsg: req.body.message
                };
    posts.push(post);
    res.redirect("/");
    

});

app.get("/about",  function(req, res){ //home route
    option.pageContent = aboutContent;
    res.render('about', option ); //just filename, no extension.
});

app.get("/contact",  function(req, res){ //home route
    option.pageContent = contactContent;
    res.render('contact', option ); //just filename, no extension.
});

app.get("/compose",  function(req, res){ //home route
    res.render('compose'); //just filename, no extension.
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



