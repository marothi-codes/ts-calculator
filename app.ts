import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main() : void {
  const firstString: string = question('Enter first number.\n');
  const operator: string = question('Enter operator.\n');
  const secondString: string = question('Enter second number.\n');

  if (isNumber(firstString) && isOperator(operator) && isNumber(secondString)) {
    const firstNum: number = parseFloat(firstString);
    const secondNumber: number = parseFloat(secondString);
    const result = calculate(firstNum, secondNumber, operator as Operator);
    console.log(result);
    console.log('\nPress Ctrl + C to exit.\n')
    main();
  } else {
    console.log('\ninvalid input\n');
    main();
  }
}

function isNumber(input: string): boolean {
  const maybeNum = parseInt(input);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

function isOperator(input: string): boolean {
  switch(input) {
    case '+':
    case '-':
    case '*':
    case '/':
      return true;
    default:
      return false;
  }
}

function calculate(operandX: number, operandY: number, operator: Operator): number {
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
