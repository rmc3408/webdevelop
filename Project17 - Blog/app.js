//jshint esversion: 6

/////////////////////////
let homeContent = "This is a Home page of my WebBlog. This is a Home page of my WebBlog. This is a Home page of my WebBlog. This is a Home page of my WebBlog. This is a Home page of my WebBlog. This is a Home page of my WebBlog. ";
let aboutContent = "My name is Raphael, I live in Isabella St. My name is Raphael, I live in Isabella St. My name is Raphael, I live in Isabella St. My name is Raphael, I live in Isabella St. My name is Raphael, I live in Isabella St. ";
let contactContent = "My name is Raphael, I live in Isabella St. My email is rmc3408@protonmail.com and phone (647)838-9921 - My name is Raphael, I live in Isabella St. My email is rmc3408@protonmail.com and phone (647)838-9921 - My name is Raphael, I live in Isabella St. My email is rmc3408@protonmail.com and phone (647)838-9921";
var _ = require('lodash');

let posts = [];

var option = {
    pageContent: homeContent,
    posted: posts
             };

/////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');




app.get("/",  function(req, res){ //home route
    
    res.render('home', option); //just filename, no extension.
});

app.get("/post/:topic", function(req, res){ //express route use :
    
    posts.forEach(post => {
        console.log(_.lowerCase(req.params.topic));
        console.log(_.lowerCase(post.postedTitle));
        
        if (_.lowerCase(req.params.topic) == _.lowerCase(post.postedTitle)){
            console.log("matched found");
            res.render('post', {actualTitle:post.postedTitle, actualMsg: post.postedMsg });
            
        }
    } );

    // It will compare only first object ( post[0]).
    // if (req.params.topic == option.posted[0].postedTitle){
    //    console.log("matched found");
    // }else {}

    //params is object, topic is key, output value of key
    //console.log(req.params.topic); 

    

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



