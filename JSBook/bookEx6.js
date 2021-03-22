function triangle(n) {
  x1 = Number(n[0]);
  y1 = Number(n[1]);
  x2 = Number(n[2]);
  y2 = Number(n[3]);
  x3 = Number(n[4]);
  y3 = Number(n[5]);
  let side = Math.abs(x2 - x3);
  let height = Math.abs(y1 - y2);
  let area = (side * height) / 2;
  console.log(area);
}

function brick(n) {
  let quantity = Number(n[0]);
  let workers = Number(n[1]);
  let perCarry = Number(n[2]);
  let result = Math.ceil(quantity / workers / perCarry);
  console.log(result);
}
function isOnLine(n) {
  let start = Number(n[0]);
  let end = Number(n[1]);
  let point = Number(n[2]);
  let isSmaller = Math.min(start, end);
  let isBigger = Math.max(start, end);
  if (point > isBigger) {
    console.log("out");
    console.log(Math.abs(isBigger - point));
  } else if (point < isSmaller) {
    console.log("out");
    console.log(Math.abs(isSmaller - point));
  } else {
    console.log("in");
    console.log(
      Math.min(Math.abs(isSmaller - point), Math.abs(isBigger - point))
    );
  }
}
function isInFigure(n) {
  let x = Number(n[0]);
  let y = Number(n[1]);
  let test1;
  let test2;
  let test3;
  let test4;
  if (x >= 4 && x <= 10 && y >= -5 && y <= 3) {
    test1 = true;
  } else {
    test1 = false;
  }
  if (x >= 2 && x <= 12 && y >= -3 && y <= 1) {
    test2 = true;
  } else {
    test2 = false;
  }
  if (y >= -5 && y <= 3 && x >= 4 && x <= 10) {
    test3 = true;
  } else {
    test3 = false;
  }
  if (y >= -3 && y <= 1 && x >= 2 && x <= 12) {
    test4 = true;
  } else {
    test4 = false;
  }
  if (test1 || test2 || test3 || test4) {
    console.log("in");
  } else {
    console.log("out");
  }
}
function inFiveDays(input) {
  let day = Number(input[0]);
  let month = Number(input[1]);
  let monthLength = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      monthLength = 31;
      break;
    case 2:
      monthLength = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      monthLength = 30;
      break;
  }
  if (5 + day > monthLength) {
    day = day + 5 - monthLength;
    month++;
    if (month > 12) {
      month -= 12;
    }
  } else {
    day += 5;
  }
  if (month < 10) {
    month = "0" + month;
  }
  console.log(`${day}.${month}`);
}
function calcThree(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let n3 = Number(input[2]);
  let sum = Math.max(n1, n2, n3);
  let yes;
  if (n1 + n2 + n3 - sum === sum) {
    console.log(
      `${Math.min(n1, n2, n3)} + ${sum - Math.min(n1, n2, n3)} = ${sum}`
    );
  } else {
    console.log("No");
  }
}
function sumThree(input) {
  n = Number(input[0]);
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (let i = 1; i <= n; i += 3) {
    sum1 += Number(input[i]);
  }
  for (let i = 2; i <= n; i += 3) {
    sum2 += Number(input[i]);
  }
  for (let i = 3; i <= n; i += 3) {
    sum3 += Number(input[i]);
  }
  console.log(`sum1 = ${sum1}`);
  console.log(`sum2 = ${sum2}`);
  console.log(`sum3 = ${sum3}`);
}
function increasing(input) {
  n = Number(input[0]);
  let currStreak = 0;
  let maxStreak = 0;
  let prevNum = 0;
  let currNum = 0;
  for (let i = 1; i <= n; i++) {
    currNum = Number(input[i]);
    if (currNum > prevNum) {
      currStreak++;
    } else {
      currStreak = 1;
    }
    if (currStreak > maxStreak) {
      maxStreak = currStreak;
    }
    prevNum = currNum;
  }
  console.log(maxStreak);
}
function diamond(n) {
  n = Number(n[0]);
  for (let i = 1; i <= n; i++) {
    let row = "";
    let spaces = n - i;
    row += " ".repeat(spaces);
    row += "*";
    row += "-*".repeat(i - 1);
    console.log(row);
  }
  for (let i = n - 1; i > 0; i--) {
    let row = "";
    let spaces = n - i;
    row += " ".repeat(spaces);
    row += "*";
    row += "-*".repeat(i - 1);
    console.log(row);
  }
}
function rectangle(n) {
  n = Number(n[0]);
  let midHeight;
  let midPoint;

  if (n % 2 === 0) {
    midHeight = n - 1;
  } else {
    midHeight = n;
  }
  midPoint = Math.ceil(midHeight / 2);

  console.log("%".repeat(2 * n));

  for (let i = 1; i <= midHeight; i++) {
    let row = "";
    row += "%";
    if (i === midPoint) {
      row += " ".repeat(n - 2);
      row += "**";
      row += " ".repeat(n - 2);
    } else {
      row += " ".repeat(2 * n - 2);
    }
    row += "%";
    console.log(row);
  }

  console.log("%".repeat(2 * n));
}
function fourGrowers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let nums = [];
  for (let i = start; i <= end; i++) {
    nums.push(i);
  }
  if (nums.length < 4) {
    console.log("No");
  }
  for (let i = 0; i < nums.length; i++) {
    let n1 = nums[i];
    for (let i = 0; i < nums.length; i++) {
      let n2 = nums[i];
      for (let i = 0; i < nums.length; i++) {
        let n3 = nums[i];
        for (let i = 0; i < nums.length; i++) {
          let n4 = nums[i];
          if (start <= n1 && n1 < n2 && n2 < n3 && n3 < n4 && n4 <= end) {
            console.log(`${n1} ${n2} ${n3} ${n4}`);
          }
        }
      }
    }
  }
}
function generate(input) {
  let num = Number(input[0]);
  let area = Number(input[1]);
  let count = 0;
  let left = 0;
  let top = 0;
  let right = 0;
  let bottom = 0;
  for (let left = -num; left <= num; left++) {
    for (let top = -num; top <= num; top++) {
      for (let right = left + 1; right <= num; right++) {
        for (let bottom = top + 1; bottom <= num; bottom++) {
          let tArea = (right - left) * (bottom - top);
          if ((right - left) * (bottom - top) >= area) {
            count++;
            console.log(`(${left}, ${top}) (${right}, ${bottom}) -> ${tArea}`);
          }
        }
      }
    }
  }
  if (count === 0) {
    console.log("No");
  }
}

generate(["3", "36"]);
