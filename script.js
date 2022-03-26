// Basic calculator functions
const plus = (x,y) => (Number(x)+ Number(y)); 
const subtract = (x,y ) => (x-y);
const multiply = (x,y) => (x*y);
const divide = (x,y) => (x/y);
let displayValue = ""
let storedValue = ""    
let storedOperator = "" 
let display = document.querySelector(".display");  
const updateDisplay = (number) => {
    displayValue = displayValue.concat(number)
    console.log(displayValue)
    display.innerHTML = displayValue 
}
const callOperator = (operator) =>{
    if(storedOperator != "")(
        operate(storedValue, storedOperator,displayValue)
    )
    storedValue = displayValue;
    displayValue= ""
    storedOperator = operator
    console.log(storedOperator)
}
const operate = (numberOne, operator, numberTwo) => {
    if (operator == "plus")
    displayValue = (plus(numberOne, numberTwo));
    display.innerHTML = displayValue; 
    if (operator == "subtract") 
    displayValue = (subtract(numberOne, numberTwo));
    display.innerHTML = displayValue;
    if (operator == "multiply") 
    displayValue = (multiply(numberOne, numberTwo));
    display.innerHTML = displayValue;
    if (operator == "divide") 
    displayValue = (divide(numberOne, numberTwo));
    display.innerHTML = displayValue;
    
}
//number event listeners
let numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(item => item.addEventListener("click", e =>updateDisplay(e.target.innerHTML)))

//Operator event listeners
let opperatorButtons = document.querySelectorAll(".opperator")
opperatorButtons.forEach(item =>item.addEventListener("click", (e) => callOperator(e.target.id)
 ))

//equals event listener
let equals = document.querySelector("#equals").addEventListener("click", () => operate(storedValue,storedOperator,displayValue))

// Clear button
let clear = document.querySelector("#clear").addEventListener("click", () =>( 
displayValue = "",
storedValue = "",    
storedOperator = "",
updateDisplay(storedValue)))

//Decimal button
let decimal = document.querySelector("#decimal").addEventListener("click", () => {
    if (displayValue.includes(".")) console.log("has decimal")
    else(updateDisplay("."))})

//Backspace
let backspace = document.querySelector("#backspace").addEventListener("click", () =>{
    displayValue = displayValue.slice(0,-1)
    display.innerHTML = displayValue;

})

//Negative
let negative = document.querySelector("#negative").addEventListener("click",() => {
displayValue = multiply(displayValue, -1),
display.innerHTML = displayValue })