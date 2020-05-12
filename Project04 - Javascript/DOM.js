
/////////////////
//     DOM     //
/////////////////

/*
/ document  = document HTML
/ document.firstElementChild = get <HTML>
/ document.firstElementChild = get <HTML>
/ document.firstElementChild.lastElementChild.firstElementChild 
      = get <HTML>.<BODY>.<H1>
*/
var heading = document.firstElementChild.lastElementChild.firstElementChild;

        ///             h1 selected               //

heading.// innerHTML //
heading.// style.color //
heading.// queryselector //
var listName = document.querySelector("ul").lastElementChild;
listName.innerHTML = "Raphael";


//////////////////////////////////////////////////////////
/* Selected DOCUMENT transform tag element into OBJECT 


            Properties             Methods 
            - innerHTML             - click() 
            - style                 - appendChild()
            - firstChild            - setAttribute()

*////////////////////////////////////////////////////////






/*   -------------------------- 
      Change CSS - DOM STYLE 
     --------------------------  */
// COMMAND ==> style.property = "value";

var newColor = document.getElementsByTagName('a');
newColor[0].style.color = "red";
newColor[0].style.backgroundColor = "green";
newColor[0].style.fontSize = "4rem";

var newColorBtn = document.getElementsByClassName('btn');
newColorBtn[0].style.backgroundColor = "yellow";





///////////////////////////////////
/*       ClassList Attribute     */
///////////////////////////////////

// To show all attributes inside any selected element.
document.getElementById("title").attributes;

// get() or set() function will append new class name
//  in selected element a by tagname
document.getElementsByTagName('a')[0].getAttribute('href');
document.getElementsByTagName('a')[0].setAttribute('href', "http://www.bing.ca");





//////////////////////////
/* ClassList function   */
//////////////////////////

// FUNCTIONALITY = Turn OFF and ON elements in HTML

// To show all functions inside any selected element.
document.getElementById("title").classList;

// add() or remove() function will append new class name
//  in selected element h1 by ID
document.getElementById("title").classList.add("invisible");
document.getElementById("title").classList.remove("invisible");

// toggle() function will add or remove new class name
//  in selected element .btn by class queryCSS
document.querySelector(".btn").classList.toggle("invisible");






/*   -------------------------- 
      Collect element from HTML 
     --------------------------  */
document.getElementById("title");
document.getElementsByTagName("li");
document.getElementsByClassName('list');


//change text content in 3rd list element
var listName = document.querySelector("ul").lastElementChild;
listName.innerHTML = "Raphael";
listName.textContent = "Molinaro";

// InnerHTML enter anything inside this location as STRING;
var listName = document.querySelector("ul").lastElementChild;
listName.innerHTML = "<strong> Raphael </strong>";


//Get element in CSS
document.querySelector(".btn");
document.querySelector("li a");
document.querySelector("li.item");

////Get element in ARRAY in CSS, -> use index[]
document.querySelectorAll("#list .item")[1];

//change one element by ID
document.getElementById("title").innerHTML = "Title";



//Get LENGHT of ElementSSS by tagName 'li' 
var mylist = document.getElementsByTagName("li");
mylist.length;

//change STYLE color of last [index 2] list element 
var mylist = document.getElementsByTagName("li");
mylist[2].style.color = 'red';

//Select ONE element inside DOM //
document.getElementById("title");

//Select ARRAY of elements inside DOM //
document.getElementsByTagName("li");
document.getElementsByClassName('list');






