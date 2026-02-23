let currentValue = "0";
let previousValue = null;
let operator = null;

// Utility function to get DOM elements
//Getting numbers
const nr0 = document.querySelector('.numberBtn0');
const nr1 = document.querySelector('.numberBtn1');
const nr2 = document.querySelector('.numberBtn2');
const nr3 = document.querySelector('.numberBtn3');
const nr4 = document.querySelector('.numberBtn4');
const nr5 = document.querySelector('.numberBtn5');
const nr6 = document.querySelector('.numberBtn6');
const nr7 = document.querySelector('.numberBtn7');
const nr8 = document.querySelector('.numberBtn8');
const nr9 = document.querySelector('.numberBtn9');

// getting operation buttons
const clearBtn = document.querySelector('.clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const percentBtn = document.querySelector('.percentBtn');
const divideBtn = document.querySelector('.divideBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const minusBtn = document.querySelector('.minusBtn');
const plusBtn = document.querySelector('.plusBtn');
const dotBtn = document.querySelector('.dotBtn');
const equalBtn = document.querySelector('.equalBtn');

// display
const historyText = document.querySelector('.historyText');
const currentText = document.querySelector('.currentText');

function updateDisplay() {
    currentText.textContent = currentValue;
}

function appendDigit(digit) {
    if (currentValue === "0") {
        currentValue = digit;
    } else {
        currentValue += digit;
    }
    updateDisplay();
}

function chooseOperator(op) {
    if (previousValue !== null && operator !== null) {
        calculate();
    }

    previousValue = currentValue;
    operator = op;
    currentValue = "0";

    historyText.textContent = `${previousValue} ${operator}`;
    updateDisplay();
}

function calculate() {
    if (previousValue === null || operator === null) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    let result;

    if (operator === '+') {
        result = prev + current;
    } else if (operator === '-') {
        result = prev - current;
    } else if (operator === '*') {
        result = prev * current;
    } else if (operator === '/') {
        result = prev / current;
    }

    currentValue = result.toString();
    previousValue = null;
    operator = null;

    historyText.textContent = "";
    updateDisplay();
}

function handlePercent() {
    const value = parseFloat(currentValue);

    if (isNaN(value)) return;

    currentValue = (value / 100).toString();
    updateDisplay();
}

function clearAll() {
    currentValue = "0";
    previousValue = null;
    operator = null;
    historyText.textContent = "";
    updateDisplay();
}

function delLast() {
    currentValue = currentValue.slice(0, -1);

    if (currentValue === "") {
        currentValue = "0";
    }

    updateDisplay();
}

// values and even clickers
nr0.addEventListener('click', () => appendDigit(nr0.textContent));
nr1.addEventListener('click', () => appendDigit(nr1.textContent));
nr2.addEventListener('click', () => appendDigit(nr2.textContent));
nr3.addEventListener('click', () => appendDigit(nr3.textContent));
nr4.addEventListener('click', () => appendDigit(nr4.textContent));
nr5.addEventListener('click', () => appendDigit(nr5.textContent));
nr6.addEventListener('click', () => appendDigit(nr6.textContent));
nr7.addEventListener('click', () => appendDigit(nr7.textContent));
nr8.addEventListener('click', () => appendDigit(nr8.textContent));
nr9.addEventListener('click', () => appendDigit(nr9.textContent));
plusBtn.addEventListener("click", () => chooseOperator("+"));
minusBtn.addEventListener("click", () => chooseOperator("-"));
multiplyBtn.addEventListener("click", () => chooseOperator("*"));
divideBtn.addEventListener("click", () => chooseOperator("/"));
equalBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", clearAll);
deleteBtn.addEventListener("click", delLast);
percentBtn.addEventListener("click", handlePercent);