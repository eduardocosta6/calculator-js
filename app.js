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

// values and even clickers
nr0.addEventListener('click', function () {
    currentText.texContent = nr0.textContent;
});
nr1.addEventListener('click', function () {
    currentText.texContent = nr1.textContent;
});
nr2.addEventListener('click', function () {
    currentText.texContent = nr2.textContent;
});
nr3.addEventListener('click', function () {
    currentText.texContent = nr3.textContent;
});
nr4.addEventListener('click', function () {
    currentText.texContent = nr4.textContent;
});
nr5.addEventListener('click', function () {
    currentText.texContent = nr5.textContent;
});
nr6.addEventListener('click', function () {
    currentText.texContent = nr6.textContent;
});
nr7.addEventListener('click', function () {
    currentText.texContent = nr7.textContent;
});
nr8.addEventListener('click', function () {
    currentText.texContent = nr8.textContent;
});
nr9.addEventListener('click', function () {
    currentText.texContent = nr9.textContent;
});
