function string() {
  let input = arguments;
  let index = 0;
  let string = input[index++];
  let times = Number(input[index++]);
  let result = "";

  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

function grades(input) {
  if (input < 3) {
    console.log(`Fail (${input})`);
  } else if (input < 3.5) {
    console.log(`Poor (${input.toFixed(2)})`);
  } else if (input < 4.5) {
    console.log(`Good (${input.toFixed(2)})`);
  } else if (input < 5.5) {
    console.log(`Very good (${input.toFixed(2)})`);
  } else if (input <= 6.0) {
    console.log(`Excellent (${input.toFixed(2)})`);
  }
}

function mathPow(num, pow) {
  num = Number(num);
  pow = Number(pow);
  return Math.pow(num, pow);
}

function orders() {
  let index = 0;
  let input = arguments;
  let item = input[index++];
  let qty = Number(input[index++]);

  function calc(num1, num2) {
    return num1 * num2;
  }

  function selector(thing) {
    switch (thing) {
      case "coffee":
        return 1.5;
      case "water":
        return 1.0;
      case "coke":
        return 1.4;
      case "snacks":
        return 2.0;
    }
  }

  console.log(calc(selector(item), qty).toFixed(2));
}

function calculator() {
  let index = 0;
  let input = arguments;
  let num1 = Number(input[index++]);
  let num2 = Number(input[index++]);
  let operator = input[index++];

  switch (operator) {
    case "multiply":
      let multiply = (num1, num2) => num1 * num2;
      console.log(multiply(num1, num2));
      break;
    case "divide":
      let divide = (num1, num2) => num1 / num2;
      console.log(divide(num1, num2));
      break;
    case "add":
      let add = (num1, num2) => num1 + num2;
      console.log(add(num1, num2));
      break;
    case "subtract":
      let subtract = (num1, num2) => num1 - num2;
      console.log(subtract(num1, num2));
      break;
  }
}

function signCheck(num1, num2, num3) {
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);

  function isPositive(x) {
    if (x > 0) {
      return true;
    } else {
      return false;
    }
  }

  if (num1 === 0 || num2 === 0 || num3 === 0) {
    console.log("Positive");
  } else {
    let result = (num1, num2, num3) => {
      if (isPositive(num1) && isPositive(num2) && isPositive(num3)) {
        return "Positive";
      } else if (isPositive(num1 * num2) && isPositive(num3)) {
        return "Positive";
      } else if (!isPositive(num1 * num2) && !isPositive(num3)) {
        return "Positive";
      } else {
        return "Negative";
      }
    };
    console.log(result(num1, num2, num3));
  }
}
