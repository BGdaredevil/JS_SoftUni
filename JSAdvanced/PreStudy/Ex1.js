function echo(input) {
  return `${input.length}\n${input}`;
}

function strLength(...input) {
  let sum = 0;
  input.map((el) => (sum += el.length));
  let average = Math.floor(sum / input.length);
  return `${sum}\n${average}`;
}

function largest(...input) {
  let largest = input.shift();
  while (input.length > 0) {
    let temp = input.shift();
    if (temp > largest) {
      largest = temp;
    }
  }
  return `The largest number is ${largest}.`;
}

function round(input) {
  let result = 0;
  if (typeof input === "number") {
    result = (Math.PI * input ** 2).toFixed(2);
  } else {
    result = `We can not calculate the circle area, because we receive a ${typeof input}.`;
  }
  return result;
}

function maths(...input) {
  let [first, second, oper] = input;
  let result;
  switch (oper) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "*":
      result = first * second;
      break;
    case "/":
      result = first / second;
      break;
    case "%":
      result = first % second;
      break;
    case "**":
      result = first ** second;
      break;
  }
  return result;
}

function numSum(...input) {
  let [start, end] = input.map((el) => Number(el));
  let sum = 0;
  while (start <= end) {
    sum += start++;
  }
  return sum;
}

function dayWeek(input) {
  let result;
  switch (input) {
    case "Monday":
      result = 1;
      break;
    case "Tuesday":
      result = 2;
      break;
    case "Wednesday":
      result = 3;
      break;
    case "Thursday":
      result = 4;
      break;
    case "Friday":
      result = 5;
      break;
    case "Saturday":
      result = 6;
      break;
    case "Sunday":
      result = 7;
      break;
    default:
      result = "error";
      break;
  }
  return result;
}

function stars(input) {
  input = input || 5;
  let result = `${"* ".repeat(input)}\n`.repeat(input);
  return result;
}

function aggregate(input) {
  let sum = 0;
  let inverseSum = 0;
  let contact = "";
  input.map((el) => {
    sum += el;
    inverseSum += 1 / el;
    contact += el;
  });
  return `${sum}\n${inverseSum}\n${contact}`;
}
console.log(aggregate([1, 2, 3]));
console.log(aggregate([2, 4, 8, 16]));
