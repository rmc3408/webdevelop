////////////////////
//   Fibonnacci   //
////////////////////

function fibonacciGenerator(n) {

    var output = [0, 1];

    for (var i = 0; i < n; i++) {
        output.push(output[i] + output[i + 1]);
    }

    return output;
}








////////////////////
//   Beer Song    //
////////////////////

count = 10;

function beerSong() {
    while (count > 0) {
        console.log(`${count} bottles of beer. Take one down, keep ${count == 1? 'no more' : count -1} beer around. `);
        count--;
    }
}





////////////////////
//   FIZZ BUZZ    //
////////////////////

var output = [];
var num = 1;

function fizzBuzz() {

    if (num % 3 == 0 && num % 5 == 0) {
        output.push('FizzBuzz');

    } else if (num % 3 == 0) {
        output.push('Fizz');

    } else if (num % 5 == 0) {
        output.push('Buzz');

    } else {
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