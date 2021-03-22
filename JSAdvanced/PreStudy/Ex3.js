function evenPosElements(input) {
  let result = [];
  for (const loc in input) {
    if (loc % 2 === 0) {
      result.push(input[loc]);
    }
  }
  return result.join(" ");
}

function lastK(n, k /* ...input */) {
  let seq = [];
  //   let n = input.shift();
  //   let k = input.shift();
  while (seq.length !== n) {
    if (seq.length > 0) {
      let temp = 0;
      for (let i = seq.length - k; i <= seq.length - 1; i++) {
        if (i >= 0) {
          temp += seq[i];
        }
      }
      seq.push(temp);
    } else {
      seq.push(1);
    }
  }
  return `[${seq.join(", ")}]`;
}

function sumFirstLast(input) {
  input = input.map((el) => Number(el));
  return input[0] + input[input.length - 1];
}

function negativePositiveNums(input) {
  let result = [];
  input.map((el) => (Number(el) < 0 ? result.unshift(el) : result.push(el)));
  return `[${result.join(", ")}]`;
}

function smallest(input) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  const getSmallest = (arr) => {
    let result = Infinity;
    for (const num of arr) {
      if (result > num) {
        result = num;
      }
    }
    return result;
  };
  smallest = getSmallest(input);
  input.splice(input.indexOf(smallest), 1);
  secondSmallest = getSmallest(input);

  return `${smallest} ${secondSmallest}`;
}

function biggerHalf(input) {
  input.sort((a, b) => a - b);
  let secondHalf = Math.ceil((input.length - 1) / 2);
  let result = input.slice(secondHalf);
  return result;
}

function easyAsPie(...input) {
  let testificate = input.shift();
  let firstIndex = testificate.indexOf(input.shift());
  let secondIndex = testificate.indexOf(input.shift());
  let result = testificate.slice(
    Math.min(firstIndex, secondIndex),
    Math.max(firstIndex, secondIndex) + 1
  );
  return result;
}

function oddProcess(input) {
  let result = [];
  for (const loc in input) {
    if (loc % 2 === 1) {
      result.unshift(input[loc] * 2);
    }
  }
  return result.join(" ");
}

function biggest(input) {
  let result = -Infinity;
  for (const col of input) {
    for (const item of col) {
      if (item > result) {
        result = item;
      }
    }
  }
  return result;
}

function sumDiagonals(input) {
  let mainSum = 0;
  let secondarySum = 0;
  for (let row in input) {
    row = Number(row);
    for (let col in input) {
      col = Number(col);
      if (col === row) {
        mainSum += input[row][col];
        if (input.length % 2 === 1 && Math.floor(input.length / 2) === row) {
          secondarySum += input[row][col];
        }
      } else if (col === input[row].length - 1 - row) {
        secondarySum += input[row][col];
      }
    }
  }
  return `${mainSum} ${secondarySum}`;
}

function equalNeighbors(input) {
  let count = 0;
  for (let row in input) {
    row = Number(row);
    for (let col in input[row]) {
      col = Number(col);
      if (row + 1 < input.length) {
        let a = input[row][col];
        let b = input[row + 1][col];
        if (input[row][col] == input[row + 1][col]) {
          count++;
        }
      }
      if (col + 1 < input[row].length) {
        let a = input[row][col];
        let b = input[row][col + 1];
        if (input[row][col] == input[row][col + 1]) {
          count++;
        }
      }
    }
  }
  return count;
}
console.log(
  equalNeighbors([
    ["2", "2", "5", "7", "4"],
    ["4", "0", "5", "3", "4"],
    ["2", "5", "5", "4", "2"],
  ])
);
