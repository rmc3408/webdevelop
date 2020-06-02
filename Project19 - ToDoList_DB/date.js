//jshint esversion: 6
//console.log(module);



/** 
 * 
 * ? Simplified Function ?
 * ----------------------- 
 * 
 * exports.getFullDate = function () {
    return new Date();
**/


//     SIMPLIFIED DECLARATION ///////
 module.exports.getFullDate = function () {
    const today = new Date(); // Variable in module can not be change
    const option = {       // can change value, not the key name.
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    
    };
    return today.toLocaleDateString("pt-BR", option);
    
};

//     LONG DECLARATION ///////
module.exports.getShortDate = getShortDate; //only export One function

function getShortDate() {
    let today = new Date();
    let option = {
        weekday: "long",
        day: "numeric"    
    };
    let newday = today.toLocaleDateString("pt-BR", option);
    return newday;
} 

