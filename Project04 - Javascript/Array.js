
// push() will add element to the end
var guessList = ["luana", "raphael", "ivan", "emma"]; 
guessList.push("alessandro");


// pop() will add element to the end and return the value //
var guessList = ["luana", "raphael", "ivan", "emma"]; 
var outName = guessList.pop();



// Includes() will search element and return Boolean 
// works for array or string //

var guessList = ["luana", "raphael", "ivan", "emma"]; 
var guessCheck = prompt("Your name, Please? ").toLowerCase();

if (guessList.includes(guessCheck)) {
    alert('Welcome');
}
else {
    alert('Sorry, maybe next time');
}



// Array //

var age = [20, 5, 45, 38];
var myAge = age[3];



