
// Using mouve events to trigger 

var numDrums = document.querySelectorAll('.drum').length;
for (var choice = 0; choice < numDrums; choice++) {
    document.querySelectorAll('.drum')[choice].addEventListener("click", handleClick);
}

function handleClick () {
    
    console.log(this);    //Show HTML identity from object in document//
    var option = this.innerHTML;

    buttonColor(option);
    buttonAnimation(option);

    switch (option) {
        case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
        case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play(); 
        break;
        case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play(); 
        break;
        case "j":
        var audio = new Audio('sounds/crash.mp3');
        audio.play(); 
        break;
        case "k":
        var audio = new Audio('sounds/kick.mp3');
        audio.play();
        break;
        case "l":
        var audio = new Audio('sounds/snare.mp3');
        audio.play(); 
        break;

        default:
        break;
    }
} 

function buttonColor(currentkey) {
    document.querySelector("."+ currentKey).classList.add('colorpressed');
    setTimeout(document.querySelector("."+currentKey).classList.remove('colorpressed'), 100);
}



// Using keyboard events to trigger inside whole document
document.addEventListener("keypress", playKey);

function playKey() {
    var option = event.key;
    switch (option) {
        case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
        case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play(); 
        break;
        case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
        case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play(); 
        break;
        case "j":
        var audio = new Audio('sounds/crash.mp3');
        audio.play(); 
        break;
        case "k":
        var audio = new Audio('sounds/kick.mp3');
        audio.play();
        break;
        case "l":
        var audio = new Audio('sounds/snare.mp3');
        audio.play(); 
        break;

        default:
        break;
    }

}



function buttonAnimation(currentKey) {
    document.querySelector("."+currentKey).classList.add('pressed');
    setTimeout(document.querySelector("."+currentKey).classList.remove('pressed'), 100);
}