


// Includes() will search element and return Boolean 
// works for array or string //

var sentence = "Raphael is a good guy";
var wordOne = "bad";
var wordTwo = "good";

console.log(`the word : ${wordOne}" is 
${sentence.includes(wordOne) ? '' : 'not'} part of sentence`);

console.log(`the word : ${wordTwo}" is 
${sentence.includes(wordTwo) ? '' : 'not'} part of sentence!`);







// Capitalizing first Letter//
var myText = prompt("convert Text? ");
var FirstLetter = myText.slice(0,1).toUpperCase();
var restLetter = myText.slice(1,myText.length).toLowerCase();
console.log("Hello, "+FirstLetter+restLetter);




// UpperCase / Lowercase Method 
var food = prompt("convert Text? ");
var foodSmall = food.toLowerCase();
alert(foodSmall);
var foodBig = food.toUpperCase();
alert(myText.toUpperCase());
//// OR  /////
console.log(prompt("convert Text? ").toUpperCase());




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




//// Interpolation  -> ${expression} ////
// BACKTICKS + dollar sign + curly braces. //
var x = 10;
var y = 5;
console.log(`the sum of 10 and 5 is ${x+y}.`);




// Concatenation //
let a = 5;
let b = 10;
console.log('the sum is ' + (a + b) + ' of ' + a + " and " + b);

alert(myname + " has " + age);
alert(myname+DOB);




// Variables Declare and Assign //
var myname = "Raphael";
var DOB = "July, 1981"




// enter user input - PROMT 
var age = prompt("what is your age?");

