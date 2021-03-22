function addAndSub(input) {
  let output = [];
  let sumOld = 0;
  let sumNew = 0;
  for (let i = 0; i < input.length; i++) {
    let num = Number(input[i]);
    sumOld += num;
    if (num % 2 === 0) {
      num += i;
      output.push(num);
    } else {
      num -= i;
      output.push(num);
    }
    sumNew += num;
  }
  console.log(output);
  console.log(sumOld);
  console.log(sumNew);
}

function common() {
  let input = arguments;
  let index = 0;
  let first = input[index++];
  let second = input[index++];

  for (let i = 0; i < first.length; i++) {
    let elementFirst = first[i];
    for (let j = 0; j < second.length; j++) {
      let elementSecond = second[j];
      if (elementFirst === elementSecond) {
        console.log(elementFirst);
      }
    }
  }
}

function merge() {
  let input = arguments;
  let index = 0;
  let first = input[index++];
  let second = input[index++];
  let result = [];

  for (let i = 0; i < first.length; i++) {
    let firstElement = first[i];
    let secondElement = second[i];
    if (i % 2 === 0) {
      result.push(Number(firstElement) + Number(secondElement));
    } else {
      result.push(firstElement + secondElement);
    }
  }
  console.log(result.join(" - "));
}

function rotate() {
  let input = arguments;
  let index = 0;
  let arr = input[index++];
  let times = Number(input[index++]);
  for (let i = 1; i <= times; i++) {
    arr.push(arr.shift());
  }
  console.log(arr.join(" "));
}

function maxNum(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let current = Number(input[i]);
    let isTop = true;
    for (let j = i + 1; j < input.length; j++) {
      let next = Number(input[j]);
      if (current <= next) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      result.push(current);
    }
  }
  console.log(result.join(" "));
}

function equalSums(input) {
  let isFound = false;
  let foundAtIndex;

  for (let i = 0; i < input.length; i++) {
    let item = input[i];
    let leftSum = 0;
    let rightSum = 0;

    for (let j = i + 1; j < input.length; j++) {
      let element = Number(input[j]);
      rightSum += element;
    }

    for (let j = i - 1; j >= 0; j--) {
      let element = Number(input[j]);
      leftSum += element;
    }

    if (leftSum === rightSum) {
      isFound = true;
      foundAtIndex = i;
      break;
    }
  }

  if (isFound) {
    console.log(foundAtIndex);
  } else {
    console.log("no");
  }
}

function maxSeq(input) {
  let result = [];
  let output = [];
  let longest = 1;
  let previous;
  let i = 0;

  while (i < input.length) {
    let current = input[i];
    if (current === previous) {
      result.push(current);
      if (longest < result.length) {
        longest = result.length;
        output = result;
      }
    } else {
      result = [current];
    }
    previous = current;
    i++;
  }
  console.log(output.join(" "));
}

function magicSum() {
  let input = arguments;
  let index = 0;
  let testArray = input[index++];
  let givenNum = input[index++];
  for (let i = 0; i < testArray.length; i++) {
    let first = Number(testArray[i]);
    let testSum;
    for (let j = i + 1; j < testArray.length; j++) {
      let second = Number(testArray[j]);
      testSum = second + first;
      if (testSum === givenNum) {
        console.log(`${first} ${second}`);
      }
    }
  }
}

function dungeon(input) {
  let currentHP = 100;
  let currentCoins = 0;
  let bestRoom;
  let isFinished = true;
  input = input[0].split("|");
  for (let i = 0; i < input.length; i++) {
    let room = input[i];
    room = room.split(" ");
    let item = room[0];
    let num = Number(room[1]);
    if (item === "potion") {
      if (currentHP + num <= 100) {
        currentHP += num;
        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${currentHP} hp.`);
      } else {
        console.log(`You healed for ${num - (currentHP + num - 100)} hp.`);
        currentHP = 100;
        console.log(`Current health: ${currentHP} hp.`);
      }
    } else if (item === "chest") {
      currentCoins += num;
      console.log(`You found ${num} coins.`);
    } else {
      currentHP -= num;
      if (currentHP > 0) {
        console.log(`You slayed ${item}.`);
      } else {
        isFinished = false;
        bestRoom = i + 1;
        console.log(`You died! Killed by ${item}.`);
        console.log(`Best room: ${bestRoom}`);
        break;
      }
    }
  }
  if (isFinished) {
    console.log(`You've made it!`);
    console.log(`Coins: ${currentCoins}`);
    console.log(`Health: ${currentHP}`);
  }
}

function ladybug(input) {
  let index = 0;
  let fieldSize = Number(input[index++]);
  let initialBugPositions = input[index++];
  initialBugPositions = initialBugPositions.split(" ");
  let initialField = [];
  initialField.length = fieldSize;
  initialField.fill(0);

  for (let i = 0; i < initialBugPositions.length; i++) {
    let thePosition = initialBugPositions[i];
    if (thePosition < initialField.length) {
      initialField[thePosition] = 1;
    }
  }

  for (; index < input.length; index++) {
    let command = input[index];
    command = command.split(" ");
    let i = 0;
    let bugAtPosition = Number(command[i++]);
    let direction = command[i++];
    let length = Number(command[i++]);
    if (initialField[bugAtPosition] === 1) {
      // there is a bug
      switch (direction) {
        case "right":
          initialField[bugAtPosition] = 0;
          do {
            bugAtPosition += length;
          } while (initialField[bugAtPosition] === 1);
          if (bugAtPosition < initialField.length && bugAtPosition >= 0) {
            initialField[bugAtPosition] = 1;
          }
          break;
        case "left":
          initialField[bugAtPosition] = 0;
          do {
            bugAtPosition -= length;
          } while (initialField[bugAtPosition] === 1);
          if (bugAtPosition < initialField.length && bugAtPosition >= 0) {
            initialField[bugAtPosition] = 1;
          }
          break;
      }
    } else {
      continue;
    }
  }
  console.log(initialField.join(" "));
}
ladybug([5, "0", "1 left -1", "0 left -2"]);
