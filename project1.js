// ask user for a math sample
var mathInput = prompt("Put your math sample:").split(/(\d+)/);
mathInput[4] = mathInput[3];

if (mathInput[2].length === 2)
   {
       mathInput[4] = -parseInt(mathInput[4]);
       mathInput[2] = mathInput[2].slice(0,1);
   }

if (mathInput[0].length == 1)
   {
    mathInput[1] = -parseInt(mathInput[1]);
   }

function calculate(a, sign ,b)
  {
      switch (sign)
      {
    case "+" :
        result = Number(a) + Number(b);
        break;
     case "-" :
        result = Number(a) - Number(b);
        break;
     case ":" :
        result = Number(a) / Number(b);
        break;
     case "*" :
        result = Number(a) * Number(b);
        break;
      }
      return result
  }

console.log(calculate(mathInput[1], mathInput[2], mathInput[4]));
