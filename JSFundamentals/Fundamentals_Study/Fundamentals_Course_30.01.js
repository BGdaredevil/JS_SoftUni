function solve(input) {
  let oldSum = 0;
  let newSum = 0;
  for (const item of input) {
    oldSum += item;
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      input[i] += i;
    } else {
      input[i] -= i;
    }
    newSum += input[i];
  }
  console.log(`[ ${input.join(", ")} ]\n${oldSum}\n${newSum}`);
}

function solve1(...input) {
  let [first, second] = input;
  for (const el of first) {
    for (const sec of second) {
      if (el === sec) {
        console.log(el);
      }
    }
  }
}

function solve2(...input) {
  let [first, second] = input;
  let result = [];
  for (let i = 0; i < first.length; i++) {
    if (i % 2 === 1) {
      result.push(first[i] + second[i]);
    } else {
      result.push(Number(first[i]) + Number(second[i]));
    }
  }
  console.log(`${result.join(" - ")}`);
}

function solve3(...input) {
  let [arr, times] = input;
  times = Number(times);
  while (times > 0) {
    times--;
    arr.push(arr.shift());
  }
  console.log(arr.join(" "));
}

function solve4(input) {
  let result = [];
  for (let j = 0; j < input.length; j++) {
    let test = input[j];
    let isTop = true;
    for (let i = j + 1; i < input.length; i++) {
      if (input[i] >= test) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      result.push(test);
    }
  }

  console.log(result.join(" "));
}

function solve5(input) {
  let isNotFound = true;
  for (const i in input) {
    let left = 0;
    input.slice(0, Number(i)).map((el) => (left += el));
    let right = 0;
    input.slice(Number(i) + 1).map((el) => (right += el));
    if (left === right) {
      isNotFound = false;
      console.log(i);
      break;
    }
  }
  if (isNotFound) {
    console.log("no");
  }
}

function solve6(input) {
  let longest = [];
  let candidate = [];
  let previous;
  for (const el of input) {
    if (candidate.length === 0) {
      candidate.push(el);
      previous = el;
    } else if (previous === el) {
      candidate.push(el);
      previous = el;
    } else if (longest.length < candidate.length && candidate.length >= 2) {
      longest = candidate;
      candidate = [];
    } else {
      candidate = [];
      candidate.push(el);
      previous = el;
    }
  }
  console.log(longest.join(" "));
}

function solve7(...input) {
  let [arr, target] = input;
  let previous;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}

function solve7_1(...input) {
  let [arr, target] = input;
  for (const firstIndex in arr) {
    for (const secondIndex in arr) {
      if (
        firstIndex < secondIndex &&
        arr[firstIndex] + arr[secondIndex] === target
      ) {
        console.log(`${arr[firstIndex]} ${arr[secondIndex]}`);
      }
    }
  }
}
solve7_1([14, 20, 60, 13, 7, 19, 8], 27);
