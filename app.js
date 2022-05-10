"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)('Enter first number.\n');
    var operator = (0, readline_sync_1.question)('Enter operator.\n');
    var secondString = (0, readline_sync_1.question)('Enter second number.\n');
    if (isNumber(firstString) && isOperator(operator) && isNumber(secondString)) {
        var firstNum = parseFloat(firstString);
        var secondNumber = parseFloat(secondString);
        var result = calculate(firstNum, secondNumber, operator);
        console.log(result);
        main();
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
function isNumber(input) {
    var maybeNum = parseInt(input);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function isOperator(input) {
    switch (input) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function calculate(operandX, operandY, operator) {
    switch (operator) {
        case '+':
            return operandX + operandY;
        case '-':
            return operandX - operandY;
        case '*':
            return operandX * operandY;
        case '/':
            return operandX / operandY;
    }
}
main();
