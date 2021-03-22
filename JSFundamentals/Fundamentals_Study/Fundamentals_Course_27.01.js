function sumFirstLast(input) {
  console.log(Number(input.shift()) + Number(input.pop()));
}
//sumFirstLast([20, 30, 40]);

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
//dayOfWeek(5);

function reverser(...input) {
  let [num, arr] = input;

  let returnArr = arr.slice(0, num);
  console.log(returnArr.reverse().join(" "));
}
//reverser(3, [10, 20, 30, 40, 50]);

function reverserLevel2(input) {
  console.log(input.reverse().join(" "));
}
//reverserLevel2(["abc", "def", "hig", "klm", "nop"]);

function sumEven(input) {
  let evenSum = 0;
  let oddSum = 0;
  input = input.map((el) => Number(el));
  input.map((el) => (el % 2 === 0 ? (evenSum += el) : (oddSum += el)));
  console.log(evenSum);
}
//sumEven(["1", "2", "3", "4", "5", "6"]);

function sumEvenOdd(input) {
  let evenSum = 0;
  let oddSum = 0;
  input = input.map((el) => Number(el));
  input.map((el) => (el % 2 === 0 ? (evenSum += el) : (oddSum += el)));
  console.log(evenSum - oddSum);
}

function isEqual(...input) {
  let sum = 0;
  let [first, last] = input;
  first = first.map((el) => Number(el));
  last = last.map((el) => Number(el));
  let areSame = true;
  let atIndex;
  if (last.length > first.length) {
    areSame = false;
    atIndex = first.length - 1;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) {
      areSame = false;
      atIndex = i;
      break;
    }
  }
  if (areSame) {
    first.map((el) => (sum += el));
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${atIndex} index`
    );
  }
}
//isEqual(["1"], ["10", "2", "4", "4", "5"]);

function condense(input) {
  let count = input.length - 1;
  while (count >= 1) {
    for (let i = 0; i < count; i++) {
      input[i] += input[i + 1];
    }
    count--;
  }
  console.log(input[0]);
}
condense([5, 0, 4, 1, 2]);
