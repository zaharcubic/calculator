let a;
let b;
let op;

function operate() {
    let first = prompt('Please enter the first number');
    let second = prompt('Please enter the second number');
    let operator = prompt('Please enter the operator');
    a = Number(first);
    b = Number(second);
    op = operator;
    if (op == '+') {
        return add(a, b);
    } else if (op == '-') {
        return subtract(a, b);
    } else if (op == '*') {
        return multiply(a, b);
    } else if (op == '/') {
        return divide(a, b);
    } else {
        return 'Operator is not valid';
    }
}

function add(a, b) {
    return a + b;
};


function subtract(a, b) {
    return a > b ? a - b : b - a;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};