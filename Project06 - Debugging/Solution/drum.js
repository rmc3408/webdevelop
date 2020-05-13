

function handleClick () {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    console.log(this);    //Show HTML identity from object//
    this.style.color = "white";
} 

var numDrums = document.querySelectorAll('.drum').length;
for (var choice = 0; choice < numDrums; choice++) {
    document.querySelectorAll('.drum')[choice].addEventListener("click", handleClick);
    
}

