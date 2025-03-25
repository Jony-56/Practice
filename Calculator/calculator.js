let display = document.getElementById("display");
let currentInput = "";
let lastOperator = "";

function updateDisplay(value) {
    display.textContent = value;
    
}

function appendValue(value) {
    if (display.textContent === "0" && value !== ".") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay(currentInput);
}

function clearEntry() {
    currentInput = "";
    updateDisplay("0");
}

function clearDisplay() {
    currentInput = "";
    lastOperator = "";
    updateDisplay("0");
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || "0");
}

function square() {
    let num = parseFloat(currentInput);
    if (!isNaN(num)) {
        currentInput = (num * num).toString();
        updateDisplay(currentInput);
    }
}

function squareRoot() {
    let num = parseFloat(currentInput);
    if (!isNaN(num) && num >= 0) {
        currentInput = Math.sqrt(num).toString();
        updateDisplay(currentInput);
    }
}

function reciprocal() {
    let num = parseFloat(currentInput);
    if (!isNaN(num) && num !== 0) {
        currentInput = (1 / num).toString();
        updateDisplay(currentInput);
    } else {
        updateDisplay("Error");
        currentInput = "";
    }
}

function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay(currentInput);
    }
}

function calculate() {
    if(currentInput!==""){
        
            currentInput = eval(currentInput.replace("×", "*").replace("÷", "/"));
            updateDisplay(currentInput);
       

    }
    else {
        updateDisplay(0);
        currentInput = "";
    }
  
}
