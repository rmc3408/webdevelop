var weight = prompt("How many kg? ");
var height = prompt("how tall? ");

function CalculateBmi(kg, m) {
    var total = kg / (m ** 2);
    return Math.round(total); 

}
var bmi = CalculateBmi(weight, height);
console.log(bmi);