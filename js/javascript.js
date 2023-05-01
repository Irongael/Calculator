let displayValue = '0';
let currentOperand = null;
let previousOperand = null;
let operator = null;

function add(num1, num2) {
    let numA = 0;
    let numB = 0;
    let total = 0;
    
    if(((num1 > Math.floor(num1)) || (num2 > Math.floor(num2)))) {
        numA = parseFloat(num1);
        numB = parseFloat(num2);
        total = numA + numB;
    }
    else {
        numA = parseInt(num1);
        numB = parseInt(num2);
        total = numA + numB;
    }
    
    return total;
}

function subtract(num1, num2) {
    let total = num1 - num2;
    return total;
}

function multiply(num1, num2) {
    let total = num1 * num2;
    return total;
}

function divide(num1, num2) {
    let total = 0;
    
    if(num1 == 0) {
        console.log('cannot divide by zero');
        displayValue = "divide 0 Error";
        displayUpdate();
    }
    else {
        total = num1 / num2;
        return total;
    }
}

function displayUpdate() {
    let display = document.querySelector('#displayText');
    if(displayValue.length < 11) {
        display.innerText = displayValue;
        console.log(displayValue.length);
    }
    else if(displayValue.length >= 11) {
        let subString = displayValue.substring(0, 11);
        display.innerText = subString;
        console.log(displayValue.length);
    }
    else {
        display.innerText = displayValue;
        console.log(displayValue.length);
    }
}

displayUpdate();

function btnInput(input) {
    if(input == 'AC') {
        displayValue = '0';
        currentOperand = null;
        previousOperand = null;
    }
    else if(input == '+/-') {
        displayValue = displayValue * -1;
        currentOperand = displayValue * -1;
    }
    else if(input == '%') {
        displayValue = displayValue * 0.01;
        currentOperand = displayValue * 0.01;
    }
    else if(input == '/') {
        operator = '/';
        previousOperand = currentOperand;
        currentOperand = null;
        displayValue = '0';
    }
    else if(input == '7') {
        if(currentOperand == null) {
            currentOperand = '7';
            displayValue = '7';
        }
        else {
            currentOperand = currentOperand + '7';
            displayValue = displayValue + '7';
        }
    }
    else if(input == '8') {
        if(currentOperand == null) {
            currentOperand = '8';
            displayValue = '8';
        }
        else {
            currentOperand = currentOperand + '8';
            displayValue = displayValue + '8';
        }
    }
    else if(input == '9') {
        if(currentOperand == null) {
            currentOperand = '9';
            displayValue = '9';
        }
        else {
            currentOperand = currentOperand + '9';
            displayValue = displayValue + '9';
        }
    }
    else if(input == '*') {
        operator = '*';
        previousOperand = currentOperand;
        currentOperand = null;
        displayValue = '0';
    }
    else if(input == '4') {
        if(currentOperand == null) {
            currentOperand = '4';
            displayValue = '4';
        }
        else {
            currentOperand = currentOperand + '4';
            displayValue = displayValue + '4';
        }
    }
    else if(input == '5') {
        if(currentOperand == null) {
            currentOperand = '5';
            displayValue = '5';
        }
        else {
            currentOperand = currentOperand + '5';
            displayValue = displayValue + '5';
        }
    }
    else if(input == '6') {
        if(currentOperand == null) {
            currentOperand = '6';
            displayValue = '6';
        }
        else {
            currentOperand = currentOperand + '6';
            displayValue = displayValue + '6';
        }
    }
    else if(input == '-') {
        operator = '-';
        previousOperand = currentOperand;
        currentOperand = null;
        displayValue = '0';
    }
    else if(input == '1') {
        if(currentOperand == null) {
            currentOperand = '1';
            displayValue = '1';
        }
        else {
            currentOperand = currentOperand + '1';
            displayValue = displayValue + '1';
        }
    }
    else if(input == '2') {
        if(currentOperand == null) {
            currentOperand = '2';
            displayValue = '2';
        }
        else {
            currentOperand = currentOperand + '2';
            displayValue = displayValue + '2';
        }
    }
    else if(input == '3') {
        if(currentOperand == null) {
            currentOperand = '3';
            displayValue = '3';
        }
        else {
            currentOperand = currentOperand + '3';
            displayValue = displayValue + '3';
        }
    }
    else if(input == '+') {
        operator = '+';
        previousOperand = currentOperand;
        currentOperand = null;
        displayValue = '0';
    }
    else if(input == '0') {
        if(currentOperand == null) {
            currentOperand = '0';
            displayValue = '0';
        }
        else {
            currentOperand = currentOperand + '0';
            displayValue = displayValue + '0';
        }
    }
    else if(input == '=') {
        operate(currentOperand, previousOperand, operator);
    }
    else if(input == '.'){
        if(!(currentOperand == null)) {
            currentOperand = currentOperand + '.';
            displayValue = displayValue + '.';
        }
    }
    displayUpdate();
}

function operate(current, previous, op) {
    if((current == null ) || (previous == null) || op == null) {
        //do nothing since we lack all the proper input
    }
    else if(op == '/') {
        currentOperand = divide(current, previous);
        displayValue = currentOperand;
    }
    else if(op == '*') {
        currentOperand = multiply(current, previous);
        displayValue = currentOperand;
    }
    else if(op == '-') {
        currentOperand = subtract(current, previous);
        displayValue = currentOperand;
    }
    else if(op == '+') {
        currentOperand = add(current, previous);
        displayValue = currentOperand;
    }
    else {
        //for my own use. delete later
        console.log('ERROR');
    }
    displayUpdate();
}

const acBtn = document.querySelector('#clear');
acBtn.addEventListener('click', () => {
    btnInput('AC');
});

const posNegBtn = document.querySelector('#posNeg');
posNegBtn.addEventListener('click', () => {
    btnInput('+/-');
});

const perBtn = document.querySelector('#percent');
perBtn.addEventListener('click', () => {
    btnInput('%');
});

const divBtn = document.querySelector('#divide');
divBtn.addEventListener('click', () => {
    btnInput('/');
});

const sevenBtn = document.querySelector('#seven');
sevenBtn.addEventListener('click', () => {
    btnInput('7');
});

const eightBtn = document.querySelector('#eight');
eightBtn.addEventListener('click', () => {
    btnInput('8');
});

const nineBtn = document.querySelector('#nine');
nineBtn.addEventListener('click', () => {
    btnInput('9');
});

const multBtn = document.querySelector('#multiply');
multBtn.addEventListener('click', () => {
    btnInput('*');
});

const fourBtn = document.querySelector('#four');
fourBtn.addEventListener('click', () => {
    btnInput('4');
});

const fiveBtn = document.querySelector('#five');
fiveBtn.addEventListener('click', () => {
    btnInput('5');
});

const sixBtn = document.querySelector('#six');
sixBtn.addEventListener('click', () => {
    btnInput('6');
});

const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click', () => {
    btnInput('-');
});

const oneBtn = document.querySelector('#one');
oneBtn.addEventListener('click', () => {
    btnInput('1');
});

const twoBtn = document.querySelector('#two');
twoBtn.addEventListener('click', () => {
    btnInput('2');
});

const threeBtn = document.querySelector('#three');
threeBtn.addEventListener('click', () => {
    btnInput('3');
});

const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', () => {
    btnInput('+');
});

const zeroBtn = document.querySelector('#zero');
zeroBtn.addEventListener('click', () => {
    btnInput('0');
});

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
    btnInput('.');
});

const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    btnInput('=');
});