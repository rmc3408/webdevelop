// Math Built-in Methods.

var rnd = Math.random();  // Show number from 0 - 0,99999... //
var rnd = Math.random(6);

function CalculateLoveTax(num) {
    var rnd = Math.random();
    rnd *= num;
    return Math.ceil(rnd); 

}
console.log(CalculateLoveTax(6));
console.log(CalculateLoveTax(100));




// Make values a integers //

Math.floor();
Math.ceil();
Math.pow(2,3);





// increment or decrement
var x = 60;
var y = 12;
x++;   // x = x + 1
x+=2;  // x = x + 2
x--;  //  x = x - 1
x/=y; //  x = x / y
x*=5; //  x = x * 5




// Order to Process numbers //
var dogAge = 14;
var humanAge = ((dogAge - 2) * 4) +21;
console.log(humanAge);
