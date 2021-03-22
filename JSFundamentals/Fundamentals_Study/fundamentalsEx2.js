function ages(input) {
  if (input <= 2 && input >= 0) {
    console.log("baby");
  } else if (input <= 13 && input >= 0) {
    console.log("child");
  } else if (input <= 19 && input >= 0) {
    console.log("teenager");
  } else if (input <= 65 && input >= 0) {
    console.log("adult");
  } else if (input > 65 && input >= 0) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}

function round(number, symbol) {
  number = parseFloat(number);
  symbol = Number(symbol);
  if (symbol > 15) {
    symbol = 15;
  }
  console.log(parseFloat(number.toFixed(symbol)));
}

function division(input) {
  input = Number(input);
  let divBy2 = false;
  let divBy3 = false;
  let divBy6 = false;
  let divBy7 = false;
  let divBy10 = false;
  if (input % 2 === 0) {
    divBy2 = true;
  }
  if (input % 3 === 0) {
    divBy3 = true;
  }
  if (input % 6 === 0) {
    divBy6 = true;
  }
  if (input % 7 === 0) {
    divBy7 = true;
  }
  if (input % 10 === 0) {
    divBy10 = true;
  }
  if (divBy10) {
    console.log("The number is divisible by 10");
  } else if (divBy7) {
    console.log("The number is divisible by 7");
  } else if (divBy6) {
    console.log("The number is divisible by 6");
  } else if (divBy3) {
    console.log("The number is divisible by 3");
  } else if (divBy2) {
    console.log("The number is divisible by 2");
  } else {
    console.log("Not divisible");
  }
}

function vacation(groupNumber, groupType, weekDay) {
  let areStudents = false;
  let areBusiness = false;
  let areRegular = false;
  let pricePerPerson;
  let total = 0;

  switch (groupType) {
    case "Students":
      areStudents = true;
      break;
    case "Business":
      areBusiness = true;
      break;
    case "Regular":
      areRegular = true;
      break;
  }

  switch (weekDay) {
    case "Friday":
      if (areStudents) {
        pricePerPerson = 8.45;
      } else if (areBusiness) {
        pricePerPerson = 10.9;
      } else if (areRegular) {
        pricePerPerson = 15;
      }
      break;
    case "Saturday":
      if (areStudents) {
        pricePerPerson = 9.8;
      } else if (areBusiness) {
        pricePerPerson = 15.6;
      } else if (areRegular) {
        pricePerPerson = 20;
      }
      break;
    case "Sunday":
      if (areStudents) {
        pricePerPerson = 10.46;
      } else if (areBusiness) {
        pricePerPerson = 16;
      } else if (areRegular) {
        pricePerPerson = 22.5;
      }
      break;
  }
  if (areStudents && groupNumber >= 30) {
    total = pricePerPerson * groupNumber * 0.85;
  } else if (areBusiness && groupNumber >= 100) {
    total = pricePerPerson * (groupNumber - 10);
  } else if (areRegular && groupNumber >= 10 && groupNumber <= 20) {
    total = pricePerPerson * groupNumber * 0.95;
  } else {
    total = pricePerPerson * groupNumber;
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}

function leapYear(input) {
  if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

function printAndSum(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);
  let row = "";
  let sum = 0;
  for (let i = start; i <= end; i++) {
    row += " ";
    row += i;
    sum += i;
  }
  console.log(row);
  console.log(`Sum: ${sum}`);
}

function triange(end) {
  for (let i = 1; i <= end; i++) {
    let row = `${i} `.repeat(i);
    console.log(row);
  }
}

function multTable(input) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${input} X ${i} = ${input * i}`);
  }
}

function logIn(input) {
  let userName = input.shift();
  let userNameLetters = [];
  let loggedIn = false;
  for (let i = 0; i < userName.length; i++) {
    userNameLetters.push(userName[i]);
  }

  userNameLetters.reverse();
  let correctPass = userNameLetters.join("");

  for (let i = 0; i < input.length; i++) {
    let tryIt = input[i];
    if (tryIt === correctPass) {
      loggedIn = true;
      break;
    } else {
      if (i === input.length - 1) {
        break;
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
  if (loggedIn) {
    console.log(`User ${userName} logged in.`);
  } else {
    console.log(`User ${userName} blocked!`);
  }
}

function kinglyPyramid(base, increment) {
  base = Number(base);
  increment = Number(increment);
  let levelCounter = 0;
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let height = 0;

  while (base > 2) {
    levelCounter++;
    let currentLapis = 0;
    let currentMarble = 0;
    let currentStone = (base - 2) * (base - 2) * increment;
    if (levelCounter % 5 === 0) {
      currentLapis = base * base * increment - currentStone;
    } else {
      currentMarble = base * base * increment - currentStone;
    }
    stone += currentStone;
    marble += currentMarble;
    lapisLazuli += currentLapis;
    base -= 2;
  }

  if (base % 2 === 0) {
    gold = 4 * increment;
  } else {
    gold = 1 * increment;
  }

  height = Math.floor((levelCounter + 1) * increment);
  stone = Math.ceil(stone);
  marble = Math.ceil(marble);
  lapisLazuli = Math.ceil(lapisLazuli);
  gold = Math.ceil(gold);

  console.log(`Stone required: ${stone}`);
  console.log(`Marble required: ${marble}`);
  console.log(`Lapis Lazuli required: ${lapisLazuli}`);
  console.log(`Gold required: ${gold}`);
  console.log(`Final pyramid height: ${height}`);
}

function bitCoin(input) {
  let totalBitCoin = 0;
  let bitCoinCost = 11949.16;
  let oneGramGoldCost = 67.51;
  let totalMoney = 0;
  let firstDayReached = false;
  let firstDayNum = -1;
  for (let index = 0; index < input.length; index++) {
    let minedGold = 0;
    if ((index + 1) % 3 === 0) {
      minedGold = input[index] * 0.7;
    } else {
      minedGold = input[index];
    }
    totalMoney += minedGold * oneGramGoldCost;
    if (totalMoney / bitCoinCost > 1) {
      firstDayReached = true;
      if (firstDayReached && firstDayNum === -1) {
        firstDayNum = index + 1;
      }
      totalBitCoin += Math.floor(totalMoney / bitCoinCost);
      totalMoney -= Math.floor(totalMoney / bitCoinCost) * bitCoinCost;
    }
  }
  console.log(`Bought bitcoins: ${totalBitCoin}`);
  if (firstDayReached) {
    console.log(`Day of the first purchased bitcoin: ${firstDayNum}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitCoin([100, 200, 300]);
