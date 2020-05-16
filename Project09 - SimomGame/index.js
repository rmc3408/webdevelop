var buttonColor = ['red','yellow','blue','green'];
var gamePattern = [];
let userPattern = [];
var level = 0;


function nextSequence() {
    
    var rnd = Math.floor(Math.random() * 4);
    return buttonColor[rnd];

}


//* * Game start and Reload
document.addEventListener('keydown', function(){
    if (event.key === "a") {
        sequenceOne();
    }
    else if (event.key === "r"){
        location.reload();
    }
    else {}

});

function sequenceOne() {
    var randomChosenColour = nextSequence();
    gamePattern.push(randomChosenColour);
    $("."+randomChosenColour).fadeOut(200).fadeIn(200);
    var song = new Audio('sounds/'+randomChosenColour+'.mp3');
    song.play();

}

//* * User Mouse clicking

$('.btn').click(userHandle);

function userHandle() {
    var userChosenColour = this.id;
    console.log(userChosenColour);
    userPattern.push(userChosenColour);
    $("."+userChosenColour).fadeOut(200).fadeIn(200);
    var song = new Audio('sounds/'+userChosenColour+'.mp3');
    song.play();

}


