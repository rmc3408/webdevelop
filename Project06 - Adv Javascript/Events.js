function getMilk(money, cost) {
      console.log(CalculateMoney(money, cost) + " bottles of milk");
      console.log(CalculateChange(money, cost));
}



function CalculateMoney(inicialMoney, costperBottle) {
      var num = inicialMoney / costperBottle;
      return Math.floor(num);

}


function CalculateChange(inicialMoney, costperBottle) {
      var num = inicialMoney % costperBottle;
      return "He will get back $ " + num + " of change.";

}
console.log(getMilk(10, 1.5));