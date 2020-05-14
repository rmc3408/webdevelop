//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var heroOfDay = superheroes.random();
var villain = supervillains.random();

console.log(`${heroOfDay}  beats  ${villain}.`);

