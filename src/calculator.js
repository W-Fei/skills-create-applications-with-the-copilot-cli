#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations (as shown on the calculator):
 *   + Addition       – adds two numbers
 *   - Subtraction    – subtracts the second number from the first
 *   * Multiplication – multiplies two numbers
 *   / Division       – divides the first number by the second (with division-by-zero handling)
 *   % Modulo         – returns the remainder of dividing the first number by the second
 *   ^ Power          – raises the first number to the second number's power
 *   sqrt             – returns the square root of a number (with negative-number handling)
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a and b, handles division by zero
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

// Modulo: returns the remainder of a and b, handles modulo by zero
function modulo(a, b) {
  if (b === 0) {
    return "Error: Modulo by zero";
  }
  return a % b;
}

// Power: returns base raised to exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square root: returns square root of n, handles negative input
function squareRoot(n) {
  if (n < 0) {
    return "Error: Square root of negative number";
  }
  return Math.sqrt(n);
}

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return modulo(a, b);
    case "^":
      return power(a, b);
    case "sqrt":
      return squareRoot(a);
    default:
      return "Error: Invalid operator. Use +, -, *, /, %, ^, or sqrt";
  }
}

async function main() {
  console.log("===================================");
  console.log("  Node.js CLI Calculator");
  console.log("  Operations: + - * / % ^ sqrt");
  console.log("===================================");

  let running = true;

  while (running) {
    const firstNum = await ask("\nEnter first number: ");
    const num1 = parseFloat(firstNum);
    if (isNaN(num1)) {
      console.log("Error: Invalid number.");
      continue;
    }

    const operator = (await ask("Enter operator (+, -, *, /, %, ^, sqrt): ")).trim();

    if (operator === "sqrt") {
      const result = calculate(num1, operator);
      console.log(`\nResult: sqrt(${num1}) = ${result}`);
    } else {
      const secondNum = await ask("Enter second number: ");
      const num2 = parseFloat(secondNum);
      if (isNaN(num2)) {
        console.log("Error: Invalid number.");
        continue;
      }

      const result = calculate(num1, operator, num2);
      console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}`);
    }

    const again = await ask("\nCalculate again? (y/n): ");
    if (again.trim().toLowerCase() !== "y") {
      running = false;
    }
  }

  console.log("Goodbye!");
  rl.close();
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
};

// Run CLI only when executed directly
if (require.main === module) {
  main();
}
