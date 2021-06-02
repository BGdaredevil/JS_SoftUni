function solve(input) {
  let numbers = [];
  let operators = [];
  let mathOperations = {
    "+"(first, second) {
      return first + second;
    },
    "-"(first, second) {
      return first - second;
    },
    "*"(first, second) {
      return first * second;
    },
    "/"(first, second) {
      return first / second;
    },
  };

  for (const item of input) {
    isNaN(item) ? operators.push(item) : numbers.push(item);
    if (operators.length >= 1) {
      let oper = operators.shift();
      let b = numbers.pop();
      let a = numbers.pop();
      if (a === undefined) {
        return "Error: not enough operands!";
      } else {
        numbers.push(mathOperations[oper](a, b));
      }
    }
  }

  if (numbers.length > 1) {
    return "Error: too many operands!";
  } else {
    return numbers.pop();
  }
}
console.log(solve([-1, 1, "+", 101, "*", 18, "+", 3, "/"]));
