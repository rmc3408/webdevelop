// ---------------------------------------//
//     COPY AND PASTE YOUR CODE HERE      //
// ---------------------------------------//

/*
        1 - ADD DEBUGGER AT BEGINNING
        2 - ADD BREAKPOINTS
*/

debugger;
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
getMilk(40, 1.5);

///////////////////////////////////////////////////////////
