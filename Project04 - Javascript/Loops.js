

//        FOR loops   , keep run for many n times //
//   for (var start; end; iteration++) {syntax} //

output = [];
for (var count = 1; count <= 10; count++) {
    count % 3 == 0 ? output.push("fizz") : output.push(count); 
}
console.log(output);









// While loops , keep run whenever statement is TRUE //
output = [];
count = 1;
while (count<=10) {

    count % 3 == 0 ? output.push("fizz") : output.push(count); 
    count++;
}
console.log(output);




// Ternary decision Loop Stamenent //
var sentence = "Raphael is a good guy";
var wordOne = "bad";
///     QUESTION  (if)       ? TRUE : FALSE //
console.log(`the word : ${wordOne}" is 
${sentence.includes(wordOne) ? ''   : 'not'} part of sentence`);




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