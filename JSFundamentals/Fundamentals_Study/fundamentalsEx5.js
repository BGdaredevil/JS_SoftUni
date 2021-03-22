function sumDigits(input) {
  input = input.toString();
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    let digit = Number(input[i]);
    sum += digit;
  }
  console.log(sum);
}

function charString() {
  let input = arguments;
  let index = 0;
  let first = input[index++];
  let second = input[index++];
  let third = input[index++];
  console.log(`${first}${second}${third}`);
}

function town() {
  let input = arguments;
  let index = 0;
  let town = input[index++];
  let population = Number(input[index++]);
  let area = Number(input[index++]);
  console.log(
    `Town ${town} has population of ${population} and area ${area} square km.`
  );
}

function convert(meters) {
  meters = Number(meters);
  let kilometers = meters / 1000;
  console.log(kilometers.toFixed(2));
}

function converterMK2(pounds) {
  pounds = Number(pounds);
  let dollars = pounds * 1.31;
  console.log(dollars.toFixed(3));
}

function reverseChar() {
  let input = arguments;
  let index = 0;
  let first = input[index++];
  let second = input[index++];
  let third = input[index++];
  console.log(`${third} ${second} ${first}`);
}

function lowerOrUpper() {
  let input = arguments;
  let index = 0;
  let testChar = input[index];
  if (testChar.charCodeAt(0) >= 65 && testChar.charCodeAt(0) <= 90) {
    console.log("upper-case");
  } else if (testChar.charCodeAt(0) >= 97 && testChar.charCodeAt(0) <= 122) {
    console.log("lower-case");
  } else {
    console.log("Error!");
  }
}

function calc() {
  let input = arguments;
  let index = 0;
  let first = Number(input[index++]);
  let operator = input[index++];
  let second = Number(input[index++]);
  let result;

  switch (operator) {
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
  }
  console.log(result.toFixed(2));
}

function gladiator() {
  let input = arguments;
  let index = 0;
  let countLost = Number(input[index++]);
  let helmetPrice = Number(input[index++]);
  let swordPrice = Number(input[index++]);
  let shieldPrice = Number(input[index++]);
  let armorPrice = Number(input[index++]);
  let counter = 0;
  let expences = 0;
  for (let i = 1; i <= countLost; i++) {
    let isHelmetBroken = false;
    let isSwordBroken = false;
    if (i % 2 === 0) {
      isHelmetBroken = true;
      expences += helmetPrice;
    }

    if (i % 3 === 0) {
      isSwordBroken = true;
      expences += swordPrice;
    }

    if (isHelmetBroken && isSwordBroken) {
      expences += shieldPrice;
      counter++;
      if (counter === 2) {
        counter = 0;
        expences += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}

function spice() {
  let input = arguments;
  let index = 0;
  let minimumYield = 100;
  let dailyConsumption = 26;
  let startingYield = Number(input[index]);
  let passedDays = 0;
  let minedTotal = 0;
  while (minimumYield <= startingYield) {
    passedDays++;
    minedTotal += startingYield;
    startingYield -= 10;
    if (minedTotal >= dailyConsumption) {
      minedTotal -= dailyConsumption;
    } else {
      minedTotal = 0;
    }
  }
  if (minedTotal >= dailyConsumption) {
    minedTotal -= dailyConsumption;
  } else {
    minedTotal = 0;
  }
  console.log(passedDays);
  console.log(minedTotal);
}
