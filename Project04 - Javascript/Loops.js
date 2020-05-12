// Ternary decision Loop Stamenent //
var sentence = "Raphael is a good guy";
var wordOne = "bad";


console.log(`the word : ${wordOne}" is 
${sentence.includes(wordOne) ? ''   : 'not'} part of sentence`);
///     QUESTION  (if)       ? TRUE : FALSE //




// Logical Comparator operators //

var lovescore = 68;

if (lovescore >= 70 || lovescore == 0) {
    console.log("Lucky you!");
    
} 
if (lovescore < 70 && lovescore >= 30){
    console.log("Good chances!");
}
else {
    console.log("Sorry!");
}








// Equals Comparator operators //
var a = 1;
var b = 1;

if (a === b) {
    console.log("the a === b has stringly SAME values and SAME data type");
    
} 
if (a == b){
    console.log("the a == b has SAME values BUT NOT SAME data type");
}
else {
    console.log("the a , b have different values and NOT SAME data type");
}







// If ... else //
if (rnd > 50) {

    console.log("More than 50%");
    return rnd;
} else {

    console.log("Less than 50%");
    return rnd;
}