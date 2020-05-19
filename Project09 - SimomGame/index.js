var buttonColor = ['red', 'yellow', 'blue', 'green'];
var gamePattern = [];
var userPattern = [];
var level = 0;


//* * Game start and Reload
document.addEventListener('keydown', function () {
    if (event.key === "a") {
        gameSequence();
        $('.btn').click(userHandle);

    } else if (event.key === "r") {
        location.reload();
    } else {}

});


function gameSequence() {

    $('h1').text("Level " + (level + 1));
    var randomChosenColour = nextSequence();
    gamePattern.push(randomChosenColour);
    $("." + randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);


}

function nextSequence() {

    var rnd = Math.floor(Math.random() * 4);

    return buttonColor[rnd];



}




//* * User Mouse clicking

function userHandle() {

    var userChosenColour = this.id;
    userPattern.push(userChosenColour); // save in User array 
    $("." + userChosenColour).fadeOut(200).fadeIn(200); //visual effect
    playSound(userChosenColour);
    animatedPress(userChosenColour);

    userPattern.forEach(comparePattern); // game check for each click



}





//* * Game check.

function comparePattern(item, index) { // check items inside arrays.

    if (item == gamePattern[index]) {

        if (userPattern.length == gamePattern.length) {

            level++;
            $('h1').text("Wait for next sequence");
            userPattern = [];
            setTimeout(gameSequence, 2000);

        }
    } else {
        $('h1').text("Game Over");
        $(document.body).css("background-color", 'red');

    }

}

//** Game Effects */

function playSound(input) { //  play song
    var song = new Audio('sounds/' + input + '.mp3');
    song.play();

}

function animatedPress(currentColour) { // background effect on button
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 300);

}