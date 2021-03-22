function sort(num1, num2, num3) {
  let output = [Number(num1), Number(num2), Number(num3)];
  output.sort();
  output.reverse();
  for (let i = 0; i < output.length; i++) {
    let item = output[i];
    console.log(item);
  }
}
function lastDigit(input) {
  let index = 0;
  input = Number(input[index]);
  input = input % 10;
  switch (input) {
    case 1:
      console.log("one");
      break;
    case 2:
      console.log("two");
      break;
    case 3:
      console.log("three");
      break;
    case 4:
      console.log("four");
      break;
    case 5:
      console.log("five");
      break;
    case 6:
      console.log("six");
      break;
    case 7:
      console.log("seven");
      break;
    case 8:
      console.log("eight");
      break;
    case 9:
      console.log("nine");
      break;
    case 0:
      console.log("zero");
      break;
  }
}

function nextDay(year, month, day) {
  month -= 1;
  day += 2;
  let date = new Date(year, month, day);
  let strDate = date.toISOString();
  let result = strDate.slice(0, strDate.indexOf("T"));

  console.log(result.replace(/-0+/g, "-"));
}

function reverser(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    result.push(letter);
  }
  result.reverse();
  console.log(result.join(""));
}

function distance(x1, y1, x2, y2) {
  let xdif = x1 - x2;
  let ydif = y1 - y2;
  let result = Math.sqrt(Math.pow(xdif, 2) + Math.pow(ydif, 2));
  console.log(result);
}

distance(2, 4, 5, 0);
