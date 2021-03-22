function replace(...input) {
  let [words, statementWords] = input;
  words = words.split(", ");
  let statementWordsArr = statementWords.split(" ");
  for (const sWord of statementWordsArr) {
    if (sWord[0] === "*") {
      for (const test of words) {
        if (test.length === sWord.length) {
          //while (statementWords.includes(sWord)) {
          statementWords = statementWords.replace(sWord, test);
          //}
        }
      }
    }
  }
  console.log(statementWords);
}

function times(str) {
  str = str.split(" ");
  for (let word of str) {
    if (word.length > 1 && word.includes("#")) {
      word = word.replace("#", "");
      if (
        word
          .split("")
          .every(
            (char) =>
              (char >= "A" && char <= "Z") || (char >= "a" && char <= "z")
          )
      ) {
        console.log(word);
      }
    }
  }
}

function extract(str) {
  let fileInfo = str.split("\\").pop();
  let name = fileInfo.substring(0, fileInfo.lastIndexOf("."));
  let ext = fileInfo.substring(fileInfo.lastIndexOf(".") + 1);
  console.log(`File name: ${name}\nFile extension: ${ext}`);
}

function stringSubstring(...str) {
  let [target, sourse] = str;
  let isFound = false;
  sourse = sourse.toLowerCase().split(" ");
  for (const line of sourse) {
    if (line === target) {
      isFound = true;
      break;
    }
  }
  if (isFound) {
    console.log(target);
  } else {
    console.log(`${target} not found!`);
  }
}

function spam(str) {
  let result = "";
  let prev = "";
  for (const ch of str) {
    if (ch !== prev) {
      result += ch;
      prev = ch;
    }
  }
  console.log(result);
}

function pascalCase(str) {
  let prev = "";
  let result = "";
  let upperFound = false;
  for (const char of str) {
    if (char >= "A" && char <= "Z" && !upperFound) {
      result += char;
      upperFound = true;
    } else {
      //upperFound = false;
      if (char >= "A" && char <= "Z") {
        result += ", ";
        result += char;
        //upperFound = true;
      } else {
        //upperFound = false;
        result += char;
      }
    }
  }
  console.log(result);
}

function cutTheReverse(str) {
  let half = str.length / 2;
  console.log(str.slice(0, half).split("").reverse().join(""));
  console.log(str.slice(half).split("").reverse().join(""));
}

function hardWood(input) {
  let [letterContents, words] = input;
  words = words.sort((a, b) => b.length - a.length);
  let letterContentsArr = letterContents.split(" ");
  for (let word of words) {
    for (let i = 0; i < letterContentsArr.length; i++) {
      if (letterContentsArr[i].includes("_")) {
        if (letterContentsArr[i].includes(",")) {
          let temp = letterContentsArr[i].replace(",", "");
          if (temp.length === word.length) {
            word += ",";
            letterContentsArr[i] = word;
          }
        } else if (letterContentsArr[i].includes(".")) {
          let temp = letterContentsArr[i].replace(".", "");
          if (temp.length === word.length) {
            word += ".";
            letterContentsArr[i] = word;
          }
        } else if (letterContentsArr[i].length === word.length) {
          letterContentsArr[i] = word;
        }
      }
    }
  }
  console.log(letterContentsArr.join(" "));
}

function genPass(input) {
  let [first, second, third] = input;
  let subject = first + second;
  third = third.toUpperCase();
  subject = subject.toLowerCase();
  let index = 0;
  subject = subject.split("");
  for (const char of subject) {
    if (
      char === "u" ||
      char === "o" ||
      char === "i" ||
      char === "e" ||
      char === "a"
    ) {
      if (index >= third.length) {
        index = 0;
      }
      subject.splice(subject.indexOf(char), 1, third[index++]);
    }
  }
  console.log(`Your generated password is ${subject.reverse().join("")}`);
}

function numbering(input) {
  input = input.split(" ").sort().reverse();
  let sum = 0;
  let calc = (letterA, letterB, number) => {
    let pos;
    let result;
    if (letterA >= "A" && letterA <= "Z") {
      pos = letterA.charCodeAt(0) - 64;
      result = number / pos;
    } else if (letterA >= "a" && letterA <= "z") {
      pos = letterA.charCodeAt(0) - 96;
      result = number * pos;
    }
    if (letterB >= "A" && letterB <= "Z") {
      pos = letterB.charCodeAt(0) - 64;
      result -= pos;
    } else if (letterB >= "a" && letterB <= "z") {
      pos = letterB.charCodeAt(0) - 96;
      result += pos;
    }
    return result;
  };
  for (const line of input) {
    if (line === "") {
      break;
    } else {
      let temp = line.split("");
      let first = temp.shift();
      let last = temp.pop();
      let num = Number(temp.join(""));
      sum += calc(first, last, num);
    }
  }
  console.log(sum.toFixed(2));
}
numbering("A12b       s17G");
numbering("P34562Z q2576f   H456z");
numbering("a1A");
