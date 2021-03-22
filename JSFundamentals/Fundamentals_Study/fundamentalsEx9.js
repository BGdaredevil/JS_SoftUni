function nthElement(input) {
  let result = [];
  let step = Number(input.pop());
  for (let i = 0; i < input.length; i += step) {
    result.push(input[i]);
  }
  console.log(result.join(" "));
}

function addRem(input) {
  let firstNum = 1;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let operation = input[i];
    switch (operation) {
      case "add":
        result.push(firstNum);
        break;
      case "remove":
        result.pop();
        break;
    }
    firstNum++;
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}

function rotate(input) {
  let amount = Number(input.pop());
  if (isNaN(amount)) {
    console.log("Empty");
    return;
  }
  while (amount > 0) {
    input.unshift(input.pop());
    amount--;
  }
  console.log(input.join(" "));
}

function subSeq(input) {
  function bigger(num1, num2, num3) {
    if (num2 - 1 < 0) {
      num2 = 0;
    } else {
      num2 = num2 - 1;
    }
    if (Number(num1) >= Number(input[num2])) {
      return true;
    } else {
      return false;
    }
  }
  let result = input.filter(bigger);
  console.log(result.join(" "));
}

function tseam(input) {
  let index = 0;
  let account = input[index++].split(" ");
  while (input[index] !== "Play!") {
    let comand = input[index++];
    comand = comand.split(" ");
    let action = comand[0];
    let game = comand[1];
    let expans;
    switch (action) {
      case "Install":
        if (!account.includes(game)) {
          account.push(game);
        }
        break;
      case "Uninstall":
        if (account.includes(game)) {
          account.splice(account.indexOf(game), 1);
        }
        break;
      case "Update":
        if (account.includes(game)) {
          account.splice(account.indexOf(game), 1);
          account.push(game);
        }
        break;
      case "Expansion":
        expans = game.replace("-", ":");
        game = game.slice(0, game.indexOf("-"));
        if (account.includes(game)) {
          account.splice(account.indexOf(game) + 1, 0, expans);
        }
        break;
    }
  }
  console.log(account.join(" "));
}

function annoyingMagic(input) {
  let sums = [];
  let sum = 0;
  let result = true;
  input.forEach((first) => {
    first.forEach((element) => {
      sum += Number(element);
    });
    sums.push(sum);
    sum = 0;
  });

  if (sums[0] === sums[1] && sums[1] === sums[2] && sums[2] === sums[0]) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
}

function moreAnnoyingMatrix() {
  let input = arguments;
  let index = 0;
  let height = Number(input[index++]);
  let width = Number(input[index++]);
  let numMax = height * width;
  let result = [];

  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(0);
    }
    result.push(row);
  }

  let x = 0;
  let y = 0;
  let step = 0;

  for (let i = 0; i < numMax; i++) {
    while (y + step < width) {
      i++;
      result[x][y] = i;
      y++;
    }
    y--;
    x++;

    while (x + step < height) {
      i++;
      result[x][y] = i;
      x++;
    }
    x--;
    y--;

    while (y >= step) {
      i++;
      result[x][y] = i;
      y--;
    }
    y++;
    x--;
    step++;

    while (x >= step) {
      i++;
      result[x][y] = i;
      x--;
    }
    x++;
    y++;
    i--;
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].join(" "));
  }
}

function evenMoreAnnoying(input) {
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ");
  }

  let sumL = 0;
  for (let i = 0; i < input.length; i++) {
    let item = Number(input[i][i]);
    sumL += item;
  }

  let sumR = 0;
  for (let i = 0; i < input.length; i++) {
    let item = Number(input[i][input.length - i - 1]);
    sumR += item;
  }

  if (sumL === sumR) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (i !== j && j !== input.length - i - 1) {
          input[i][j] = sumL;
        }
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    console.log(input[i].join(" "));
  }
}

function theOrbit(input) {
  let index = 0;
  let rows = Number(input[index++]);
  let cols = Number(input[index++]);
  let startRow = Number(input[index++]);
  let startCol = Number(input[index++]);
  let result = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    result.push(row);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      result[row][col] =
        1 + Math.max(Math.abs(row - startRow), Math.abs(col - startCol));
    }
  }

  for (let i = 0; i < result.length; i++) {
    console.log(result[i].join(" "));
  }
}
theOrbit([5, 5, -10, -10]);
