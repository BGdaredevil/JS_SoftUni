function stars() {
  for (let i = 0; i < 10; i++) {
    console.log("*".repeat(10));
  }
}
function starsNN(n) {
  n = Number(n);
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(n));
  }
}
function starsSquare(n) {
  n = Number(n);
  for (i = 1; i <= n; i++) {
    let line = "*";
    for (let j = 1; j <= n - 1; j++) {
      line += " *";
    }
    console.log(line);
  }
}
function dollarTriangle(n) {
  n = Number(n);
  for (let i = 1; i <= n; i++) {
    let line = "$";
    for (let j = 1; j < i; j++) {
      line += " $";
    }
    console.log(line);
  }
}
function frame(n) {
  n = Number(n);
  let topRow = "+";
  let botRow = "+";
  for (i = 0; i < n - 2; i++) {
    topRow += " -";
  }
  topRow += " +";
  console.log(topRow);
  for (i = 0; i < n - 2; i++) {
    let midRow = "|";
    for (j = 0; j < n - 2; j++) {
      midRow += " -";
    }
    midRow += " |";
    console.log(midRow);
  }
  for (i = 0; i < n - 2; i++) {
    botRow += " -";
  }
  botRow += " +";
  console.log(botRow);
}
function starRomb(n) {
  n = Number(n);
  //top -- 3 rows (case n = 3)
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= n - row; col++) {
      line += " ";
    }
    line += "*";
    for (col = 1; col < row; col++) {
      line += " *";
    }
    console.log(line);
  }
  //bottom
  for (let i = n - 1; i > 0; i--) {
    let lineBot = "";
    for (j = 1; j <= n - i; j++) {
      lineBot += " ";
    }
    lineBot += "*";
    for (j = 1; j < i; j++) {
      lineBot += " *";
    }
    console.log(lineBot);
  }
}
function tree(n) {
  n = Number(n);
  for (let i = 0; i <= n; i++) {
    let mid = " | ";
    let star = "*";
    let space = " ";
    space = space.repeat(n - i);
    let row = "";
    row = space + star.repeat(i) + mid + star.repeat(i) + space;
    console.log(row);
  }
}
function glasses(n) {
  n = Number(n);
  //top row
  let tRow = "";
  tRow = "*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n);
  console.log(tRow);
  //middle

  for (let j = 0; j < n - 2; j++) {
    let mRow = "";
    mRow += "*";
    for (let i = 0; i < 2 * n - 2; i++) {
      mRow += "/";
    }
    mRow += "*";

    if (j === Math.floor((n - 1) / 2 - 1)) {
      mRow = mRow + "|".repeat(n);
    } else {
      mRow = mRow + " ".repeat(n);
    }

    mRow += "*";
    for (let i = 0; i < 2 * n - 2; i++) {
      mRow += "/";
    }
    mRow += "*";
    console.log(mRow);
  }
  //bottom
  let bRow = "";
  bRow = "*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n);
  console.log(bRow);
}
function house(n) {
  n = Number(n);
  //pokriv
  let stars = 1;
  if (n % 2 === 0) {
    stars++;
  }
  let roofLength = Math.ceil(n / 2);
  for (let k = 0; k < roofLength; k++) {
    let tireta = (n - stars) / 2;
    let roofRow = "-".repeat(tireta);
    roofRow += "*".repeat(stars);
    roofRow += "-".repeat(tireta);
    console.log(roofRow);
    stars += 2;
  }
  //osnova
  for (let i = 0; i < n - roofLength; i++) {
    let baseRow = "";
    baseRow += "|";
    for (let j = 0; j < n - 2; j++) {
      baseRow += "*";
    }
    baseRow += "|";
    console.log(baseRow);
  }
}
function diamond(n) {
  n = Number(n);
  let dash = Math.floor((n - 1) / 2);
  for (let i = 0; i < Math.floor(n / 2 + 1); i++) {
    if (dash < 0) {
      break;
    }
    let row = "";
    let mid = n - 2 * dash - 2;
    row += "-".repeat(dash);
    row += "*";
    if (mid >= 0) {
      row += "-".repeat(mid);
      row += "*";
    }
    row += "-".repeat(dash);
    console.log(row);
    dash--;
  }
  dash = 0;
  for (let i = 0; i < Math.floor((n - 1) / 2); i++) {
    dash++;
    let row = "";
    let mid = n - 2 * dash - 2;
    row += "-".repeat(dash);
    row += "*";
    if (mid >= 0) {
      row += "-".repeat(mid);
      row += "*";
    }
    row += "-".repeat(dash);
    console.log(row);
  }
}
diamond(15);
