
// UpperCase / Lowercase Method 
var food = prompt("convert Text? ");
var foodSmall = food.toLowerCase();
alert(foodSmall);
var foodBig = food.toUpperCase();
alert(myText.toUpperCase());
//// OR  /////
console.log(prompt("convert Text? ").toUpperCase());
consle.log("hello");

// Slice Method 
var myText = "Javascript";
alert(myText.slice(0,4));
alert(myText.slice(4,11));

var tweet = prompt("check how many lettlers?");
var countTweeted = tweet.length;
var s = tweet.slice(0,20);
alert("you wrote "+countTweeted+ " , but first "+ s.length + " letters are "+s);


// Lenght Method //
var tweet = prompt("check how many lettlers?");
var countTexted = tweet.length;
var leftTweet = 240 - countTexted;
alert("You have written "+countTexted+ " charaters, and left "+leftTweet);


// Variables Declare and Assign //
var myname = "Raphael";
var DOB = "July, 1981"
var age = prompt("what is your age?");


// string concatenation //
alert(myname + " has " + age);
alert(myname+DOB);
