function cunema(name, days, tickets, ticketPrice, percent) {
  let index = 0;
  days = Number(days);
  tickets = Number(tickets);
  ticketPrice = Number(ticketPrice);
  percent = 1 - Number(percent) / 100;
  let result = days * ticketPrice * tickets * percent;
  console.log(`The profit from the movie ${name} is ${result.toFixed(2)} lv.`);
}

function lunch(name, movLength, brakeLength) {
  movLength = Number(movLength);
  brakeLength = Number(brakeLength);
  let freeTime = brakeLength - brakeLength / 8 - brakeLength / 4;
  if (movLength <= freeTime) {
    console.log(
      `You have enough time to watch ${name} and left with ${Math.ceil(
        freeTime - movLength
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${name}, you need ${Math.ceil(
        Math.abs(freeTime - movLength)
      )} more minutes.`
    );
  }
}

function gymnastics(country, ured) {
  function toPercent(num, maxNum = 20) {
    let rValue = (1 - num / maxNum) * 100;
    return rValue;
  }

  let difficulty;
  let performance;

  switch (ured) {
    case "ribbon":
      if (country === "Italy") {
        difficulty = 9.2;
        performance = 9.5;
      } else if (country === "Bulgaria") {
        difficulty = 9.6;
        performance = 9.4;
      } else if (country === "Russia") {
        difficulty = 9.1;
        performance = 9.4;
      }
      break;
    case "hoop":
      if (country === "Italy") {
        difficulty = 9.45;
        performance = 9.35;
      } else if (country === "Bulgaria") {
        difficulty = 9.55;
        performance = 9.75;
      } else if (country === "Russia") {
        difficulty = 9.3;
        performance = 9.8;
      }
      break;
    case "rope":
      if (country === "Italy") {
        difficulty = 9.7;
        performance = 9.15;
      } else if (country === "Bulgaria") {
        difficulty = 9.5;
        performance = 9.4;
      } else if (country === "Russia") {
        difficulty = 9.6;
        performance = 9.0;
      }
      break;
  }

  let result = difficulty + performance;

  console.log(`The team of ${country} get ${result.toFixed(3)} on ${ured}.`);
  console.log(`${toPercent(result).toFixed(2)}%`);
}

function rating(input) {
  let index = 0;
  let filmNumber = Number(input[index++]);
  let BestFfilmName;
  let BestFilmrating = -1;
  let worstFfilmName;
  let worstFilmrating = 11;
  let averageRating = 0;

  for (; index < input.length; index++) {
    let filmName = input[index++];
    let filmrating = Number(input[index]);
    averageRating += filmrating;

    if (filmrating > BestFilmrating) {
      BestFilmrating = filmrating;
      BestFfilmName = filmName;
    } else if (filmrating < worstFilmrating) {
      worstFfilmName = filmName;
      worstFilmrating = filmrating;
    }
  }
  averageRating = averageRating / filmNumber;

  console.log(
    `${BestFfilmName} is with highest rating: ${BestFilmrating.toFixed(1)}`
  );
  console.log(
    `${worstFfilmName} is with lowest rating: ${worstFilmrating.toFixed(1)}`
  );
  console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

function turistShop() {
  let input = arguments;
  let index = 0;
  let budget = Number(input[index++]);
  let purchases = 0;
  let spentMoney = 0;
  let mineMoreMinerals = false;

  while (input[index] !== "Stop") {
    let productName = input[index++];
    let productPrice = Number(input[index++]);
    let discount = 1;
    purchases++;
    if (purchases % 3 === 0) {
      discount = 0.5;
    }
    budget = budget - productPrice * discount;
    spentMoney += productPrice * discount;
    if (budget < 0) {
      mineMoreMinerals = true;
    }
    if (index >= input.length) {
      break;
    }
  }

  if (input[index] === "Stop") {
    console.log(
      `You bought ${purchases} products for ${spentMoney.toFixed(2)} leva.`
    );
  } else if (mineMoreMinerals) {
    console.log("You don't have enough money!");
    console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
  }
}

function vetParking(input) {
  let index = 0;
  let days = Number(input[index++]);
  let hoursDaily = Number(input[index++]);
  let dayIsEven = false;
  let hourIsEven = false;
  let hourlyRate = 0;
  let total = 0;
  for (let currentDay = 1; currentDay <= days; currentDay++) {
    let dailyExpence = 0;
    for (let currentHour = 1; currentHour <= hoursDaily; currentHour++) {
      if (currentDay % 2 === 0) {
        dayIsEven = true;
      }

      if (currentHour % 2 === 0) {
        hourIsEven = true;
      }

      if (dayIsEven && !hourIsEven) {
        hourlyRate = 2.5;
        dayIsEven = false;
        hourIsEven = false;
      } else if (!dayIsEven && hourIsEven) {
        hourlyRate = 1.25;
        dayIsEven = false;
        hourIsEven = false;
      } else {
        hourlyRate = 1;
        dayIsEven = false;
        hourIsEven = false;
      }
      dailyExpence += hourlyRate;
    }
    total += dailyExpence;
    console.log(`Day: ${currentDay} - ${dailyExpence.toFixed(2)} leva`);
  }
  console.log(`Total: ${total.toFixed(2)} leva`);
}
vetParking([2, 5]);
