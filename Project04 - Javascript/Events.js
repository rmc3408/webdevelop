------------------
-addEventListener
------------------

// Do specific type function from listen a target.//

      //        TARGET               .addEventListener( type  , listen     );  
      document.querySelector('.drum').addEventListener("click", handleClick);   
document.querySelectorAll('.drum')[i].addEventListener("click", handleClick);

/*
 TYPE is input = action by the user
 LISTEN is output = Response by computer. It is  function name as argument = neither quotation nor ()

      Type
    mouse            click
    keyboard         keypress event.key
    open file        load
*/






// Can Execute a function called playKey !!!!!

document.addEventListener("keypress", playKey);

function playKey() {
    var option = event.key;
    switch (option) {
        case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    }
}








//---//----//---//---//---//---//---//---//
//       CREATE Anonimous Function       //
//---//---//---//---//---//---//---//---//

/*   AddEventListener Trigger a event... by mouse or keyboard.
     This unique event has several unique properties and values.

     it will send this object properties  
     to function named or Anonimous function.
*/

document.addEventListener("click", function() {console.log("key pressed")});

//----------------- object property ARE EVENTS -> mouse or key event -------->>//
/*    
        You can call this specific or object event in anomimous function as argument.
*/







//---//---//---//---//---//---//---//---//---//---//---//---//---//---//
/*
    .addEventListener(type, High Order Function (callback Function);

it take function (argument) but argument is a function

*///---//---/---//---//---//---//---//---//---//---//---//---//---//---//


// If something triggered by typeOfEvent, will trigger callback...
function otherEventListener(userEvent, callback) {  
    
    // Event will create a specific object with values and property collected!!
    var eventHappened = {
        eventTrigger:"keypress",
        key: 'p',
        duration: 2
    }

    // The function callback will execute only IF 
    //  object has property of eventType
    if (eventHappened.eventTrigger === userEvent) {
        callback(eventHappened);
        
    }

}

//////// -------------- USER INPUT -------------------////////
otherEventListener("keypress", function(event) {
    console.log(event);
    console.log("pressed key");
     });

/////////////
document.otherEventListener('keypress', respondToKey(event));

function respondToKey(event) {
    console.log("key pressed.");
}

// Same but in one line//

document.otherEventListener('keypress', function (event) {
    console.log("key pressed.");
    console.log(event);
}   );



