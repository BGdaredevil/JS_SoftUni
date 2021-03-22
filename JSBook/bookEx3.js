function fort(n) {
  n = Number(n);
  let row; //2n
  let height; //n
  let left, right; //n/2

  //top row
  let topRow = "/";
  for (let i = 0; i < Math.trunc(n / 2); i++) {
    topRow += "^";
  }
  topRow += "\\";

  if (2 * n > 2 * n - 2 * Math.trunc(n / 2) - 4) {
    for (let i = 0; i < 2 * n - 2 * Math.trunc(n / 2) - 4; i++) {
      topRow += "_";
    }
  }
  topRow += "/";
  for (let i = 0; i < Math.trunc(n / 2); i++) {
    topRow += "^";
  }
  topRow += "\\";

  console.log(topRow);

  //middle row
  for (let i = 0; i < n - 3; i++) {
    let midRow = "|";
    for (let j = 0; j < n * 2 - 2; j++) {
      midRow += " ";
    }
    midRow += "|";
    console.log(midRow);
  }

  //second to last mid row
  let midRow = "|";
  for (let i = 0; i <= Math.trunc(n / 2); i++) {
    midRow += " ";
  }

  if (2 * n > 2 * n - 2 * Math.trunc(n / 2) - 4) {
    for (let i = 0; i < 2 * n - 2 * Math.trunc(n / 2) - 4; i++) {
      midRow += "_";
    }
  }
  for (let i = 0; i < Math.trunc(n / 2) + 1; i++) {
    midRow += " ";
  }
  midRow += "|";

  console.log(midRow);

  //bot row
  let botRow = "\\";
  for (let i = 0; i < Math.trunc(n / 2); i++) {
    botRow += "_";
  }
  botRow += "/";

  if (2 * n > 2 * n - 2 * Math.trunc(n / 2) - 4) {
    for (let i = 0; i < 2 * n - 2 * Math.trunc(n / 2) - 4; i++) {
      botRow += " ";
    }
  }
  botRow += "\\";
  for (let i = 0; i < Math.trunc(n / 2); i++) {
    botRow += "_";
  }
  botRow += "/";

  console.log(botRow);
}
function butterfly(n) {
  n = Number(n);
  let wingWidth = n - 1;
  let wingHeight = n - 2;
  for (let i = 1; i <= wingHeight; i++) {
    let tRow = "";
    if (i % 2 === 1) {
      tRow += "*".repeat(wingWidth - 1);
      tRow += "\\ /";
      tRow += "*".repeat(wingWidth - 1);
    } else {
      tRow += "-".repeat(wingWidth - 1);
      tRow += "\\ /";
      tRow += "-".repeat(wingWidth - 1);
    }
    console.log(tRow);
  }
  let mRow = " ".repeat(wingWidth) + "@";
  console.log(mRow);

  for (let i = 1; i <= wingHeight; i++) {
    let bRow = "";
    if (i % 2 === 1) {
      bRow += "*".repeat(wingWidth - 1);
      bRow += "/ \\";
      bRow += "*".repeat(wingWidth - 1);
    } else {
      bRow += "-".repeat(wingWidth - 1);
      bRow += "/ \\";
      bRow += "-".repeat(wingWidth - 1);
    }
    console.log(bRow);
  }
}
function stop(n) {
  n = Number(n[0]);
  let j = 0;
  let signHeight = n * 2 + 2;
  let pointsWidth = n + 1;
  let signWidth = 2 * n + 1;
  //most top row
  let firstRow =
    ".".repeat(pointsWidth) + "_".repeat(2 * n + 1) + ".".repeat(pointsWidth);
  console.log(firstRow);
  //top row
  for (let i = 0; i < n; i++, j += 2) {
    let topRow = "";
    topRow += ".".repeat(n - i);
    topRow += "//";
    topRow += "_".repeat(signWidth - 2 + j);
    topRow += "\\\\";
    topRow += ".".repeat(n - i);
    console.log(topRow);
  }
  j = 0;
  //mid row
  let midRow = "";
  midRow += "//";
  midRow += "_".repeat(2 * n - 3);
  midRow += "STOP!";
  midRow += "_".repeat(2 * n - 3);
  midRow += "\\\\";
  console.log(midRow);
  //bottom row
  for (let i = 0; i < n; i++, j += 2) {
    let botRow = "";
    botRow += ".".repeat(i);
    botRow += "\\\\";
    botRow += "_".repeat(4 * n - 1 - j);
    botRow += "//";
    botRow += ".".repeat(i);
    console.log(botRow);
  }
  //most bottom row
}
function arrow(n) {
  n = Number(n[0]);
  let arrowWidth = 2 * n - 1;
  let topPoints = (arrowWidth - n) / 2;
  let tailWidth = n - 2;
  let tailHeight = arrowWidth - n - 1;
  let topRow = "";
  topRow += ".".repeat(topPoints);
  topRow += "#".repeat(n);
  topRow += ".".repeat(topPoints);
  console.log(topRow);
  for (let i = 0; i < tailHeight; i++) {
    topRow = "";
    topRow += ".".repeat(topPoints);
    topRow += "#";
    topRow += ".".repeat(tailWidth);
    topRow += "#";
    topRow += ".".repeat(topPoints);
    console.log(topRow);
  }
  topRow = "";
  topRow += "#".repeat(topPoints + 1);
  topRow += ".".repeat(arrowWidth - 2 * topPoints - 2);
  topRow += "#".repeat(topPoints + 1);
  console.log(topRow);

  for (let i = 1; i < n - 1; i++) {
    topRow = "";
    topRow =
      topRow +
      ".".repeat(i) +
      "#" +
      ".".repeat(arrowWidth - 2 * i - 2) +
      "#" +
      ".".repeat(i);
    console.log(topRow);
  }
  topRow = "";
  topRow += ".".repeat(2 * topPoints);
  topRow += "#";
  topRow += ".".repeat(2 * topPoints);
  console.log(topRow);
}
function axe(n) {
  n = Number(n[0]);
  let handle = 3 * n;
  let handleWidth = Math.trunc(n / 2);

  /// top part
  for (let i = 0; i < n; i++) {
    let topRow = "";
    topRow += "-".repeat(handle);
    topRow += "*";
    topRow += "-".repeat(i);
    topRow += "*";
    topRow += "-".repeat(2 * n - 2 - i);
    console.log(topRow);
  }
  // handle
  for (let i = 0; i < handleWidth; i++) {
    let handleRow = "";
    handleRow += "*".repeat(handle);
    handleRow += "*";
    handleRow += "-".repeat(n - 1);
    handleRow += "*";
    handleRow += "-".repeat(n - 1);
    console.log(handleRow);
  }
  // under handle
  for (let i = 0; i < handleWidth - 1; i++) {
    let underRow = "";
    underRow += "-".repeat(handle - i);
    underRow += "*";
    underRow += "-".repeat(n - 1 + 2 * i);
    underRow += "*";
    underRow += "-".repeat(n - 1 - i);
    console.log(underRow);
  }
  // last Row
  let lastRow = "";
  lastRow += "-".repeat(handle - handleWidth + 1);
  lastRow += "*".repeat(n - 1 + 2 * handleWidth);
  lastRow += "-".repeat(n - handleWidth);
  console.log(lastRow);
}
axe(["5"]);
