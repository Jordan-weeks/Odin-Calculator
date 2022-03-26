// Basic calculator functions
const plus = (x,y) => (Number(x)+ Number(y)); 
const subtract = (x,y ) => (x-y);
const multiply = (x,y) => (x*y);
const divide = (x,y) => {
    if(y==0) return "You know better...";
    return (x/y)};
let displayValue = ""
let storedValue =""   
let storedOperator = "" 
let output = ""
let display = document.querySelector(".display");  
const updateDisplay = (number) => {
    if(displayValue.length>=15) return
    displayValue = displayValue.concat(number)
    display.innerHTML = displayValue
    
}
const callOperator = (operator) =>{
    
    if(storedOperator != ""){
        //prevents opperating without a complete formula
        if(displayValue == "") return
        operate(storedValue, storedOperator,displayValue)
    }
    storedValue = displayValue;
    displayValue= ""
    storedOperator = operator
    }
const operate = (numberOne, operator, numberTwo) => {
    if (operator == "plus"){
    displayValue = (plus(numberOne, numberTwo));
   }    
    if (operator == "subtract"){ 
    displayValue = (subtract(numberOne, numberTwo));
    }
    if (operator == "multiply"){ 
    displayValue = (multiply(numberOne, numberTwo));
    }
    if (operator == "divide") {
    displayValue = (divide(numberOne, numberTwo));
    
    }
    display.innerHTML = displayValue
    storedValue="";
    storedOperator="";
}
//number event listeners
let numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(item => item.addEventListener("click", e =>updateDisplay(e.target.innerHTML)))

//Operator event listeners
let opperatorButtons = document.querySelectorAll(".opperator")
opperatorButtons.forEach(item =>item.addEventListener("click", (e) => callOperator(e.target.id)
 ))

//equals event listener
let equals = document.querySelector("#equals").addEventListener("click", () =>{
     if(displayValue == "") return; 
     else operate(storedValue,storedOperator,displayValue)})

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
    //stops console error when trying to backspace
    if (typeof(displayValue)== "number") return
    displayValue = displayValue.slice(0,-1)
    display.innerHTML = displayValue;

})
//Negative
let negative = document.querySelector("#negative").addEventListener("click",() =>{
    // prevents turning the output of a formula negative.
if (typeof(displayValue)== "number") return
if (displayValue == "") return
else(
displayValue = multiply(displayValue, -1).toString(),
display.innerHTML = displayValue )})