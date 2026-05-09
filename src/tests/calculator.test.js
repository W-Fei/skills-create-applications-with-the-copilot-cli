const { add, subtract, multiply, divide, modulo, power, sqrt, calculate } = require("../calculator");

// ============================================================
// Tests based on image examples: 2+3, 10-4, 45*2, 20/5
// ============================================================

describe("Image example operations", () => {
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));
});

// ============================================================
// Addition tests
// ============================================================

describe("add()", () => {
  test("adds two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds negative numbers", () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds zero to a number", () => {
    expect(add(10, 0)).toBe(10);
  });

  test("adds two zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test("adds large numbers", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});

// ============================================================
// Subtraction tests
// ============================================================

describe("subtract()", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 3)).toBe(7);
  });

  test("subtracts resulting in negative", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test("subtracts from zero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test("subtracts equal numbers", () => {
    expect(subtract(7, 7)).toBe(0);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ============================================================
// Multiplication tests
// ============================================================

describe("multiply()", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies by one", () => {
    expect(multiply(9, 1)).toBe(9);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies positive by negative", () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test("multiplies two zeros", () => {
    expect(multiply(0, 0)).toBe(0);
  });
});

// ============================================================
// Division tests
// ============================================================

describe("divide()", () => {
  test("divides two positive numbers evenly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides with a remainder (decimal result)", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides by one", () => {
    expect(divide(15, 1)).toBe(15);
  });

  test("divides negative numbers", () => {
    expect(divide(-12, -3)).toBe(4);
  });

  test("divides positive by negative", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides decimal numbers", () => {
    expect(divide(7.5, 2.5)).toBe(3);
  });

  // Edge case: division by zero
  test("returns error string for division by zero", () => {
    expect(divide(10, 0)).toBe("Error: Division by zero");
  });

  test("returns error string for 0 / 0", () => {
    expect(divide(0, 0)).toBe("Error: Division by zero");
  });
});

// ============================================================
// calculate() dispatcher tests
// ============================================================

describe("calculate()", () => {
  test("dispatches addition", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("dispatches subtraction", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("dispatches multiplication", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("dispatches division", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("handles division by zero through calculate", () => {
    expect(calculate(5, "/", 0)).toBe("Error: Division by zero");
  });

  test("returns error for invalid operator", () => {
    expect(calculate(1, "!", 2)).toBe(
      "Error: Invalid operator. Use +, -, *, /, %, ^, or sqrt"
    );
  });
});

// ============================================================
// Image example: extended operations (5 % 2, 2 ^ 3, √16)
// ============================================================

describe("Image example extended operations", () => {
  test("modulo with 5 % 2 = 1", () => expect(modulo(5, 2)).toBe(1));
  test("power with 2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));
  test("square root with √16 = 4", () => expect(sqrt(16)).toBe(4));
});

// ============================================================
// Modulo tests
// ============================================================

describe("modulo()", () => {
  test("returns remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("handles negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles both negative", () => {
    expect(modulo(-7, -3)).toBe(-1);
  });

  test("modulo with decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("modulo of zero", () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test("returns error for modulo by zero", () => {
    expect(modulo(10, 0)).toBe("Error: Modulo by zero");
  });
});

// ============================================================
// Power (exponentiation) tests
// ============================================================

describe("power()", () => {
  test("raises a number to a positive power", () => {
    expect(power(2, 10)).toBe(1024);
  });

  test("raises a number to the power of zero", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises a number to the power of one", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("raises a negative base to an even power", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("raises a negative base to an odd power", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("raises to a negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("raises zero to a positive power", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("raises a decimal base", () => {
    expect(power(1.5, 2)).toBeCloseTo(2.25);
  });
});

// ============================================================
// Square root tests
// ============================================================

describe("sqrt()", () => {
  test("returns square root of a perfect square", () => {
    expect(sqrt(25)).toBe(5);
  });

  test("returns square root of zero", () => {
    expect(sqrt(0)).toBe(0);
  });

  test("returns square root of one", () => {
    expect(sqrt(1)).toBe(1);
  });

  test("returns square root of a non-perfect square", () => {
    expect(sqrt(2)).toBeCloseTo(1.4142);
  });

  test("returns square root of a large number", () => {
    expect(sqrt(10000)).toBe(100);
  });

  test("returns square root of a decimal", () => {
    expect(sqrt(0.25)).toBeCloseTo(0.5);
  });

  // Edge case: negative number
  test("returns error for square root of negative number", () => {
    expect(sqrt(-4)).toBe("Error: Square root of negative number");
  });

  test("returns error for sqrt of -1", () => {
    expect(sqrt(-1)).toBe("Error: Square root of negative number");
  });
});

// ============================================================
// calculate() dispatcher tests for new operations
// ============================================================

describe("calculate() extended operations", () => {
  test("dispatches modulo", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("dispatches power", () => {
    expect(calculate(2, "^", 3)).toBe(8);
  });

  test("dispatches sqrt (ignores second operand)", () => {
    expect(calculate(16, "sqrt", 0)).toBe(4);
  });

  test("handles modulo by zero through calculate", () => {
    expect(calculate(10, "%", 0)).toBe("Error: Modulo by zero");
  });

  test("handles sqrt of negative through calculate", () => {
    expect(calculate(-9, "sqrt", 0)).toBe("Error: Square root of negative number");
  });
});
