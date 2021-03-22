function cross(input) {
  let t1 = Number(input[0]);
  let t2 = Number(input[1]);
  let t3 = Number(input[2]);
  let currTri = 0;

  let currMatr = Number(input[3]);
  let step = Number(input[4]);
  let multy = 1;
  let counter = 0;

  let isFound = false;

  while (currMatr <= 1000000 && currTri <= 1000000) {
    if (currTri === currMatr) {
      isFound = true;
      console.log(currTri);
      break;
    } else if (currTri < currMatr) {
      if (currTri < t1) {
        currTri = t1;
      } else if (currTri < t2) {
        currTri = t2;
      } else if (currTri < t3) {
        currTri = t3;
      } else {
        currTri = t1 + t2 + t3;
        t1 = t2;
        t2 = t3;
        t3 = currTri;
      }
    } else {
      currMatr += step * multy;
      counter++;
      if (counter % 2 === 0) {
        multy++;
      }
    }
  }
  if (!isFound) {
    console.log("No");
  }
}
function dates(input) {
  let startDate = Number(input[0]);
  let endDate = Number(input[1]);
  let magicNum = Number(input[2]);
  let date = new Date(startDate, 0, 1);
  let found = false;

  while (date.getFullYear() <= endDate) {
    let d1 = Math.floor(date.getDate() / 10);
    let d2 = date.getDate() % 10;

    let d3 = Math.floor((date.getMonth() + 1) / 10);
    let d4 = (date.getMonth() + 1) % 10;

    let d5 = Math.floor(date.getFullYear() / 1000);
    let d6 = Math.floor(date.getFullYear() / 100) % 10;
    let d7 = Math.floor(date.getFullYear() / 10) % 10;
    let d8 = date.getFullYear() % 10;

    let weight =
      d1 * (d2 + d3 + d4 + d5 + d6 + d7 + d8) +
      d2 * (d3 + d4 + d5 + d6 + d7 + d8) +
      d3 * (d4 + d5 + d6 + d7 + d8) +
      d4 * (d5 + d6 + d7 + d8) +
      d5 * (d6 + d7 + d8) +
      d6 * (d7 + d8) +
      d7 * d8;
    if (weight === magicNum) {
      console.log(`${d1}${d2}-${d3}${d4}-${d5}${d6}${d7}${d8}`);
      found = true;
    }
    date.setDate(date.getDate() + 1);
  }
  if (!found) {
    console.log("No");
  }
}
function magicLettersTest(input) {
  function weightCalc(evaluate) {
    // needed for letters(input)
    let letters = ["a", "b", "c", "d", "e"];
    let letterWeight = [5, -12, 47, 7, -32];
    let letterA = 0;
    let letterB = 0;
    let letterC = 0;
    let letterD = 0;
    let letterE = 0;
    let nonRepeat = 0;
    let weight = 0;
    for (let i = 0; i < evaluate.length; i++) {
      let letter = evaluate[i];
      switch (letter) {
        case letters[0]:
          letterA++;
          if (letterA === 1) {
            nonRepeat++;
            weight += nonRepeat * letterWeight[0];
          }
          break;
        case letters[1]:
          letterB++;
          if (letterB === 1) {
            nonRepeat++;
            weight += nonRepeat * letterWeight[1];
          }
          break;
        case letters[2]:
          letterC++;
          if (letterC === 1) {
            nonRepeat++;
            weight += nonRepeat * letterWeight[2];
          }
          break;
        case letters[3]:
          letterD++;
          if (letterD === 1) {
            nonRepeat++;
            weight += nonRepeat * letterWeight[3];
          }
          break;
        case letters[4]:
          letterE++;
          if (letterE === 1) {
            nonRepeat++;
            weight += nonRepeat * letterWeight[4];
          }
          break;
      }
    }
    return weight;
  }

  function letters(input) {
    let start = input[0];
    let end = input[1];
    let letters = ["a", "b", "c", "d", "e"];
    let evaluate = "";
    let isFound = false;
    let result = "";
    for (let i = 0; i < letters.length; i++) {
      let l1 = letters[i];
      for (let y = 0; y < letters.length; y++) {
        let l2 = letters[y];
        for (let j = 0; j < letters.length; j++) {
          let l3 = letters[j];
          for (let u = 0; u < letters.length; u++) {
            let l4 = letters[u];
            for (let k = 0; k < letters.length; k++) {
              let l5 = letters[k];
              evaluate = l1 + l2 + l3 + l4 + l5;
              if (
                weightCalc(evaluate) >= start &&
                weightCalc(evaluate) <= end
              ) {
                result += " ";
                result += evaluate;
                isFound = true;
              }
            }
          }
        }
      }
    }
    if (!isFound) {
      console.log("No");
    } else {
      console.log(result);
    }
  }
  letters(input);
}
magicLettersTest(["40", "42"]);
