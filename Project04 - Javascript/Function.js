
// function (parameters) and RETURN message

/1/
function getMilk(money, cost) {
    console.log(CalculateMoney(money, cost) + " bottles of milk");
    console.log(CalculateChange(money, cost));
}

/2/ 
function CalculateMoney(inicialMoney, costperBottle) {
    var num = inicialMoney / costperBottle;
    return Math.floor(num);

}
/3/ 
function CalculateChange(inicialMoney, costperBottle) {
    var num = inicialMoney % costperBottle;
    return "He will get back $ " + num +  " of change.";

}
console.log(getMilk(10, 1.5));



// function camelCasing () {   Syntax;  } 

function main() {
    lineOdd();    // function inside function
}
function lineOdd() { 
    putBeeper = 2;
}
