
function handleClick () {
    alert('You Clicked');

}
var numDrums = document.querySelectorAll('.drum').length

for (var choice = 0; choice < numDrums.length; choice++) {
    document.querySelectorAll('.drum')[choice].addEventListener("click", handleClick);
    
}

