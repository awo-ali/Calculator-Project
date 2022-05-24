//console.log("hello");
console.log("world");


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



const calculate = (event) =>{
 
 if (operatorValue == '+') {
  firstNumber = display.innerHTML.split("+")[0]
  secondNumber = display.innerHTML.split("+")[1]
  
  display.innerHTML= (parseInt(firstNumber) + parseFloat(secondNumber));
}
else if (operatorValue == '-'){
  firstNumber = display.innerHTML.split("-")[0]
 secondNumber = display.innerHTML.split("-")[1]
 

  display.innerHTML= (parseInt(firstNumber) - parseInt(secondNumber));
}
else if (operatorValue == 'x'){
  firstNumber = display.innerHTML.split("x")[0]
 secondNumber = display.innerHTML.split("x")[1]
  display.innerHTML= parseInt(firstNumber) * parseFloat(secondNumber);
}
else if (operatorValue == '%'){
  firstNumber = display.innerHTML.split("%")[0]
 secondNumber = display.innerHTML.split("%")[1]
  display.innerHTML= parseInt(firstNumber) % parseFloat(secondNumber);
}
}
  
// return function with eventListener  

numbers.forEach(number => {
    number.addEventListener("click",showOutput )
   });


 operators.forEach(operator => {
    operator.addEventListener("click",showOperator)
   });


deletOne.addEventListener("click", Del)

clearAll.addEventListener("click", clearAllButton)

equals.addEventListener("click", calculate )

