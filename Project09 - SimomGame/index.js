

var buttonColor = ['red','yellow','blue','green'];
var gamePattern = [];
var userPattern = [];
var level = 0;
endgame = false;

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
    $('h1').text("Level " + (level + 1)); 
    var randomChosenColour = nextSequence();
    gamePattern.push(randomChosenColour);
    $("."+randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    

}

//* * User Mouse clicking


$('.btn').click(userHandle);

function userHandle() {
    var userChosenColour = this.id;
    userPattern.push(userChosenColour); // save in User array 
    $("."+userChosenColour).fadeOut(200).fadeIn(200); //visual effect
    playSound(userChosenColour);
    animatedPress(userChosenColour);
    userPattern.forEach(comparePattern); // game check


}

//* * Game check.

function comparePattern(item, index) {  // check items inside arrays.
    
    if (item == gamePattern[index]) {   //If correct
        
        
        if (item == gamePattern[gamePattern.length - 1]) { // If Last item
            level++;
            sequenceOne();


        }

    } else {
        console.log("USER: "+ item +" != COMP: "+ gamePattern[index]);
        $(document).css("background-color", 'red');

        endgame = true;
    }

}

//** Game Effects */

function playSound(input){              //  play song
    var song = new Audio('sounds/'+input+'.mp3');
    song.play(); 
    
}

function animatedPress(currentColour) {   // background effect on button
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
        }, 300);
    
}
