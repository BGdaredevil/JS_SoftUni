function loto(input) {
  let test = /(?=.{20}).*?(?=(?<ch>[@#$^]))(?<match>\k<ch>{6,}).*(?<=.{10})\k<match>.*/;
  input = input
    .shift()
    .split(", ")
    .map((el) => el.trim());
  for (const line of input) {
    let match = test.exec(line);
    if (match) {
      if (match.groups.match.length >= 6 && match.groups.match.length <= 9) {
        console.log(
          `ticket "${line}" - ${match.groups.match.length}${match.groups.ch}`
        );
      } else if (match.groups.match.length == 10) {
        console.log(
          `ticket "${line}" - ${match.groups.match.length}${match.groups.ch} Jackpot!`
        );
      }
    } else if (line.length !== 20) {
      console.log("invalid ticket");
    } else {
      console.log(`ticket "${line}" - no match`);
    }
  }
}

function rage(input) {
  input = input[0].toUpperCase();
  let unique = new Map();
  let test = /(?<str>[\D]+)(?<count>[\d]+)/gi;
  let row = "";
  while ((temp = test.exec(input)) !== null) {
    let repeatThis = temp.groups.str.toUpperCase();
    let times = Number(temp.groups.count);
    row += repeatThis.repeat(times);
  }
  for (const ch of row) {
    unique.set(ch);
  }
  console.log(`Unique symbols used: ${[...unique.entries()].length}\n${row}`);
}

function postal(input) {
  let index = 0;
  input = input[index].split("|");
  let firstPart = input[index++];
  let secondPart = input[index++];
  let thirdPart = input[index];
  let getChars = /(?<lchar>[#$%&*]{1}(?=[A-Z]+))(?<firstLetters>(?<=[#$%&*]{1})[A-Z]+)\k<lchar>/;
  let getCode = /(?<code>[\d]{2}):(?<theLength>[\d]{2})/g;
  let firstLetters = [];
  for (const ch1 of getChars.exec(firstPart).groups.firstLetters) {
    firstLetters.push({ char: ch1, wLength: undefined, word: undefined });
  }
  while ((temp = getCode.exec(secondPart)) !== null) {
    temp = temp.groups;
    for (const ch of firstLetters) {
      if (ch.char.charCodeAt(0) === Number(temp.code)) {
        let wordLength = 1 + Number(temp.theLength);
        ch.wLength = wordLength;
      }
    }
  }
  for (const letter of firstLetters) {
    let getWords = /(?<word>\b[A-Z]{1}[^ ]+\b)/g;
    while ((word = getWords.exec(thirdPart)) !== null) {
      if (
        word.groups.word.length === letter.wLength &&
        word.groups.word[0] === letter.char
      ) {
        letter.word = word.groups.word;
      }
    }
  }
  for (const item of firstLetters) {
    console.log(item.word);
  }
}

function santa(input) {
  let key = Number(input.shift());
  let result = [];
  let test = /(?<kidName>(?<=@{1})[A-Za-z]+)[^\@\!\:\>\-]*!+(?<behaviour>(?<=!{1})[G|N](?=!+))/;
  for (const kid of input) {
    if (kid === "end") {
      break;
    } else {
      let temp = "";
      for (const ch of kid) {
        temp += String.fromCharCode(ch.charCodeAt(0) - key);
      }
      if ((temp = test.exec(temp)) !== null) {
        if (temp.groups.behaviour === "G") {
          console.log(temp.groups.kidName);
        }
      }
    }
  }
  /*   for (const la of result) {
    console.log(la);
  } */
}
santa([
  "4",
  "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
  "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
  ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
  "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
  "DReh}e=<4lhzj1%K%",
  "end",
]);
