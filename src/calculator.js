#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations (as shown on the calculator):
 *   + Addition       – adds two numbers
 *   - Subtraction    – subtracts the second number from the first
 *   * Multiplication – multiplies two numbers
 *   / Division       – divides the first number by the second (with division-by-zero handling)
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
    default:
      return "Error: Invalid operator. Use +, -, *, or /";
  }
}

async function main() {
  console.log("===================================");
  console.log("  Node.js CLI Calculator");
  console.log("  Operations: + - * /");
  console.log("===================================");

  let running = true;

  while (running) {
    const firstNum = await ask("\nEnter first number: ");
    const num1 = parseFloat(firstNum);
    if (isNaN(num1)) {
      console.log("Error: Invalid number.");
      continue;
    }

    const operator = await ask("Enter operator (+, -, *, /): ");

    const secondNum = await ask("Enter second number: ");
    const num2 = parseFloat(secondNum);
    if (isNaN(num2)) {
      console.log("Error: Invalid number.");
      continue;
    }

    const result = calculate(num1, operator.trim(), num2);
    console.log(`\nResult: ${num1} ${operator.trim()} ${num2} = ${result}`);

    const again = await ask("\nCalculate again? (y/n): ");
    if (again.trim().toLowerCase() !== "y") {
      running = false;
    }
  }

  console.log("Goodbye!");
  rl.close();
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, calculate };

// Run CLI only when executed directly
if (require.main === module) {
  main();
}
