function smallest() {
  let input = arguments;
  let smallest = Infinity;

  for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    if (num < smallest) {
      smallest = num;
    }
  }
  console.log(smallest);
}

function addSub() {
  let index = 0;
  let input = arguments;
  let num1 = Number(input[index++]);
  let num2 = Number(input[index++]);
  let num3 = Number(input[index++]);
  let result = (num1, num2, num3) => num1 + num2 - num3;
  console.log(result(num1, num2, num3));
}

function chars() {
  let index = 0;
  let input = arguments;
  let char1 = input[index++].charCodeAt(0);
  let char2 = input[index++].charCodeAt(0);
  let start = Math.min(char1, char2);
  let end = Math.max(char1, char2);
  let result = (start, end) => {
    let returnVal = [];
    for (let i = start + 1; i < end; i++) {
      returnVal.push(String.fromCharCode(i));
    }
    return returnVal.join(" ");
  };
  console.log(result(start, end));
}

function sums(input) {
  input = input.toString();
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < input.length; i++) {
    let digit = Number(input[i]);
    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

function palindrome(input) {
  input.forEach((element) => {
    let result;
    let before = Number(element);
    element = element.toString();
    let after = element.split("");
    after = after.reverse();
    after = after.join("");
    after = Number(after);
    if (before === after) {
      result = true;
    } else {
      result = false;
    }
    console.log(result);
  });
}

function passValid(input) {
  let isLongEnough = (input) => {
    if (input.length >= 6 && input.length <= 10) {
      return true;
    } else {
      return false;
    }
  };
  let hasDigits = (input) => {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
      let element = input[i];
      if (!isNaN(element)) {
        counter++;
      }
    }
    if (counter < 2) {
      return false;
    } else {
      return true;
    }
  };
  let isOnlyLetterDigit = (input) => {
    let result;
    for (let i = 0; i < input.length; i++) {
      let code = input[i].charCodeAt(0);
      if (
        (code >= 48 && code <= 57) ||
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122)
      ) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
    if (result) {
      return true;
    } else {
      return false;
    }
  };
  if (!isLongEnough(input)) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (!isOnlyLetterDigit(input)) {
    console.log("Password must consist only of letters and digits");
  }

  if (!hasDigits(input)) {
    console.log("Password must have at least 2 digits");
  }

  if (isLongEnough(input) && hasDigits(input) && isOnlyLetterDigit(input)) {
    console.log("Password is valid");
  }
}

function matrix(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    result.push(row);
    for (let j = 0; j < n; j++) {
      result[i][j] = n;
    }
  }
  result.forEach((element) => {
    console.log(element.join(" "));
  });
}

function perfect(num) {
  let divisors = [];
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  divisors.forEach((element) => {
    sum += element;
  });
  if (num === sum) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

function loading(num) {
  let repeats = num / 10;
  if (repeats === 10) {
    console.log("100% Complete!");
    console.log(`${num}% [${"%".repeat(repeats)}${".".repeat(10 - repeats)}]`);
  } else {
    console.log(`${num}% [${"%".repeat(repeats)}${".".repeat(10 - repeats)}]`);
    console.log("Still loading...");
  }
}

function factorial() {
  let index = 0;
  let input = arguments;
  let num1 = input[index++];
  let num2 = input[index++];
  let factorial = (num1) => {
    if (num1 == 0) {
      return 1;
    }
    return num1 * factorial(num1 - 1);
  };
  console.log((factorial(num1) / factorial(num2)).toFixed(2));
}
