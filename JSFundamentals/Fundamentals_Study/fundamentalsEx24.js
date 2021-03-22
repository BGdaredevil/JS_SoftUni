function getValue(str) {
  let [first, operator] = str;
  let valid = [];
  let sum = 0;
  switch (operator) {
    case "LOWERCASE":
      for (const ch of first) {
        if (ch >= "a" && ch <= "z") {
          valid.push(ch.charCodeAt(0));
        }
      }
      break;
    case "UPPERCASE":
      for (const ch of first) {
        if (ch >= "A" && ch <= "Z") {
          valid.push(ch.charCodeAt(0));
        }
      }
      break;
  }
  for (const num of valid) {
    sum += num;
  }
  console.log(`The total sum is: ${sum}`);
}

function serialize(str) {
  str = str.shift();
  let result = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!result.has(str[i])) {
      result.set(str[i], [i]);
    } else {
      let temp = result.get(str[i]);
      temp.push(i);
      result.set(str[i], temp);
    }
  }
  [...result.entries()].forEach((letter) => {
    console.log(`${letter[0]}:${letter[1].join("/")}`);
  });
}

function deserialize(str) {
  let result = [];
  for (const line of str) {
    if (line === "end") {
      break;
    } else {
      let [char, indexes] = line.split(":");
      indexes = indexes.split("/");
      for (const loc of indexes) {
        while (Number(loc) >= result.length) {
          result.push("");
        }
        result.splice(Number(loc), 1, char);
      }
    }
  }
  console.log(result.join(""));
}

function simulate(input) {
  let result = [];
  let sum = 0;
  let [start, end, testificate] = input;
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  for (const ch of testificate) {
    if (ch > start && ch < end) {
      result.push(ch.charCodeAt(0));
    }
  }
  for (const num of result) {
    sum += num;
  }
  console.log(sum);
}

function treasure(input) {
  let key = input.shift().split(" ");
  for (const line of input) {
    if (line === "find") {
      break;
    }
    let result = "";
    let i = 0;
    for (const ch of line) {
      if (key.length <= i) {
        i = 0;
      }
      result += String.fromCharCode(ch.charCodeAt(0) - key[i++]);
    }
    let [word, location, word1] = result.split(/[<>]+/);
    let [word2, loot, word3] = result.split("&");
    console.log(`Found ${loot} at ${location}`);
  }
}

function merlah(str) {
  let [string, pattern] = str;
  let isShaking = true;
  while (isShaking) {
    if (pattern.length === 0) {
      isShaking = false;
      break;
    } else if (!string.includes(pattern)) {
      isShaking = false;
    } else {
      string = string.split(pattern);
      let first = string.shift();
      let last = string.pop();
      string = string.join(pattern);
      string += last;
      string = first + string;
      pattern = pattern.split("");
      pattern.splice(pattern.length / 2, 1);
      pattern = pattern.join("");
      console.log(`Shaked it.`);
    }
  }
  if (!isShaking) {
    console.log("No shake.");
    console.log(string);
  }
}
merlah(["astalastaavista baby", "sta", ""]);
//merlah(["##mtm!!mm.mm*mtm.#", "mtm", ""]);
