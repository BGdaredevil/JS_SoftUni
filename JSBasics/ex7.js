function theNum() {
  for (let i = 7; i <= 997; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }
}
function table(theNums) {
  theNums = Number(theNums);
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${theNums} = ${i * theNums}`);
  }
}
function years(y1, y2) {
  yr1 = Number(y1);
  yr2 = Number(y2);
  for (let i = y1; i <= y2; i++) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
}
function factoriel(num01) {
  num01 = Number(num01);
  let result = 1;
  for (let i = 1; i <= num01; i++) {
    result *= i;
  }
  console.log(result);
}
function countWords(into) {
  let counter = 1;
  for (let i = 0; i <= into.length; i++) {
    if (into[i] === " ") {
      counter++;
    }
  }
  if (counter > 10) {
    console.log(`The message is too long to be send! Has ${counter} words.`);
  } else {
    console.log(`The message was send successfully!`);
  }
}
function histo(args) {
  let c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0,
    c5 = 0;
  let n = Number(args[0]);
  for (let i = 1; i <= n; i++) {
    if (Number(args[i]) >= 800) {
      c5++;
    } else {
      if (Number(args[i]) >= 600) {
        c4++;
      } else {
        if (Number(args[i]) >= 400) {
          c3++;
        } else {
          if (Number(args[i]) >= 200) {
            c2++;
          } else {
            c1++;
          }
        }
      }
    }
  }
  let p1 = ((c1 / n) * 100).toFixed(2);
  let p2 = ((c2 / n) * 100).toFixed(2);
  let p3 = ((c3 / n) * 100).toFixed(2);
  let p4 = ((c4 / n) * 100).toFixed(2);
  let p5 = ((c5 / n) * 100).toFixed(2);
  console.log(`${p1}%`);
  console.log(`${p2}%`);
  console.log(`${p3}%`);
  console.log(`${p4}%`);
  console.log(`${p5}%`);
}
function del(array) {
  let numbers = Number(array[0]);
  let per2 = 0,
    per3 = 0,
    per4 = 0;
  for (let l = 1; l <= numbers; l++) {
    let div2 = Number(array[l]) % 2;
    let div3 = Number(array[l]) % 3;
    let div4 = Number(array[l]) % 4;
    if (div2 === 0) {
      per2++;
    }
    if (div3 === 0) {
      per3++;
    }
    if (div4 === 0) {
      per4++;
    }
  }
  per2 = ((per2 / numbers) * 100).toFixed(2);
  per3 = ((per3 / numbers) * 100).toFixed(2);
  per4 = ((per4 / numbers) * 100).toFixed(2);
  console.log(`${per2}%`);
  console.log(`${per3}%`);
  console.log(`${per4}%`);
}
function pay(payment) {
  let tabs = Number(payment[0]);
  let thePay = Number(payment[1]);
  for (let m = 2; m <= tabs + 2; m++) {
    switch (payment[m]) {
      case "Facebook":
        thePay -= 150;
        break;
      case "Instagram":
        thePay -= 100;
        break;
      case "Reddit":
        thePay -= 50;
        break;
    }
    if (thePay <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }
  if (thePay > 0) {
    console.log(thePay.toFixed(0));
  }
}
function smallest(numberArray) {
  let x = Number(numberArray[0]);
  let min = Number.POSITIVE_INFINITY;
  for (let z = 1; z < x + 1; z++) {
    let curr = Number(numberArray[z]);
    if (min > curr) {
      min = curr;
    }
  }
  console.log(min);
}
