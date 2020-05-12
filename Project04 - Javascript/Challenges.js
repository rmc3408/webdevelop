





////////////////////
//   FIZZ BUZZ    //
////////////////////

var output = [];
var num = 1;

function fizzBuzz() {
    
    if (num % 3 == 0 && num % 5 == 0){
        output.push('FizzBuzz');

    }
    else if (num % 3 == 0) {
        output.push('Fizz');

    }
    else if (num % 5  == 0) {
        output.push('Buzz');

    }
    else {
        output.push(num);

    }
    num++;
    console.log(output);
}




////////////////////
// BMI CALCULATOR //
////////////////////

var weight = prompt("How many kg? ");
var height = prompt("how tall? ");

function CalculateBmi(kg, m) {
    var total = kg / (m ** 2);
    return Math.round(total); 

}
var bmi = CalculateBmi(weight, height);
console.log(bmi);