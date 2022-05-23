// get elements //
console.log("hello");
console.log("world");



const display = document.querySelector(".grid-container__display");
const numbers = Array.from(document.getElementsByClassName('grid-container__numbers'));
const deletOne = document.getElementById('grid-container__deleteButton');
const clearAll = document.getElementById('grid-container__clearButton');
const equals = document.getElementById('grid-container__equalsButton');
const operators = Array.from(document.getElementsByClassName('grid-container__operator'));


let firstNumber = ""
let secondNumber = ""
let operatorValue = ""

const showOutput = (event) => {
  
  firstNumber = event.target.innerHTML
  display.innerHTML += firstNumber
  console.log(display);

};

numbers.forEach(number => {
 number.addEventListener("click",showOutput )
});

const showOperator = (event) => {
  operatorValue = event.target.innerHTML
  display.innerHTML += operatorValue
  
  console.log(operatorValue);
};

const Del = (event) => {
  display.innerHTML = display.innerHTML.slice(0, -1);
};

deletOne.addEventListener("click", Del)



operators.forEach(operator => {
  operator.addEventListener("click",showOutput )
 });

 const clearAllButton = (event ) => {
    display.innerHTML = "" ;
 };



 clearAll.addEventListener("click", clearAllButton)




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



 equals.addEventListener("click", sum )



 //console.log(operators);

 /*let total = (event) => {
  equals = event.target.innerHTML
  display.innerHTML += (firstNumber + operators + secondNumber) ;
  console.log(total);
};

equals.addEventListener("click", total)


 // total variable to keep total 
 //update display when equals id pressed

//let Total = 


//console.log(firstNumber );





/*const newDisplay = (display, numbers) => {
  return display.innerHTML += numbers.innerHTML;
  console.log(newDisplay);

};*/







/**/




//returning the function 




//newDisplay.addEventListener('click', numbers);

/*8numbers.forEach((number) => {
  .onclick = () =>{
    if ()
  }
}) */





/*const newDisplay = display.map((display) => {
    return display.innerHTML += numbers.innerHTML
})
//you can only map arrays

console.log(newDisplay);*/

/*numbers.map(number => {
    number.addEventListener(`click`, (Event) =>{
        switch(Event.target.innerHTML) {
            default:
                display.innerHTML =+ Event.target.innerHTML;
        }
    })
}); */


//const numberDisplay = ((numbers) => {
    //console.log(`display.innerText += ${numbers}`);
//})
//numbers.forEach((number) => {
    //return number =+ display;
//})

//const numberDisplay = numbers.map((number) => {
  //  return display.innerText += number
//})
//console.log(numberDisplay);


//const newDisplay = display.foreach (display.innerHTML += numbers.innerHTML)

//const newDisplay = display.map(display += numbers);
//const numberDisplay = numbers.forEach(number) 
  //  number =+ display;


//numbers.forEach(number => {
   // (display.innerText =+ numbers.innertext);
    
//});
 //numbers.forEach(display.innerText =+ numbers.innertext);

// functions //

/*switch(display) {
 case (numbers):
  display += numbers

} */
//






//declare (global) variables //




// create function //



// return function with eventListener //

