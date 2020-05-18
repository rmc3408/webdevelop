/**
 * 
 * @Important
 * 
 * !     document.querySelector          = $
 * !    document.querySelectorAll        = $
 * 
 * 
 * TODO Show value              $('h1').css(color);        
 * TODO return boolean          $("h1").hasClass("margin-50");
 * 
 **/


$("h1").text("good bye"); // change text
$("h1").html("Good <em>bye<em>"); // innerHTML


$('h1').css("color", "red"); // Assign a value
$("h1").addClass("big margin-50");


$("img").attr("src"); // change attributes
$("a").attr("href", "http://www.bing.ca");
$("button").remove();






// Events
$("button").click(function () {
    $("h1").css("color", "blue");

});


//? ON = addEventListener

$("h1").on("mouseover", function () {
    $("h1").css("background-color", "purple");

});


$("input").keypress(function () {
    console.log(event.key);
});

$(document).keypress(function () {
    $("h1").text(event.key);

});






//TODO - Insert / Append HTML elements

$("h1").before("<button>BEFORE</button>");
$("h1").after("<button>AFTER</button>");

$("h1").prepend("<button>inside tag h1 before content</button>");
$("h1").append("<button>inside tag h1 AFTER content</button>");







//TODO -  Animation

$('h1').click(function () {
    $('h1').hide();
});
$('h1').click(function () {
    $('h1').show();
});

$('button').click(function () {
    $('h1').toggle();
});


/**
 * @More Animation Effects
 * 
 * 
 * ? Fade           fadeIn, fadeOut, fadeToggle
 * ? slide          slideUp, slideDown, slideToggle
 * ? Fade           fadeIn, fadeOut, fadeToggle
 * 
 *  */   
////////////////////////////

$('h1').click(function () {
    $('h1').fadeOut();
});
$('h1').click(function () {
    $('h1').slideUp();
});

$('button').click(function () {
    $('h1').fadeToggle();
});


//! Use CSS
//! Use only properties with numbers value 
//! between {}

$('button').on("click", function () {
    $('h1').animate({opacity:0.2});
});



$('button').on("click", function () {
    $('h1').slideUp().animate({margin: 40}).slideDown();
});

