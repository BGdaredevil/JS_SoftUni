function equal(input) {
  let count = 0;

  let isEqual = (x1, y1, x2, y2) => {
    if (input[x1][y1] === input[x2][y2]) {
      return true;
    } else {
      return false;
    }
  };

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (i + 1 < input.length) {
        if (isEqual(i, j, i + 1, j)) {
          count++;
        }
      }
      if (j + 1 < input[i].length) {
        if (isEqual(i, j, i, j + 1)) {
          count++;
        }
      }
      if (i - 1 >= 0) {
        if (isEqual(i, j, i - 1, j)) {
          count++;
        }
      }
      if (j - 1 >= 0) {
        if (isEqual(i, j, i, j - 1)) {
          count++;
        }
      }
    }
  }
  console.log(count / 2);
}

function killBunny(input) {
  let coordinates = input.pop().split(" ");
  let matrix = input.map((row) => row.split(" ").map((x) => Number(x)));
  let damage = 0;
  let frags = 0;
  let findAndDetonate = (arr, bombX, bombY) => {
    let distanceCalc = (x1, y1, x2, y2) => {
      let dx = Math.abs(x1 - x2);
      let dy = Math.abs(y1 - y2);
      let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      return distance;
    };
    let distanceTrue = Math.sqrt(2);
    let bombDmg = arr[bombX][bombY];

    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr[x].length; y++) {
        if (distanceCalc(x, y, bombX, bombY) <= distanceTrue) {
          if (bombDmg >= 0) {
            arr[x][y] -= bombDmg;
          }
        }
      }
    }

    return arr;
  };

  coordinates.forEach((element) => {
    let dual = element.split(",");
    let bombX = Number(dual[0]);
    let bombY = Number(dual[1]);
    if (Number(matrix[bombX][bombY]) > 0) {
      damage += Number(matrix[bombX][bombY]);
      frags++;
    }
    matrix = findAndDetonate(matrix, bombX, bombY);
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let bunny = matrix[i][j];
      if (bunny > 0) {
        damage += bunny;
        frags++;
      }
    }
  }

  console.log(damage);
  console.log(frags);
}

function polluteThis() {
  let index = 0;
  let input = arguments;
  let blocks = input[index++];
  let events = input[index];
  let result = [];
  let breeze = (arr, row) => {
    for (let i = 0; i < arr[row].length; i++) {
      if (arr[row][i] - 15 < 0) {
        arr[row][i] = 0;
      } else {
        arr[row][i] -= 15;
      }
    }
    return arr;
  };

  let gale = (arr, col) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][col] - 20 < 0) {
        arr[i][col] = 0;
      } else {
        arr[i][col] -= 20;
      }
    }
    return arr;
  };

  let smog = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        arr[i][j] += val;
      }
    }
    return arr;
  };
  let poluted = false;

  blocks = blocks.map((el) => el.split(" ").map((x) => (x = Number(x))));
  events = events.map((el) => el.split(" "));

  for (let i = 0; i < events.length; i++) {
    let operation = events[i][0];
    let num = Number(events[i][1]);
    switch (operation) {
      case "breeze":
        blocks = breeze(blocks, num);
        break;
      case "gale":
        blocks = gale(blocks, num);
        break;
      case "smog":
        blocks = smog(blocks, num);
        break;
    }
  }

  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blocks[i].length; j++) {
      let block = blocks[i][j];
      if (block >= 50) {
        poluted = true;
        result.push(`[${i}-${j}]`);
      }
    }
  }
  if (poluted) {
    console.log(`Polluted areas: ${result.join(", ")}`);
  } else {
    console.log("No polluted areas");
  }
}

function notation(input) {
  let operMemory = [];
  for (let i = 0; i < input.length; i++) {
    let thing = input[i];
    let a;
    let b;
    if (isNaN(thing)) {
      switch (thing) {
        case "+":
          a = operMemory.pop();
          b = operMemory[operMemory.length - 1];

          if (isNaN(b)) {
            console.log("Error: not enough operands!");
            return;
          }
          operMemory[operMemory.length - 1] = b + a;
          break;
        case "-":
          a = operMemory.pop();
          b = operMemory[operMemory.length - 1];

          if (isNaN(b)) {
            console.log("Error: not enough operands!");
            return;
          }
          operMemory[operMemory.length - 1] = b - a;
          break;
        case "*":
          a = operMemory.pop();
          b = operMemory[operMemory.length - 1];

          if (isNaN(b)) {
            console.log("Error: not enough operands!");
            return;
          }
          operMemory[operMemory.length - 1] = b * a;
          break;
        case "/":
          a = operMemory.pop();
          b = operMemory[operMemory.length - 1];

          if (isNaN(b)) {
            console.log("Error: not enough operands!");
            return;
          }
          operMemory[operMemory.length - 1] = b / a;
          break;
      }
    } else {
      operMemory.push(thing);
    }
  }
  if (operMemory.length > 1) {
    console.log("Error: too many operands!");
  } else if (operMemory.length === 1) {
    console.log(operMemory[0]);
  }
}

function rosettaStoned(input) {
  let templateMatrixLength = Number(input.shift());
  let decodingTemplateMatrix = [];
  let offsetX = 0;
  let offsetY = 0;
  let result = "";

  for (let i = 0; i < templateMatrixLength; i++) {
    let decodingRow = input[i].split(" ").map((el) => (el = Number(el)));
    decodingTemplateMatrix.push(decodingRow);
  }

  for (let i = 0; i < templateMatrixLength; i++) {
    input.shift();
  }

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map((el) => (el = Number(el)));
  }

  let decodeNum = (num) => {
    num = num % 27;
    let retVal;
    if (num === 0) {
      retVal = " ";
      return retVal;
    } else {
      retVal = String.fromCharCode(64 + num);
      return retVal;
    }
  };
  while (
    offsetX <
    Math.ceil(input.length / decodingTemplateMatrix.length) *
      decodingTemplateMatrix.length
  ) {
    for (let x = 0; x < decodingTemplateMatrix.length; x++) {
      for (let y = 0; y < decodingTemplateMatrix[x].length; y++) {
        let number;
        if (x + offsetX >= input.length) {
          continue;
        }
        number = input[x + offsetX][y + offsetY] + decodingTemplateMatrix[x][y];
        if (!isNaN(number)) {
          input[x + offsetX][y + offsetY] = decodeNum(number);
        } else {
          break;
        }
      }
    }
    offsetY += decodingTemplateMatrix[0].length;
    if (
      offsetY >
      Math.ceil(input.length / decodingTemplateMatrix[0].length) *
        decodingTemplateMatrix[0].length
    ) {
      offsetY = 0;
      offsetX += decodingTemplateMatrix.length;
      if (
        offsetX ===
        Math.ceil(input.length / decodingTemplateMatrix.length) *
          decodingTemplateMatrix.length
      ) {
        break;
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    result += input[i].join("");
  }
  result.length = result.length - 1;
  console.log(result);
}
rosettaStoned([
  "1",
  "1 3 13",
  "12 22 14 13 25 0 4 24 23",
  "18 24 2 25 22 0 0 11 18",
  "8 25 6 26 8 23 13 4 14",
  "14 3 14 10 6 1 6 16 14",
  "11 12 2 10 24 2 13 24 0",
  "24 24 10 14 15 25 18 24 12",
  "4 24 0 8 4 22 19 22 14",
  "0 11 18 26 1 19 18 13 15",
  "8 15 14 26 24 14 26 24 14",
]);
