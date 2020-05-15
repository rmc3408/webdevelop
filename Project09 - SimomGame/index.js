var buttonColor = ['red','yellow','blue','green'];
var gamePattern = [];
var level = 0;


function nextSequence() {
    
    var rnd = Math.floor(Math.random() * 4);
    return buttonColor[rnd];

}
var randomChosenColour = nextSequence();

//* * Game start
var randomChosenColour = nextSequence();
gamePattern.push(randomChosenColour);
gamePattern.push(nextSequence());


$("."+randomChosenColour).fadeOut(400).fadeIn(100);

for (var index = 0; index < level ; index++) {
    
    
}


