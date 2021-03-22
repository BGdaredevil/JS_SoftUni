function books(input) {
  let targetBook = input[0];
  let i = 1;
  let bookIsFound = false;
  let nextBook = input[i];
  while (nextBook !== "No More Books") {
    if (nextBook === targetBook) {
      bookIsFound = true;
      break;
    }
    i++;
    nextBook = input[i];
  }
  if (bookIsFound === false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${i - 1} books.`);
  } else {
    console.log(`You checked ${i - 1} books and found it.`);
  }
}
function exam(input) {
  let maxFlunk = Number(input[0]),
    i = 1,
    solvedProblems = 0,
    lastProblem,
    flunk = 0,
    averageGrade,
    gradeSum = 0;

  while (input[i] !== "Enough") {
    if (flunk >= maxFlunk) {
      console.log(`You need a break, ${flunk} poor grades. `);
      break;
    } else {
      lastProblem = input[i];
      if (Number(input[i + 1]) <= 4) {
        flunk++;
      }
      solvedProblems++;
      gradeSum = gradeSum + Number(input[i + 1]);
      averageGrade = (gradeSum / solvedProblems).toFixed(2);
      i += 2;
    }
  }
  if (flunk < maxFlunk) {
    console.log(`Average score: ${averageGrade}`);
    console.log(`Number of problems: ${solvedProblems}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
function jessy(input) {
  let neededMoney = Number(input[0]);
  let i = 1;
  let availableMoney = Number(input[i]);
  let passedDays = 0;
  while (availableMoney < neededMoney) {
    passedDays++;
    let keyword = input[i + 1];
    if (keyword === "save") {
      availableMoney = availableMoney + Number(input[i + 2]);
      i += 2;
    } else {
      if (
        input[i + 1] === "spend" &&
        input[i - 1] === "spend" &&
        input[i - 3] === "spend" &&
        input[i - 5] === "spend" &&
        input[i - 7] === "spend"
      ) {
        console.log("You can't save the money.");
        console.log(passedDays);
        break;
      }
      availableMoney = availableMoney - Number(input[i + 2]);
      if (availableMoney < 0) {
        availableMoney = 0;
      }
      i += 2;
    }
  }
  if (availableMoney >= neededMoney) {
    console.log(`You saved the money for ${passedDays} days.`);
  }
}
function steps(input) {
  let dailyGoal = 10000,
    i = 0,
    stepsMade = Number();
  while (input[i] !== "Going home") {
    stepsMade = stepsMade + Number(input[i]);
    if (stepsMade >= dailyGoal) {
      break;
    }
    i++;
  }
  if (input[i] === "Going home") {
    stepsMade = stepsMade + Number(input[i + 1]);
  }
  if (stepsMade >= dailyGoal) {
    console.log("Goal reached! Good job!");
  }
  if (stepsMade >= dailyGoal) {
    console.log(`${Math.abs(stepsMade - dailyGoal)} steps over the goal!`);
  } else {
    console.log(`${Math.abs(stepsMade - dailyGoal)} more steps to reach goal.`);
  }
}
function coinJob(input) {
  let change = Number(input[0]),
    coinNumTot = Number(),
    coinCurr = Number(),
    coinCost = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
    i = 0;
  while (0 !== change) {
    coinCurr = Math.floor(change / coinCost[i]);
    change = change - coinCurr * coinCost[i];
    change = Number(change.toFixed(2));
    coinNumTot = coinNumTot + coinCurr;
    i++;
  }
  console.log(coinNumTot);
}
function kake(input) {
  let kakeSize = Number(input[1]) * Number(input[0]),
    i = 2;
  while (input[i] !== "STOP" && kakeSize >= 0) {
    kakeSize = kakeSize - Number(input[i]);
    i++;
  }
  if (kakeSize >= 0) {
    console.log(`${kakeSize} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(kakeSize)} pieces more.`
    );
  }
}
kake(["10", "10", "20", "20", "20", "20", "21", "20", "20"]);
kake(["10", "2", "2", "4", "6", "STOP"]);
