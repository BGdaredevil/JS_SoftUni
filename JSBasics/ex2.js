function grade(input) {
  if (Number(input) >= 5.5) {
    console.log("Excellent!");
  }
}
function solve(input1, input2) {
  if (Number(input1) >= Number(input2)) {
    console.log(input1);
  } else {
    console.log(input2);
  }
}

function evenOdd(int) {
  if (Number(int) % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
function between(num) {
  if (Number(num) > 200) {
    console.log("Greater than 200");
  } else {
    if (Number(num) <= 200 && Number(num) >= 100) {
      console.log("Between 100 and 200");
    } else {
      console.log("Less than 100");
    }
  }
}
function password(pass) {
  if (pass === "s3cr3t!P@ssw0rd") {
    console.log("Welcome");
  } else {
    console.log("Wrong password!");
  }
}

function figures(type, a, b) {
  a = Number(a);
  b = Number(b);
  if (type === "square") {
    console.log((a ** 2).toFixed(3));
  } else {
    if (type === "rectangle") {
      console.log((a * b).toFixed(3));
    } else {
      if (type === "circle") {
        console.log((a ** 2 * Math.PI).toFixed(3));
      } else {
        if (type === "triangle") {
          console.log(((a * b) / 2).toFixed(3));
        } else {
          console.log("NEVERRRR");
        }
      }
    }
  }
}
function toyStore(exPrice, puzzleNo, dollNo, bearNo, winionsNo, trucksNo) {
  exPrice = Number(exPrice);
  puzzleNo = Number(puzzleNo);
  dollNo = Number(dollNo);
  bearNo = Number(bearNo);
  winionsNo = Number(winionsNo);
  trucksNo = Number(trucksNo);
  let total =
    2.6 * puzzleNo + 3 * dollNo + 4.1 * bearNo + 8.2 * winionsNo + 2 * trucksNo;
  let rent;
  if (puzzleNo + dollNo + bearNo + winionsNo + trucksNo >= 50) {
    total = total * 0.75;
    rent = total * 0.1;
    total = total - rent;
  } else {
    rent = total * 0.1;
    total = total - rent;
  }
  if (total >= exPrice) {
    let rem = total - exPrice;
    console.log(`Yes! ${rem.toFixed(2)} lv left.`);
  } else {
    let rem = exPrice - total;
    console.log(`Not enough money! ${rem.toFixed(2)} lv needed.`);
  }
}

toyStore("17.91", "1", "1", "1", "1", "1");
