const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate,
} = require("../calculator");

// ============================================================
// Tests based on image examples: 2+3, 10-4, 45*2, 20/5
// ============================================================

describe("Image example operations", () => {
  test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));
  test("10 - 4 = 6", () => expect(subtract(10, 4)).toBe(6));
  test("45 * 2 = 90", () => expect(multiply(45, 2)).toBe(90));
  test("20 / 5 = 4", () => expect(divide(20, 5)).toBe(4));
  test("10 % 3 = 1", () => expect(modulo(10, 3)).toBe(1));
  test("2 ^ 3 = 8", () => expect(power(2, 3)).toBe(8));
  test("sqrt(16) = 4", () => expect(squareRoot(16)).toBe(4));
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
// Modulo tests
// ============================================================

describe("modulo()", () => {
  test("returns remainder for positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when divisible", () => {
    expect(modulo(20, 5)).toBe(0);
  });

  test("returns error string for modulo by zero", () => {
    expect(modulo(10, 0)).toBe("Error: Modulo by zero");
  });
});

// ============================================================
// Power tests
// ============================================================

describe("power()", () => {
  test("raises number to positive exponent", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("handles zero exponent", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("handles negative exponent", () => {
    expect(power(2, -2)).toBe(0.25);
  });
});

// ============================================================
// Square root tests
// ============================================================

describe("squareRoot()", () => {
  test("returns square root for positive number", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("returns 0 for square root of 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns error string for negative number", () => {
    expect(squareRoot(-9)).toBe("Error: Square root of negative number");
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

  test("dispatches modulo", () => {
    expect(calculate(10, "%", 3)).toBe(1);
  });

  test("dispatches power", () => {
    expect(calculate(2, "^", 4)).toBe(16);
  });

  test("dispatches square root", () => {
    expect(calculate(81, "sqrt")).toBe(9);
  });

  test("handles modulo by zero through calculate", () => {
    expect(calculate(5, "%", 0)).toBe("Error: Modulo by zero");
  });

  test("handles square root of negative number through calculate", () => {
    expect(calculate(-1, "sqrt")).toBe("Error: Square root of negative number");
  });

  test("handles division by zero through calculate", () => {
    expect(calculate(5, "/", 0)).toBe("Error: Division by zero");
  });

  test("returns error for invalid operator", () => {
    expect(calculate(1, "&", 2)).toBe(
      "Error: Invalid operator. Use +, -, *, /, %, ^, or sqrt"
    );
  });
});
