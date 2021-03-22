function firstLast(input) {
  let index = 0;
  let first = Number(input[index]);
  let last = Number(input[input.length - 1]);
  console.log(first + last);
}

function dayOfWeek(input) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (input >= 1 && input <= 7) {
    console.log(days[input - 1]);
  } else {
    console.log("Invalid day!");
  }
}

function reverseArray() {
  let input = arguments;
  let index = 0;
  let target = Number(input[index++]);
  let sorce = input[index];
  let result = [];
  for (let i = 0; i < target; i++) {
    let element = sorce[i];
    result.push(element);
  }
  result = result.reverse();
  console.log(result.join(" "));
}

function reverseStringArray(input) {
  let result = input.reverse();
  console.log(result.join(" "));
}

function sumEven(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    let element = Number(input[i]);
    if (element % 2 === 0) {
      result += element;
    }
  }
  console.log(result);
}

function subtract(input) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    if (element % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  }
  console.log(evenSum - oddSum);
}

function compareArray() {
  let input = arguments;
  let index = 0;
  let firstArray = input[index++];
  let firstParsedArray = [];
  let secondArray = input[index++];
  let secondParsedArray = [];
  let sum = 0;
  let isElementEqual = true;
  let i = 0;

  firstArray.forEach((element) => {
    element = Number(element);
    firstParsedArray.push(element);
    sum += element;
  });

  secondArray.forEach((element) => {
    element = Number(element);
    secondParsedArray.push(element);
  });

  while (isElementEqual && i < firstParsedArray.length) {
    if (firstParsedArray[i] === secondParsedArray[i]) {
      isElementEqual = true;
    } else {
      isElementEqual = false;
      break;
    }
    i++;
  }
  if (isElementEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${i} index`);
  }
}

function condenseArray(input) {
  let condensed = [];
  let i = 0;

  if (input.length === 1) {
    console.log(`${input}`);
  } else {
    do {
      condensed = [];
      for (let j = 0; j < input.length - 1; j++) {
        condensed.push(input[j] + input[j + 1]);
      }
      input = condensed;
    } while (condensed.length !== 1);

    console.log(condensed.join(""));
  }
}

condenseArray([1, 2, 4, 5, 6, 7, 8]);
