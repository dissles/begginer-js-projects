// random number generator
// creating a function that will genereate a number between
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
 }

// ask user for min and max number
var minNumber = prompt("Choose your min number:");
var maxNumber = prompt("Choose your max number:");

console.log(getRandomNumberBetween(minNumber, maxNumber))
