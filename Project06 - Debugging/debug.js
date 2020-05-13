// ---------------------------------------//
//     COPY AND PASTE ON DEBUG CONSOLE    //
// ---------------------------------------//

// ADD DEBUGGER AT BEGINNING

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


