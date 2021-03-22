function mining() {
  let input = arguments;
  let index = 0;
  let vCardPrice = Number(input[index++]);
  let adapterPrice = Number(input[index++]);
  let electConsumPrice = Number(input[index++]);
  let dailyProfitPerCard = Number(input[index++]) - electConsumPrice;
  let componentsCount = 13;
  let priceOfRest = 1000;
  let totalRigCost =
    priceOfRest + adapterPrice * componentsCount + vCardPrice * componentsCount;
  let result = Math.ceil(totalRigCost / (dailyProfitPerCard * componentsCount));
  console.log(totalRigCost);
  console.log(result);
}
function processor() {
  let input = arguments;
  let index = 0;
  let processorNum = Number(input[index++]);
  let employeeNum = Number(input[index++]);
  let workdays = Number(input[index++]);
  let workingtime = workdays * employeeNum * 8;
  let producedProcessor = Math.floor(workingtime / 3);
  let actualProfit = producedProcessor * 110.1;
  let neededProfit = processorNum * 110.1;
  if (actualProfit >= neededProfit) {
    console.log(
      `Profit: -> ${Math.abs(actualProfit - neededProfit).toFixed(2)} BGN`
    );
  } else {
    console.log(
      `Losses: -> ${Math.abs(actualProfit - neededProfit).toFixed(2)} BGN`
    );
  }
}
function football() {
  let input = arguments;
  let index = 0;
  let teamName = input[index++];
  let itemType = input[index++];
  let numPurchases = Number(input[index]);
  let flagPrice = 0;
  let capPrice = 0;
  let posterPrice = 0;
  let stickerPrice = 0;
  let isTeamValid = true;
  let isItemValid = true;
  let total = 0;

  if (numPurchases > 200) {
    isItemValid = false;
  }

  switch (teamName) {
    case "Argentina":
      flagPrice = 3.25;
      capPrice = 7.2;
      posterPrice = 5.1;
      stickerPrice = 1.25;
      break;
    case "Brazil":
      flagPrice = 4.2;
      capPrice = 8.5;
      posterPrice = 5.35;
      stickerPrice = 1.2;
      break;
    case "Croatia":
      flagPrice = 2.75;
      capPrice = 6.9;
      posterPrice = 4.95;
      stickerPrice = 1.1;
      break;
    case "Denmark":
      flagPrice = 3.1;
      capPrice = 6.5;
      posterPrice = 4.8;
      stickerPrice = 0.9;
      break;
    default:
      isTeamValid = false;
      console.log(`Invalid country!`);
      break;
  }

  switch (itemType) {
    case "flags":
      total = numPurchases * flagPrice;
      break;
    case "caps":
      total = numPurchases * capPrice;
      break;
    case "posters":
      total = numPurchases * posterPrice;
      break;
    case "stickers":
      total = numPurchases * stickerPrice;
      break;
    default:
      isItemValid = false;
      console.log(`Invalid stock!`);
      break;
  }

  if (isItemValid && isTeamValid) {
    console.log(
      `Pepi bought ${numPurchases} ${itemType} of ${teamName} for ${total.toFixed(
        2
      )} lv.`
    );
  }
}
function catFood(input) {
  let index = 0;
  let foodPrice = 12.45;
  let smallCats = 0;
  let bigCats = 0;
  let hugeCats = 0;
  let catCount = Number(input[index++]);
  let total = 0;
  for (; index <= catCount; index++) {
    let cat = Number(input[index]);
    if (cat >= 100 && cat < 200) {
      smallCats++;
      total += cat;
    } else if (cat >= 200 && cat < 300) {
      bigCats++;
      total += cat;
    } else if (cat >= 300 && cat <= 400) {
      hugeCats++;
      total += cat;
    }
  }
  total = total / 1000;
  total *= foodPrice;
  console.log(`Group 1: ${smallCats} cats.`);
  console.log(`Group 2: ${bigCats} cats.`);
  console.log(`Group 3: ${hugeCats} cats.`);
  console.log(`Price for food per day: ${total.toFixed(2)} lv.`);
}
function christmass(input) {
  let index = 0;
  let toyPrice = 5;
  let puloverPrice = 15;
  let kids = 0;
  let adults = 0;
  for (let i = 0; i < input.length; i++) {
    let personAge = input[index];
    if (personAge === "Christmas") {
      break;
    } else if (Number(personAge) <= 16) {
      kids++;
    } else {
      adults++;
    }
    index++;
  }
  console.log(`Number of adults: ${adults}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${kids * toyPrice}`);
  console.log(`Money for sweaters: ${adults * puloverPrice}`);
}
function goldMine(input) {
  let index = 0;
  let locationNum = Number(input[index++]);
  for (; index < input.length; index++) {
    let expectedYeld = Number(input[index++]);
    let daysAtLocation = Number(input[index++]);
    let averageCollectedAtLocation = 0;
    for (let i = 0; i < daysAtLocation; i++) {
      let dailyYeld = Number(input[index++]);
      averageCollectedAtLocation += dailyYeld;
    }
    index--;
    averageCollectedAtLocation = averageCollectedAtLocation / daysAtLocation;
    if (averageCollectedAtLocation >= expectedYeld) {
      console.log(
        `Good job! Average gold per day: ${averageCollectedAtLocation.toFixed(
          2
        )}.`
      );
    } else {
      console.log(
        `You need ${(expectedYeld - averageCollectedAtLocation).toFixed(
          2
        )} gold.`
      );
    }
  }
}
