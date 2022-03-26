// Basic calculator functions
const plus = (x,y) => (x+y); 
const subtract = (x,y ) => (x-y);
const multiply = (x,y) => (x*y);
const divide = (x,y) => (x/y);
let displayValue = ""
let storedValue = ""    
let storedOperator = ""   
const updateDisplay = (number) => {
    let display = document.querySelector(".display");
    displayValue = displayValue.concat(number)
    console.log(displayValue)
    display.innerHTML = displayValue 
}
const callOperator = (operator) =>{
    storedValue = displayValue;
    displayValue= ""
    storedOperator = operator
    console.log(storedOperator)
}
const operate = (numberOne, operator, numberTwo) =>
    operator(numberOne, numberTwo);
//number event listeners
let numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(item => item.addEventListener("click", e =>updateDisplay(e.target.innerHTML)))

//Operator event listeners
let opperatorButtons = document.querySelectorAll(".opperator")
opperatorButtons.forEach(item =>item.addEventListener("click", (e) => callOperator(e.target.id)
 ))

//equals event listener
let equals = document.querySelector("#equals").addEventListener("click", () => operate(storedValue))
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button in buttons){addEventListener}