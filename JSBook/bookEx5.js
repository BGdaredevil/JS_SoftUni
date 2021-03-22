function simplePass(input) {
  let n = Number(input[0]);
  let k = Number(input[1]);
  let startChar = 97;
  let endChar = 97 + k;
  let pass = "";
  let result = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let b = startChar; b < endChar; b++) {
        let s3 = String.fromCharCode(b);
        for (let l = startChar; l < endChar; l++) {
          let s4 = String.fromCharCode(l);
          for (let m = Math.max(i, j) + 1; m <= n; m++) {
            pass = `${i}${j}${s3}${s4}${m}`;
            result.push(pass);
          }
        }
      }
    }
  }
  console.log(result.join(" "));
}
function magic(n) {
  n = Number(n[0]);
  let dividers = [1];
  let result = "";
  for (let i = 2; i < 10; i++) {
    if (n % i === 0) {
      dividers.push(i);
    }
  }
  for (let i = 0; i < dividers.length; i++) {
    let d1 = dividers[i];
    for (let u = 0; u < dividers.length; u++) {
      let d2 = dividers[u];
      for (let j = 0; j < dividers.length; j++) {
        let d3 = dividers[j];
        for (let m = 0; m < dividers.length; m++) {
          let d4 = dividers[m];
          for (let l = 0; l < dividers.length; l++) {
            let d5 = dividers[l];
            for (let k = 0; k < dividers.length; k++) {
              let d6 = dividers[k];
              if (d1 * d2 * d3 * d4 * d5 * d6 === n) {
                result = result.concat(d1, d2, d3, d4, d5, d6, " ");
              }
            }
          }
        }
      }
    }
  }
  console.log(result);
}
function stop(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let stop = Number(input[2]);
  let result = [];
  for (let i = end; i >= start; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i === stop) {
        break;
      }
      result.push(i);
    }
  }
  console.log(result.join(" "));
}
function special(n) {
  n = Number(n[0]);
  let delitel = [1];
  let result = "";
  for (let i = 2; i < 10; i++) {
    if (n % i === 0) {
      delitel.push(i);
    }
  }
  for (let i = 0; i < delitel.length; i++) {
    let d1 = delitel[i];
    for (let k = 0; k < delitel.length; k++) {
      let d2 = delitel[k];
      for (let l = 0; l < delitel.length; l++) {
        let d3 = delitel[l];
        for (let p = 0; p < delitel.length; p++) {
          let d4 = delitel[p];
          result = result.concat(d1, d2, d3, d4, " ");
        }
      }
    }
  }
  console.log(result);
}
function digits(n) {
  n = n[0];
  let d1 = Number(n.charAt(0));
  let d2 = Number(n.charAt(1));
  let d3 = Number(n.charAt(2));
  let rows = Number(n.charAt(0)) + Number(n.charAt(1));
  let columns = Number(n.charAt(0)) + Number(n.charAt(2));
  let resultRow = "";
  n = Number(n);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (n % 5 === 0) {
        n -= d1;
        resultRow += n;
        resultRow += " ";
      } else if (n % 3 === 0) {
        n -= d2;
        resultRow += n;
        resultRow += " ";
      } else {
        n += d3;
        resultRow += n;
        resultRow += " ";
      }
    }
    console.log(resultRow);
    resultRow = "";
  }
}
digits(["132"]);
