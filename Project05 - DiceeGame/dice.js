imageList = ["dice1.png", "dice2.png", "dice3.png", 
"dice4.png", "dice5.png", "dice6.png"]

var diceOne = Math.ceil(Math.random() * 6);
var diceTwo = Math.ceil(Math.random() * 6);

document.getElementById('human').setAttribute("src", `images/${imageList[diceOne-1]}`);
document.getElementById('computer').setAttribute("src", `images/${imageList[diceTwo-1]}`);
// var filename = "images/dice" + diceOne + ".png";

if (diceOne > diceTwo) {
    document.querySelector('.trophy-img.human').classList.toggle('trophy-img-on');
    document.querySelector("h1").textContent = "Human Player Wins!";

    

} else if (diceOne < diceTwo) {
    document.querySelector('.trophy-img.computer').classList.toggle('trophy-img-on');
    document.querySelector("h1").textContent = "Computer Player Wins!";


} else {
    document.querySelector('.trophy-img.human').classList.remove('trophy-img-on');
    document.querySelector('.trophy-img.human').classList.remove('trophy-img-on');
    document.querySelector("h1").textContent = "Tie !";



}

console.log(diceOne);
console.log(diceTwo);