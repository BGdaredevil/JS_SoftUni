function reveal(...input) {
  let [words, result] = input;
  words = words.split(", ").sort((a, b) => b.length - a.length);
  let info = words.reduce((acc, el) => {
    let regEx = new RegExp(` \\*{${el.length}} `);
    //console.log(regEx);
    el = ` ${el} `;
    acc = acc.replace(regEx, el);
    return acc;
  }, result);

  info = words.reduce((acc, el) => {
    let regEx = new RegExp(`\\*{${el.length}} `);
    //console.log(regEx);
    el = `${el} `;
    acc = acc.replace(regEx, el);
    return acc;
  }, info);

  info = words.reduce((acc, el) => {
    let regEx = new RegExp(` \\*{${el.length}}`);
    //console.log(regEx);
    el = ` ${el}`;
    acc = acc.replace(regEx, el);
    return acc;
  }, info);

  return info;
}

function beModern(input) {
  let test = /#[A-Za-z]+/g;
  let result = "";
  while ((lala = test.exec(input)) !== null) {
    result += `${lala[0].replace("#", "")}\n`;
  }
  return result;
}

function extractFile(input) {
  input = input.split("\\").pop().split(".");
  return `File name: ${input
    .slice(0, input.length - 1)
    .join(".")}\nFile extension: ${input.pop()}`;
}

function strSubStr(...input) {
  let [toFind, target] = input;
  let found = target
    .split(" ")
    .map((el) => el.toLowerCase())
    .filter((el) => el === toFind);
  if (found.length !== 0) {
    return found[0];
  } else {
    return `${toFind} not found!`;
  }
}

function replaceRepeats(input) {
  return input
    .split("")
    .filter((el, ind, arr) => {
      if (el !== arr[ind - 1]) {
        return true;
      } else {
        return false;
      }
    })
    .join("");
}

function splitPascal(input) {
  let reg = /[A-Z][a-z]*/g;
  let row = [];
  while ((la = reg.exec(input)) !== null) {
    row.push(la[0]);
  }

  return row.join(", ");
}

function cutReverse(input) {
  let front = input
    .substring(0, Math.ceil(input.length / 2))
    .split("")
    .reverse()
    .join("");
  let rear = input
    .substring(Math.ceil(input.length / 2), input.length)
    .split("")
    .reverse()
    .join("");
  return `${front}\n${rear}`;
}

function hardWood(input) {
  let [theLetter, words] = input;
  words.map((word) => {
    let reg = new RegExp(
      `(?<separ> )(?<word>_{${word.length}})(?<sec>[ .,]{1})`,
      "g"
    );
    while ((la = reg.exec(theLetter)) !== null) {
      let sss = la;
      let tempWord = `${sss.groups.separ}${word}${sss.groups.sec}`;
      theLetter = theLetter.replace(reg, tempWord);
    }
  });
  return theLetter;
}

function genThatPass(input) {
  let [pass, second, word] = input;
  pass += second;
  let vowelTest = /[aieou]/g;
  let index = 0;
  result = pass;
  while ((info = vowelTest.exec(pass)) !== null) {
    if (index >= word.length) {
      index = 0;
    }
    result = result.replace(info[0], word[index].toUpperCase());
    index++;
  }
  return `Your generated password is ${result.split("").reverse().join("")}`;
}

function letterChange(input) {
  let process = (str) => {
    let test = /(?<first>[a-z])(?<num>\d+)(?<last>[a-z])/gi;
    let { first, num, last } = { ...test.exec(str).groups };
    num = Number(num);
    if (first < "a") {
      num = num / (first.charCodeAt(0) - 64);
    } else {
      num = num * (first.charCodeAt(0) - 96);
    }

    if (last < "a") {
      num = num - (last.charCodeAt(0) - 64);
    } else {
      num = num + (last.charCodeAt(0) - 96);
    }

    return num;
  };
  return (input = input
    .split(" ")
    .filter((el) => el.length > 0)
    .map((el) => (el = process(el)))
    .reduce((acc, el) => (acc += el), 0)
    .toFixed(2));
}

console.log(letterChange("'P34562Z q2576f   H456z'"));
