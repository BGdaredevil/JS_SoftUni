function shoping(input) {
  let currentCash = BigInt(input[0]) * 100n;
  let startComand = "mall.Enter";
  let endComand = "mall.Exit";
  let goShopping = false;
  let purchases = 0;
  let i = 0;
  let q = 0;
  for (q = 0; q < input.length; q++) {
    if (input[q] === startComand) {
      goShopping = true;
      break;
    }
  }
  i = q;
  while (goShopping) {
    i++;
    let offer = input[i];
    if (offer === endComand) {
      goShopping = false;
      break;
    }
    for (let j = 0; j < offer.length; j++) {
      let operation = offer.charCodeAt(j);
      if (operation >= 65 && operation <= 90) {
        if (currentCash >= BigInt(operation * 50)) {
          currentCash = currentCash - BigInt(operation * 50);
          purchases++;
        }
      } else if (operation >= 97 && operation <= 122) {
        if (currentCash >= BigInt(operation * 30)) {
          currentCash = currentCash - BigInt(operation * 30);
          purchases++;
        }
      } else if (operation === 37) {
        if (currentCash > 0n) {
          if (currentCash % 2n == 0) {
            currentCash = currentCash / 2n;
          } else {
            currentCash = currentCash / 2n + 1n;
          }
          purchases++;
        }
      } else if (operation === 42) {
        currentCash = currentCash + 1000n;
      } else {
        if (currentCash >= BigInt(operation * 100)) {
          currentCash = currentCash - BigInt(operation * 100);
          purchases++;
        }
      }
    }
  }

  if (purchases === 0) {
    console.log(`No purchases. Money left: ${toFixed2(currentCash)} lv.`);
  } else {
    console.log(
      `${purchases} purchases. Money left: ${toFixed2(currentCash)} lv.`
    );
  }

  function toFixed2(bigInt) {
    let bigIntStr = bigInt.toString();
    if (bigIntStr.length > 2) {
      return bigIntStr.slice(0, -2) + "." + bigIntStr.slice(-2);
    } else if (bigIntStr.length === 2) {
      return "0." + bigIntStr;
    } else if (bigIntStr.length === 1) {
      return "0.0" + bigIntStr;
    }
  }
}
function magicDimityr(input) {
  let num2 = 0;
  function boni(input) {
    let expression = input.shift();
    let operatorPlus = false;
    let operatorMinus = false;
    let operatorMultiply = false;
    let operatorDivide = false;
    let operatorQuestion = false;
    let operatorEquals = false;
    let num1 = 0;
    let result = 0;
    let j = 0;
    for (let i = 0; i <= expression.length; i++) {
      const item = expression[i];
      if ((Number(item) >= 0 && Number(item) < 10) || operatorEquals) {
        if (operatorPlus) {
          num1 += Number(item);
          operatorPlus = false;
        } else if (operatorMinus) {
          num1 -= Number(item);
          operatorMinus = false;
        } else if (operatorMultiply) {
          num1 *= Number(item);
          operatorMultiply = false;
        } else if (operatorDivide) {
          num1 /= Number(item);
          operatorDivide = false;
        } else if (operatorEquals) {
          result = num1;
          operatorEquals = false;
        } else {
          num1 = Number(item);
        }
      } else {
        // operator
        switch (item) {
          case "+":
            operatorPlus = true;
            break;
          case "-":
            operatorMinus = true;
            break;
          case "*":
            operatorMultiply = true;
            break;
          case "/":
            operatorDivide = true;
            break;
          case "(":
            let stringToEval = "";
            for (j = i + 1; j < expression.length; j++) {
              stringToEval += expression[j];
              if (expression[j] === ")") {
                break;
              }
            }
            num2 = eval(stringToEval);
            let del = "(" + stringToEval;
            expression = expression.replace(del, "?");
            i--;
            break;
          case "=":
            operatorEquals = true;
            break;
          case "?":
            if (operatorPlus) {
              num1 += num2;
              num2 = 0;
            } else if (operatorMinus) {
              num1 -= num2;
              num2 = 0;
            } else if (operatorMultiply) {
              num1 *= num2;
              num2 = 0;
            } else if (operatorDivide) {
              num1 /= num2;
              num2 = 0;
            }
            operatorPlus = false;
            operatorMinus = false;
            operatorMultiply = false;
            operatorDivide = false;
            num2 = 0;
            break;
        }
      }
    }
    console.log(result.toFixed(2));
  }
  function eval(stringToEval) {
    let expression = stringToEval;
    let operatorPlus = false;
    let operatorMinus = false;
    let operatorMultiply = false;
    let operatorDivide = false;
    let operatorCloseBracket = false;
    let num1 = 0;
    let result = 0;
    for (let i = 0; i <= expression.length; i++) {
      const item = expression[i];
      if ((Number(item) >= 0 && Number(item) < 10) || operatorCloseBracket) {
        if (operatorPlus) {
          num1 += Number(item);
          operatorPlus = false;
        } else if (operatorMinus) {
          num1 -= Number(item);
          operatorMinus = false;
        } else if (operatorMultiply) {
          num1 *= Number(item);
          operatorMultiply = false;
        } else if (operatorDivide) {
          num1 /= Number(item);
          operatorDivide = false;
        } else if (operatorCloseBracket) {
          result = num1;
          operatorCloseBracket = false;
        } else {
          num1 = Number(item);
        }
      } else {
        // operator
        switch (item) {
          case "+":
            operatorPlus = true;
            break;
          case "-":
            operatorMinus = true;
            break;
          case "*":
            operatorMultiply = true;
            break;
          case "/":
            operatorDivide = true;
            break;
          case ")":
            operatorCloseBracket = true;
            break;
        }
      }
    }
    return result;
  }
  boni(input);
}

function magicSolutionBook(input) {
  let result = 0;
  let index = 0;
  let expression = input.shift();
  let symbol = expression[index];
  let expressionOperator = "+";
  while (symbol != "=") {
    symbol = expression[index];
    if (Number(symbol) >= 0 && Number(symbol) < 10) {
      switch (expressionOperator) {
        case "+":
          result += Number(symbol);
          break;
        case "-":
          result -= Number(symbol);
          break;
        case "*":
          result *= Number(symbol);
          break;
        case "/":
          result /= Number(symbol);
          break;
      }
    } else if (
      symbol === "+" ||
      symbol === "-" ||
      symbol === "/" ||
      symbol === "*"
    ) {
      switch (symbol) {
        case "+":
          expressionOperator = symbol;
          break;
        case "-":
          expressionOperator = symbol;
          break;
        case "*":
          expressionOperator = symbol;
          break;
        case "/":
          expressionOperator = symbol;
          break;
      }
    } else if (symbol === "(") {
      let innerResult = 0;
      let innerOperator = "+";
      symbol = expression[++index];
      while (symbol != ")") {
        if (Number(symbol) >= 0 && Number(symbol) < 10) {
          switch (innerOperator) {
            case "+":
              innerResult += Number(symbol);
              break;
            case "-":
              innerResult -= Number(symbol);
              break;
            case "*":
              innerResult *= Number(symbol);
              break;
            case "/":
              innerResult /= Number(symbol);
              break;
          }
        } else if (
          symbol === "+" ||
          symbol === "-" ||
          symbol === "/" ||
          symbol === "*"
        ) {
          switch (symbol) {
            case "+":
              innerOperator = symbol;
              break;
            case "-":
              innerOperator = symbol;
              break;
            case "*":
              innerOperator = symbol;
              break;
            case "/":
              innerOperator = symbol;
              break;
          }
        }
        symbol = expression[++index];
      }
      switch (expressionOperator) {
        case "+":
          result += innerResult;
          break;
        case "-":
          result -= innerResult;
          break;
        case "*":
          result *= innerResult;
          break;
        case "/":
          result /= innerResult;
          break;
      }
    }
    index++;
  }
  console.log(result.toFixed(2));
}

function bullCow(input) {
  let index = 0;
  let secretNum = input[index++];
  let bullNum = Number(input[index++]);
  let cowNum = Number(input[index]);
  let result = "";
  let isFound = false;
  if (bullNum > 4 || cowNum > 4) {
    console.log("No");
    return;
  }

  let secretNumDigits = [];
  for (let i = 0; i < secretNum.length; i++) {
    let digit = Number(secretNum[i]);
    secretNumDigits.push(digit);
  }

  for (let d1 = 1; d1 < 10; d1++) {
    for (let d2 = 1; d2 < 10; d2++) {
      for (let d3 = 1; d3 < 10; d3++) {
        for (let d4 = 1; d4 < 10; d4++) {
          let resultNum = [];
          resultNum.push(d1);
          resultNum.push(d2);
          resultNum.push(d3);
          resultNum.push(d4);
          let bullTest = 0;
          let cowTest = 0;
          let cowAnswerNums = [];
          let cowTestNums = [];
          for (let i = 0; i < secretNumDigits.length; i++) {
            let secretDigit = secretNumDigits[i];
            let testDigit = resultNum[i];
            if (secretDigit === testDigit) {
              bullTest++;
            } else {
              cowAnswerNums.push(secretDigit);
              cowTestNums.push(testDigit);
            }
          }

          for (let i = 0; i < cowTestNums.length; i++) {
            let testDigit = Number(cowTestNums[i]);
            for (let j = 0; j < cowAnswerNums.length; j++) {
              let asnwerDigit = cowAnswerNums[j];
              if (testDigit === asnwerDigit) {
                cowTest++;
                cowTestNums.splice(i, 1);
                i--;
                cowAnswerNums.splice(j, 1);
                j = 0;
              }
            }
          }

          if (bullNum === bullTest && cowNum === cowTest) {
            result += resultNum.join("");
            result += " ";
            isFound = true;
          }
        }
      }
    }
  }

  if (!isFound) {
    console.log("No");
  } else {
    console.log(result);
  }
  // result is 96/100
}
bullCow(["1191", "0", "1"]);
