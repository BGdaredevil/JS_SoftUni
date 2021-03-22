function search(words) {
  let i = 0;
  while (words[i] != "Stop") {
    console.log(words[i]);

    i++;
  }
}
function pass(massive) {
  let user = massive[0];
  let pass = massive[1];
  let incomingText = massive[2];
  let i = 3;
  while (incomingText !== pass) {
    incomingText = massive[i];
    i++;
  }
  console.log(`Welcome ${user}!`);
}
function summing(allNumbers) {
  let target = Number(allNumbers[0]);
  let i = 1;
  let sum = 0;
  while (sum < target) {
    sum = sum + Number(allNumbers[i]);
    i++;
  }
  console.log(sum);
}
function lolSum(into) {
  let target01 = Number(into[0]),
    res = 1;
  while (res <= target01) {
    console.log(res);
    res = res * 2 + 1;
  }
}
function account(balance) {
  let i = 0,
    current = 0;

  while (balance[i] !== "NoMoreMoney") {
    if (Number(balance[i]) < 0) {
      console.log(`Invalid operation!`);
      break;
    } else {
      console.log(`Increase: ${Number(balance[i]).toFixed(2)}`);
      current = current + Number(balance[i]);
      i++;
    }
  }
  console.log(`Total: ${current.toFixed(2)}`);
}
function findMax(input) {
  let min = Number.NEGATIVE_INFINITY,
    j = 0;
  while (input[j] !== "Stop") {
    if (min < Number(input[j])) {
      min = Number(input[j]);
    }
    j++;
  }
  console.log(min);
}
function findMin(input) {
  let max = Number.POSITIVE_INFINITY,
    j = 0;
  while (input[j] !== "Stop") {
    if (max > Number(input[j])) {
      max = Number(input[j]);
    }
    j++;
  }
  console.log(max);
}
function graduate(input) {
  let name = input[0],
    isGood = 0,
    finishedGrade = 0,
    results = 0,
    i = 1;
  while (finishedGrade < 12) {
    let currResult = Number(input[i]);
    if (currResult >= 4) {
      results += currResult;
    } else {
      if (isGood === 1) {
        console.log(`${name} has been excluded at ${finishedGrade} grade`);
        break;
      }
      results += currResult;
      isGood++;
    }
    i++;
    finishedGrade++;
    if (finishedGrade === 12) {
      results = (results / finishedGrade).toFixed(2);
      console.log(`${name} graduated. Average grade: ${results}`);
    }
  }
}
function move(input) {
  let i = 3,
    length = Number(input[0]),
    width = Number(input[1]),
    height = Number(input[2]),
    availableSpace = length * width * height;
  while (input[i] !== "Done") {
    availableSpace -= Number(input[i]);
    if (availableSpace < 0) {
      console.log(
        `No more free space! You need ${Math.abs(availableSpace).toFixed(
          0
        )} Cubic meters more.`
      );
      break;
    }
    i++;
  }
  if (availableSpace >= 0) {
    console.log(`${availableSpace} Cubic meters left.`);
  }
}
