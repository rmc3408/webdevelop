

var buttonColor = ['red','yellow','blue','green'];
var gamePattern = [];
var userPattern = [];
var level = 0;
endUserSequence = true;
continueGame = true;




//* * Game start and Reload
document.addEventListener('keydown', function(){
    if (event.key === "a") {
        
        while (continueGame) {
            
            gameSequence();
        
            while(endUserSequence){
                $('.btn').click(userHandle);
                userPattern.forEach(comparePattern); // game check
    
            }
            endUserSequence = true;
        }
        
        
        


    }
    else if (event.key === "r"){
        location.reload();
    }
    else {}

});

function gameSequence() {
    
    $('h1').text("Level " + (level+1)); 
    var randomChosenColour = nextSequence();
    gamePattern.push(randomChosenColour);
    $("."+randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    

}




//* * User Mouse clicking

function userHandle() {
    var userChosenColour = this.id;
    userPattern.push(userChosenColour); // save in User array 
    $("."+userChosenColour).fadeOut(200).fadeIn(200); //visual effect
    playSound(userChosenColour);
    animatedPress(userChosenColour);
    


}





//* * Game check.

function comparePattern(item, index) {  // check items inside arrays.
    
    if (userPattern.length == gamePattern.length) {   //check size
             
        if (item == gamePattern[gamePattern.length - 1]) { // If Last item
            level++;
            endUserSequence = false;


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
function nextSequence() {
    
    var rnd = Math.floor(Math.random() * 4);
    return buttonColor[rnd];
    

}