function fruit(...input) {
  let [item, qty, price] = input;
  qty = Number(qty) / 1000;
  price = Number(price);
  return `I need $${(price * qty).toFixed(2)} to buy ${qty.toFixed(
    2
  )} kilograms ${item}.`;
}

function greatestCD(...input) {
  let [first, second] = input;
  let max = Math.max(first, second);
  let min = Math.min(first, second);
  let rem;
  while (rem !== 0) {
    rem = max % min;
    if (rem === 0) {
      return min;
    } else {
      max = min;
      min = rem;
    }
  }
}

function sameNums(input) {
  input = input.toString();
  let result = true;
  let prev;
  let sum = 0;
  for (const item of input) {
    sum += Number(item);
    if (Number(item) !== prev && prev !== undefined) {
      result = false;
    }
    prev = Number(item);
  }
  return `${result}\n${sum}`;
}

function walk(...input) {
  let [steps, length, speed] = input.map((el) => Number(el));
  let dist = steps * length;
  speed = (speed * 1000) / 60 / 60;
  let addTimeMins = Math.floor(dist / 500);
  let date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  let time = Math.ceil(dist / speed + addTimeMins * 60);
  date.setSeconds(time);
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  const formatter = (num) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  return `${formatter(hours)}:${formatter(mins)}:${formatter(secs)}`;
}

function radar(...input) {
  let [speed, area] = input;
  speed = Number(speed);
  let onMotroway = 130;
  let onInterstate = 90;
  let onCity = 50;
  let onResidential = 20;
  let limit;
  switch (area) {
    case "motorway":
      limit = onMotroway;
      break;
    case "interstate":
      limit = onInterstate;
      break;
    case "city":
      limit = onCity;
      break;
    case "residential":
      limit = onResidential;
      break;
  }
  if (speed <= limit) {
    return `Driving ${speed} km/h in a ${limit} zone`;
  } else if (speed <= limit + 20) {
    return `The speed is ${
      speed - limit
    } km/h faster than the allowed speed of ${limit} - speeding`;
  } else if (speed <= limit + 40) {
    return `The speed is ${
      speed - limit
    } km/h faster than the allowed speed of ${limit} - excessive speeding`;
  } else {
    return `The speed is ${
      speed - limit
    } km/h faster than the allowed speed of ${limit} - reckless driving`;
  }
}

function cooking(...input) {
  let num = Number(input.shift());
  let result = "";
  while (input.length > 0) {
    let operation = input.shift();
    if (result !== "") {
      result += `\n`;
    }
    switch (operation) {
      case "chop":
        num = num / 2;
        result += `${num}`;
        break;
      case "dice":
        num = Math.sqrt(num);
        result += `${num}`;
        break;
      case "spice":
        num++;
        result += `${num}`;
        break;
      case "bake":
        num *= 3;
        result += `${num}`;
        break;
      case "fillet":
        num *= 0.8;
        result += `${num}`;
        break;
    }
  }
  return result;
}

function validityCheck(...input) {
  let [x1, y1, x2, y2] = input;
  let firstZeroDist = Math.sqrt(x1 ** 2 + y1 ** 2);
  let secondZeroDist = Math.sqrt(x2 ** 2 + y2 ** 2);
  let PtoPDist = Math.sqrt(Math.abs(x2 - x1) ** 2 + Math.abs(y2 - y1) ** 2);
  const checker = (dist) => {
    if (dist % 1 === 0) {
      return "valid";
    } else {
      return "invalid";
    }
  };
  return `{${x1}, ${y1}} to {0, 0} is ${checker(
    firstZeroDist
  )}\n{${x2}, ${y2}} to {0, 0} is ${checker(
    secondZeroDist
  )}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${checker(PtoPDist)}`;
}

function wordsCapitalize(input) {
  let test = /(?<word>\w+)/gi;
  let words = [];
  while ((info = test.exec(input)) !== null) {
    words.push(info.groups.word.toUpperCase());
  }
  return words.join(", ");
}
console.log(wordsCapitalize("Hi, how are you?"));
console.log(wordsCapitalize("hello"));
