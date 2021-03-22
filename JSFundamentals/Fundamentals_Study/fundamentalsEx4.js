function concat(name1, name2, conn) {
  console.log(`${name1}${conn}${name2}`);
}

function rightPlace(string1, char, string2) {
  let combined = string1.replace("_", char);
  if (combined === string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

function intFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  if (sum % 1 === 0) {
    sum += " - Integer";
  } else {
    sum += " - Float";
  }
  console.log(`${sum}`);
}

function amazing() {
  let input = arguments;
  let index = 0;
  let testNum = input[index].toString();
  let digitSum = 0;
  let isAmazing = false;
  for (let i = 0; i < testNum.length; i++) {
    let digit = Number(testNum[i]);
    digitSum += digit;
  }
  digitSum = digitSum.toString();
  for (let i = 0; i <= digitSum.length; i++) {
    let digit = Number(digitSum[i]);
    if (digit === 9) {
      isAmazing = true;
      break;
    } else {
      isAmazing = false;
    }
  }
  if (isAmazing) {
    console.log(`${testNum} Amazing? True`);
  } else {
    console.log(`${testNum} Amazing? False`);
  }
}

function gramophone() {
  let input = arguments;
  let index = 0;
  let bandName = input[index++];
  let albumName = input[index++];
  let songName = input[index++];
  let songDur = (albumName.length * bandName.length * songName.length) / 2;
  console.log(`The plate was rotated ${Math.ceil(songDur / 2.5)} times.`);
}

function gasGrasAss() {
  let input = arguments;
  let index = 0;
  let distance = Number(input[index++]);
  let passangers = Number(input[index++]);
  let dieselPrice = Number(input[index++]);
  let result = ((distance / 100) * 7 + passangers * 0.1) * dieselPrice;
  console.log(`Needed money for that trip is ${result}lv.`);
}

function centuries() {
  let input = arguments;
  let index = 0;
  let centuries = Number(input[index++]);
  let years = centuries * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = days * 24;
  let minutes = hours * 60;
  console.log(
    `${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}

function special() {
  let input = arguments;
  let index = 0;
  let num = Number(input[index++]);
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let newNum = i.toString();
    for (let j = 0; j < newNum.length; j++) {
      let item = Number(newNum[j]);
      sum += item;
    }
    if (sum === 5) {
      console.log(`${i} -> True`);
    } else if (sum === 7) {
      console.log(`${i} -> True`);
    } else if (sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

function triplet(n) {
  n = Number(n);
  let possibleLetters = [];
  for (let i = "a".charCodeAt(0); i < "a".charCodeAt(0) + n; i++) {
    let char = String.fromCharCode(i);
    possibleLetters.push(char);
  }

  for (let char1 of possibleLetters) {
    for (let char2 of possibleLetters) {
      for (let char3 of possibleLetters) {
        console.log(`${char1}${char2}${char3}`);
      }
    }
  }
}
