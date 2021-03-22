function wordize(input) {
  switch (input) {
    case "one":
      console.log("1");
      break;
    case "two":
      console.log("2");
      break;
    case "three":
      console.log("3");
      break;
    case "four":
      console.log("4");
      break;
    case "five":
      console.log("5");
      break;
    case "six":
      console.log("6");
      break;
    case "seven":
      console.log("7");
      break;
    case "eight":
      console.log("8");
      break;
    case "nine":
      console.log("9");
      break;
    case "zero":
      console.log("0");
      break;
  }
}

function isItPrime(input) {
  input = Number(input);
  let isPrime = true;
  for (let i = 2; i < input / 2; i++) {
    if (input % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (!isPrime) {
    console.log("false");
  } else {
    console.log("true");
  }
}

function cone() {
  let input = arguments;
  let index = 0;
  let radius = Number(input[index++]);
  let height = Number(input[index++]);
  let surface =
    Math.PI * Math.pow(radius, 2) +
    Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)) * Math.PI * radius;
  let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${surface.toFixed(4)}`);
}

function biggest() {
  let input = arguments;
  let index = 0;
  let first = Number(input[index++]);
  let second = Number(input[index++]);
  let third = Number(input[index++]);
  console.log(Math.max(Math.max(first, second), third));
}

function binaryToDecimal(input) {
  let result = 0;
  let temp = [];
  for (let i = 0; i < input.length; i++) {
    let digit = input[i];
    temp.push(digit);
  }
  input = temp.reverse().join("");
  for (let i = 0; i < input.length; i++) {
    let digit = input[i];
    result += Number(digit) * Math.pow(2, i);
  }
  console.log(result);
}

function chessBoard(input) {
  input = Number(input);
  let squaresVal = ["black", "white"];
  let spanS = '<span class="';
  let spaneE = '"></span>';
  let divFirst = '<div class="chessboard">';
  let divStart = "<div>";
  let divEnd = "</div>";
  let row = divFirst;
  console.log(row);
  for (let i = 0; i < input; i++) {
    row = "  ";
    row += divStart;
    console.log(row);
    for (let j = 0; j < input; j++) {
      row = "    ";
      row += spanS;
      row += squaresVal[(j + i) % 2];
      row += spaneE;
      console.log(row);
    }
    row = "  ";
    row += divEnd;
    console.log(row);
  }
  row = "";
  row += divEnd;
  console.log(row);
}

function triangleArea() {
  let input = arguments;
  let index = 0;
  let a = Number(input[index++]);
  let b = Number(input[index++]);
  let c = Number(input[index++]);
  let semi = (a + b + c) / 2;
  let area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));
  console.log(area);
}
