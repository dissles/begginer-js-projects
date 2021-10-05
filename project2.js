var playerChoice = Number(prompt("Choose your thing: \n 1. Rock \n 2. Scissors \n 3. Paper"))

switch (playerChoice)
  {
  case 1: 
    var playerThing = "a rock";
    break;
  case 2: 
    var playerThing = "scissors";
    break;
  case 3: 
    var playerThing = "a paper";    
    break;
  }

console.log(`\nYou've chosed ${playerThing}`)

function getRandomNumberBetween(min,max)
 {
    return Math.floor(Math.random()*(max-min+1)+min);
 }

var aiChoice = getRandomNumberBetween(1,3)

 switch (aiChoice)
   {
   case 1: 
   var aiThing = "a rock";
   break;

     case 2: 
     var aiThing = "scissors";
     break;

       case 3: 
       var aiThing = "a paper";    
       break;
   }

console.log(`\nAi has chosed ${aiThing}`)

if (playerChoice == aiChoice)
    {
        console.log("\nDraw!")
    }

    else if (playerChoice == 1 & aiChoice == 3)
    {
        console.log("\nAi has won!")
    }
    else if (playerChoice == 1 & aiChoice == 2)
    {
        console.log("\nPlayer has won!")
    }

    else if (playerChoice == 2 & aiChoice == 1)
    {
        console.log("\nAi has won!")
    }
    else if (playerChoice == 2 & aiChoice == 3)
    {
        console.log("\nPlayer has won!")
    }

    else if (playerChoice == 3 & aiChoice == 2)
    {
        console.log("\nAi has won!")
    }
    else if (playerChoice == 3 & aiChoice == 1)
    {
        console.log("\nPlayer has won!")
    }