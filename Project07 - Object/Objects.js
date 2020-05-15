/**
 *  Object with property, values and function
 */  

var cleaner1 = {
    name:"Raphael",
    age:38,
    languages: ['BR', 'EN'],
    printMop: function () {              // function only work for cleaner 1.
        alert("Time to clean!"); 
    }
};

////  Constructor with property, values and function
function Custodian (name, age, languages) {
    this.name = name;
    this.age = age;
    this.languages = languages;

    this.cleanLobby = function () { // All object created by this constructor.
        alert("Time to Mop");
    };

}
var cleaner2 = new Custodian("ale", 39, ["pt"]);
cleaner2.cleanLobby();



