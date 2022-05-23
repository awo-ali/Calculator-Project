//console.log("hello");
//console.log("world");


// Global Variables 

let firstNumber = ""
let secondNumber = ""
let operatorValue = ""

// Get element from HTML

const display = document.querySelector(".grid-container__display");
const numbers = Array.from(document.getElementsByClassName('grid-container__numbers'));
const deletOne = document.getElementById('grid-container__deleteButton');
const clearAll = document.getElementById('grid-container__clearButton');
const equals = document.getElementById('grid-container__equalsButton');
const operators = Array.from(document.getElementsByClassName('grid-container__operator'));

//console.log(display);
//console.log(numbers);
//console.log(operators);

// create functions

const showOutput = (event) => {
    firstNumber = event.target.innerHTML
    display.innerHTML += firstNumber
    console.log(display);
  };

  const showOperator = (event) => {
    operatorValue = event.target.innerHTML
    display.innerHTML += operatorValue
    console.log(operatorValue);
  };



const Del = (event) => {
    display.innerHTML = display.innerHTML.slice(0, -1);
  };

  
  const clearAllButton = (event ) => {
    display.innerHTML = "" ;
 };

 /*switch (operatorValue) {
   case '+':
     result = parseFloat(firstNumber) + parsefloat(secondNumber)
     display.innerHTML = result
   break;
 case '-':
   result = firstNumber - secondNumber
   break;
  case '*':
    result = firstNumber * secondNumber
    break;
  case '/':
      result = firstNumber / secondNumber
      break;
   
 } */


 const sum = () => {
    let secondNumber = firstNumber
    
    //let firstNumber = ''
      if (operatorValue == '+') {
         return parseFloat(firstNumber) + parseFloat(secondNumber);
      }
      else if (operatorValue == '-'){
        return firstNumber - secondNumber;
      }
      else if (operatorValue == '*'){
        return firstNumber * secondNumber;
      }
      else if (operatorValue == '/'){
        return firstNumber / secondNumber;
      }
    
    
      equals.addEventListener("click", sum )
      
    /*let total = 0;
    let firstNumber = secondNumber
    let secondNumber = firstNumber
     switch (operatorValue) {
    
      case '+':
        total = parseFloat(firstNumber) + parseFloat(secondNumber)
       return total;
      break;
    case '-':
      result = firstNumber - secondNumber
      break;
     case '*':
       result = firstNumber * secondNumber
       break;
     case '/':
         result = firstNumber / secondNumber
         break;
      default:
         result = 0*/
        
    }
    
    //display.innerHTML = total;
    
    // console.log(total);
    



// return function with eventListener  

numbers.forEach(number => {
    number.addEventListener("click",showOutput )
   });


   operators.forEach(operator => {
    operator.addEventListener("click",showOutput )
   });


deletOne.addEventListener("click", Del)


clearAll.addEventListener("click", clearAllButton)



