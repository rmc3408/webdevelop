

// function (parameters) and RETURN message

function getMilk(money, cost) {
    console.log(CalculateMoney(money, cost) + " bottles of milk");
    return CalculateChange(money, cost);
}

function CalculateMoney(inicialMoney, costperBottle) {
    var num = inicialMoney / costperBottle;
    return Math.floor(num);

}
function CalculateChange(inicialMoney, costperBottle) {
    var num = inicialMoney % costperBottle;
    return "will get back $ " + num +  " of change.";

}
console.log("And he " + getMilk(10, 1.5));



//////////////
// function camelCasing () {   Syntax;  } 
//////////////
function main() {
    lineOdd();    // function inside function
}
function lineOdd() { 
    putBeeper = 2;
}
