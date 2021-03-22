function fillWith(...input) {
  return input[0].join(input[1]);
}

function prtintNth(...params) {
  return params[0].filter((el, i) => i % Number(params[1]) === 0);
}

function addRem(input) {
  let num = 1;
  let result = [];
  for (const line of input) {
    switch (line) {
      case "add":
        result.push(num);
        break;
      case "remove":
        result.pop();

        break;
    }
    num++;
  }
  if (result.length === 0) {
    return "Empty";
  } else {
    return result.join("\n");
  }
}

function rotator(...input) {
  let [arr, times] = input;
  while (times > 0) {
    times--;
    arr.unshift(arr.pop());
  }
  return arr.join(" ");
}

function extractIncrease(input) {
  let result = [...input];
  let currMax = -Infinity;
  return result.filter((el) => {
    if (el >= currMax) {
      currMax = el;
      return true;
    } else {
      return false;
    }
  });
}

function nameList(input) {
  return input
    .sort((a, b) => a.localeCompare(b))
    .map((el, i) => (el = `${i + 1}.${el}`))
    .join("\n");
}

function sortTheseNums(input) {
  let result = [];
  let sorted = input.sort((a, b) => a - b);
  while (sorted.length > 0) {
    result.push(sorted.shift());
    if (sorted.length > 0) {
      result.push(sorted.pop());
    }
  }
  return result;
}

function sortByTwo(input) {
  return input
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .join("\n");
}

function matrix(input) {
  let isMagic = true;
  let prevRow;
  let colSums = [];
  for (const row of input) {
    let currRow = row.reduce((acc, el) => (acc += el));
    if (prevRow === undefined) {
      prevRow = currRow;
    } else if (prevRow !== currRow) {
      isMagic = false;
    }
  }
  while (input[0].length > colSums.length) {
    colSums.push(0);
  }
  input.flat().map((el, i) => (colSums[i % colSums.length] += el));
  if (colSums.every((el) => el === colSums[0])) {
  } else {
    isMagic = false;
  }
  return isMagic;
}

function ticTacToe(input) {
  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let player;
  let change;
  let isEnded;
  let who;
  const checkIsFree = (a, b, board) => {
    if (board[a][b] !== false) {
      return false;
    } else {
      return true;
    }
  };
  const checker = (board) => {
    let isEnded;
    let who;
    for (const row of board) {
      if (row.every((el) => el === row[0] && el !== false)) {
        isEnded = true;
        who = row[0];
        return [isEnded, who];
      } else {
        isEnded = false;
      }
    }

    for (let i = 0; i < board.length; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i] &&
        board[0][i] !== false
      ) {
        isEnded = true;
        who = board[0][i];
        return [isEnded, who];
        break;
      } else {
        isEnded = false;
      }
    }

    if (
      board[1][1] === board[0][0] &&
      board[1][1] === board[2][2] &&
      board[1][1] !== false
    ) {
      isEnded = true;
      who = board[1][1];
      return [isEnded, who];
    } else if (
      board[1][1] === board[0][2] &&
      board[1][1] === board[2][0] &&
      board[1][1] !== false
    ) {
      isEnded = true;
      who = board[1][1];
      return [isEnded, who];
    } else {
      isEnded = false;
    }
    return [isEnded, who];
  };

  for (const line of input) {
    let [row, col] = line.split(" ").map(Number);
    switch (player) {
      case undefined:
        player = "X";
        break;
      case "X":
        if (change) {
          player = "O";
        }
        break;
      case "O":
        if (change) {
          player = "X";
        }
        break;
    }
    if (checkIsFree(row, col, board)) {
      board[row][col] = player;
      change = true;
    } else {
      console.log("This place is already taken. Please choose another!");
      change = false;
      continue;
    }
    [isEnded, who] = checker(board);
    let copy = board.flat();
    if (isEnded) {
      console.log(`Player ${who} wins!`);
      board.forEach((it) => {
        console.log(`${it.join("\t")}`);
      });
      break;
    } else if (copy.every((el) => el !== false)) {
      console.log(`The game ended! Nobody wins :(`);
      board.forEach((it) => {
        console.log(`${it.join("\t")}`);
      });
      break;
    }
  }
}

function dioagonal(input) {
  let result = [];
  for (const line of input) {
    result.push(line.split(" ").map(Number));
  }
  let leftSum = 0;
  let rightSum = 0;
  for (let i in result) {
    i = Number(i);
    leftSum += result[i][i];
    rightSum += result[i][result.length - i - 1];
  }

  if (leftSum === rightSum) {
    for (let row in result) {
      row = Number(row);
      for (let col in result) {
        col = Number(col);
        if (row !== col && col !== result.length - row - 1) {
          result[row][col] = leftSum;
        }
      }
    }
  }
  return result.map((el) => el.join(" ")).join("\n");
}

function orbit(input) {
  let [cols, rows, rowsOne, colsOne] = input;
  let field = [];
  while (field.length < rows) {
    let r = [];
    while (r.length < cols) {
      r.push(0);
    }
    field.push(r);
  }
  for (let row in field) {
    row = Number(row);
    for (let col in field[row]) {
      col = Number(col);
      field[row][col] =
        Math.max(Math.abs(row - rowsOne), Math.abs(col - colsOne)) + 1;
    }
  }
  return field.map((el) => el.join(" ")).join("\n");
}

function spiral(...input) {
  let [rows, cols] = input;
  let result = [];
  while (result.length < rows) {
    let r = [];
    while (r.length < cols) {
      r.push(0);
    }
    result.push(r);
  }

  let row = 0;
  let col = 0;
  let step = 0;

  for (let i = 0; i < rows * cols; i++) {
    while (col + step < cols) {
      i++;
      result[row][col] = i;
      col++;
    }
    col--;
    row++;

    while (row + step < rows) {
      i++;
      result[row][col] = i;
      row++;
    }
    col--;
    row--;

    while (col >= step) {
      i++;
      result[row][col] = i;
      col--;
    }
    col++;
    row--;
    step++;

    while (row >= step) {
      i++;
      result[row][col] = i;
      row--;
    }
    row++;
    col++;
    i--;
  }

  return result.map((el) => el.join(" ")).join("\n");
}

console.log(spiral(5, 5));
console.log(spiral(3, 3));
