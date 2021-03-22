function firstProblem() {
  function top() {
    console.log("CASH RECEIPT");
    console.log("------------------------------");
  }
  function mid() {
    console.log("Charged to____________________");
    console.log("Recieved by___________________");
  }
  function bot() {
    console.log("------------------------------");
    console.log("(c) SoftUni");
  }
  function receipt() {
    top();
    mid();
    bot();
  }
} // da se oprawi 0/100
function determine(n) {
  let index = 0;
  n = Number(n[index]);
  if (n > 0) {
    console.log(`The number ${n} is positive.`);
  } else if (n < 0) {
    console.log(`The number ${n} is negative.`);
  } else {
    console.log(`The number ${n} is zero.`);
  }
}
function triangle(n) {
  let index = 0;
  n = Number(n[index]);
  function grow(amount) {
    for (let i = 1; i <= amount; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += " ";
        row += j;
      }
      console.log(row);
    }
  }
  function decrease(amount) {
    for (let i = amount; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += " ";
        row += j;
      }
      console.log(row);
    }
  }
  grow(n);
  decrease(n - 1);
}
function filledSquare(n) {
  let index = 0;
  n = Number(n[index]);
  function topAndBotRow(input) {
    console.log("-".repeat(2 * input));
  }
  function midRow(condition) {
    let width = condition - 2;
    if (width > 0) {
      let row = "";
      row += "-\\";
      for (let i = 0; i < width; i++) {
        row += "/\\";
      }
      row += "/-";
      for (let i = 0; i < width; i++) {
        console.log(row);
      }
    }
  }
  topAndBotRow(n);
  midRow(n);
  topAndBotRow(n);
}
function triangle(n) {
  let index = 0;
  let base = Number(n[index++]);
  let height = Number(n[index]);
  function calc(a, b) {
    return (a * b) / 2;
  }
  let result = calc(base, height);
  return result;
}
function toPowerOf(n) {
  function calculate(n, p) {
    return Math.pow(n, p);
  }
  function solving(n) {
    let index = 0;
    let num = parseFloat(n[index++]);
    let power = parseFloat(n[index]);
    result = calculate(num, power);
    return result;
  }
  console.log(solving(n));
} // da se oprawi -- 90/100
function hello(n) {
  n = n[0];
  function solve(name) {
    let expression = "Hello, ";
    expression += name;
    return (expression += "!");
  }
  function printName(input) {
    console.log(solve(input));
  }
  printName(n);
}
function greater(n) {
  let index = 0;
  let operator = n[index++];
  let object1 = n[index++];
  let object2 = n[index];

  inputTypeSwitch(operator);

  function inputTypeSwitch(type) {
    switch (type) {
      case "int":
        console.log(mathCompare(object1, object2));
        break;
      case "char":
        console.log(charCompare(object1, object2));
        break;
      case "string":
        console.log(stringCompare(object1, object2));
        break;
    }
  }

  function mathCompare(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return Math.max(num1, num2);
  }

  function charCompare(char1, char2) {
    char1 = char1.charCodeAt(0);
    char2 = char2.charCodeAt(0);
    return String.fromCharCode(Math.max(char1, char2));
  }

  function stringCompare(str1, str2) {
    if (str1 > str2) {
      return str1;
    } else if (str1 < str2) {
      return str2;
    } else {
      return 0;
    }
  }
}
function smaller(n) {
  let index = 0;
  let num1 = Number(n[index++]);
  let num2 = Number(n[index++]);
  let num3 = Number(n[index++]);
  let smallest = returnSmaller(returnSmaller(num1, num2), num3);
  function returnSmaller(a, b) {
    return Math.min(a, b);
  }
  console.log(smallest);
}
function repeater(n) {
  let index = 0;
  let stringToRepeat = n[index++];
  let timesToRepeat = n[index];
  let result = "";
  result += stringToRepeat;
  console.log(result.repeat(timesToRepeat));
}
function nThNumberBack(n) {
  let index = 0;
  let testString = n[index++];
  let position = testString.length - Number(n[index]);
  console.log(testString.charAt(position));
}
function numberToBase(n) {
  let index = 0;
  let inputNumber = Number(n[index++]);
  let base = Number(n[index]);
  function convertor(decimalNum, baseToConvert) {
    let backResult = [];
    let result = "";

    while (decimalNum > 0) {
      backResult.push(decimalNum % baseToConvert);
      decimalNum = Math.floor(decimalNum / baseToConvert);
    }
    backResult.reverse();
    result = backResult.join("");
    return result;
  }

  console.log(convertor(inputNumber, base));
}
function solve(n) {
  let index = 0;
  let messageNumber = Number(n[index++]);
  let operation;
  let message;
  let errorCode;

  for (let i = 1; i <= messageNumber; i++) {
    let messageType = n[index++];
    processMessage(messageType);
  }

  function processMessage(input) {
    switch (input) {
      case "success":
        operation = n[index++];
        message = n[index++];
        showSucessMessage(operation, message);
        break;
      case "warning":
        message = n[index++];
        showWarningMessage(message);
        break;
      case "error":
        operation = n[index++];
        message = n[index++];
        errorCode = n[index++];
        showErrorMessage(operation, message, errorCode);
        break;
    }
  }
  function showSucessMessage(oper, mess) {
    let firstRow = "Successfully executed ";
    firstRow += oper;
    firstRow += ".";
    console.log(firstRow);
    console.log("=".repeat(firstRow.length));
    console.log(`${mess}.`);
    console.log("");
  }
  function showWarningMessage(mess) {
    let firstRow = "Warning: ";
    firstRow += mess;
    firstRow += ".";
    console.log(firstRow);
    console.log("=".repeat(firstRow.length));
    console.log("");
  }

  function showErrorMessage(oper, mess, eCode) {
    let firstRow = "Error: Failed to execute ";
    firstRow += oper;
    firstRow += ".";
    console.log(firstRow);
    console.log("=".repeat(firstRow.length));
    console.log(`Reason: ${mess}.`);
    console.log(`Error code: ${eCode}.`);
    console.log("");
  }
}
function letterize(n) {
  let index = 0;
  let inputNums = Number(n[index++]);
  let row = "";
  for (let i = index; i <= inputNums; i++) {
    row = "";
    if (isInputValid(Number(n[i]))) {
      isInputNegative(Number(n[i]));
      row += readNumber(n[i]);
      console.log(row);
    }
  }

  function isInputValid(input) {
    if (input < -999) {
      row += "too small";
      console.log(row);
      return false;
    } else if (input > 999) {
      row += "too large";
      console.log(row);
      return false;
    } else if (Math.abs(input) < 100) {
      return false;
    } else {
      return true;
    }
  }

  function isInputNegative(input) {
    if (input < 0) {
      row += "minus ";
    }
  }

  function readNumber(input) {
    input = Math.abs(input);
    let hundreds = Math.trunc(input / 100) % 10;
    let tens = Math.trunc(input / 10) % 10;
    let lastDigit = input % 10;
    let returnValue = "";
    returnValue += hundredWord(hundreds);
    if (tens === 0 && lastDigit === 0) {
      return returnValue;
    } else {
      returnValue += " and";
    }
    if (tens === 1) {
      returnValue += " ";
      returnValue += word10to19(lastDigit);
    } else {
      if (tens != 0) {
        returnValue += " ";
        returnValue += tensWord(tens);
      }
      if (lastDigit != 0) {
        returnValue += " ";
        returnValue += digitWord(lastDigit);
      }
    }
    return returnValue;

    function hundredWord(digit) {
      switch (digit) {
        case 1:
          return "one-hundred";
        case 2:
          return "two-hundred";
        case 3:
          return "three-hundred";
        case 4:
          return "four-hundred";
        case 5:
          return "five-hundred";
        case 6:
          return "six-hundred";
        case 7:
          return "seven-hundred";
        case 8:
          return "eight-hundred";
        case 9:
          return "nine-hundred";
      }
    }

    function tensWord(digit) {
      switch (digit) {
        case 2:
          return "twenty";
        case 3:
          return "thirty";
        case 4:
          return "fourty";
        case 5:
          return "fifty";
        case 6:
          return "sixty";
        case 7:
          return "seventy";
        case 8:
          return "eighty";
        case 9:
          return "ninety";
      }
    }

    function digitWord(digit) {
      switch (digit) {
        case 1:
          return "one";
        case 2:
          return "two";
        case 3:
          return "three";
        case 4:
          return "four";
        case 5:
          return "five";
        case 6:
          return "six";
        case 7:
          return "seven";
        case 8:
          return "eight";
        case 9:
          return "nine";
      }
    }

    function word10to19(digit) {
      switch (digit) {
        case 0:
          return "ten";
        case 1:
          return "eleven";
        case 2:
          return "twelve";
        case 3:
          return "thirteen";
        case 4:
          return "fourteen";
        case 5:
          return "fifteen";
        case 6:
          return "sixteen";
        case 7:
          return "seventeen";
        case 8:
          return "eighteen";
        case 9:
          return "nineteen";
      }
    }
  }
}

function crypto(input) {
  let index = 0;
  let letterNum = Number(input[index++]);
  let output = "";
  for (let i = index; i <= letterNum; i++) {
    let currentLetter = input[i].charCodeAt(0);
    let cryptedChar =
      firstPart(currentLetter) +
      secondPart(currentLetter) +
      lastPart(currentLetter);
    output += cryptedChar;
  }
  console.log(output);

  function firstPart(letterCode) {
    let stringLetterCode = letterCode.toString();
    let cripted = String.fromCharCode(
      Number(stringLetterCode[stringLetterCode.length - 1]) + letterCode
    );
    return cripted;
  }

  function secondPart(letterCode) {
    let stringLetterCode = letterCode.toString();
    let cripted = "";
    cripted += stringLetterCode[0];
    cripted += stringLetterCode[stringLetterCode.length - 1];
    return cripted;
  }

  function lastPart(letterCode) {
    let stringLetterCode = letterCode.toString();
    let cripted = String.fromCharCode(letterCode - Number(stringLetterCode[0]));
    return cripted;
  }
}
crypto(["4", "s", "l", "a", "p"]);
