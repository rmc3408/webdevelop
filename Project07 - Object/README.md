
### OBJECTS ###

# This 

console.log(this);    

1- Show HTML identity from object 


# Objects

var nameOfVariable = {
    property01: datatype "value",
    property02: datatypeTwo "value"
};

var cleaner1 = {
    name:"Raphael",
    age:38,
    languages: ['BR', 'EN']
};



# Constructor Function 

(NameOfObject = PascalCasing)


-> Create a Contructor <- 
function NameOfObject (name, age, languages) {
    this.name = name;
    this.age = age;
    this.languges = languages;
    this.moveSuit = function () { alert("move it"); };

}



---> Initiale and Declare Object <-

var myObject = new NameOfObject (name, age, languages);
var cleaner1 = new Cleaner("Raphael", 38, ['BR', 'EN']);

