function printChar(input) {
  for (const ch of input) {
    console.log(ch);
  }
}

function subString() {
  let input = arguments;
  console.log(`${input[0].slice(input[1], input[1] + input[2])}`);
}

function media(...arg) {
  let [text, word] = arg;
  let result = text.replace(word, "*".repeat(word.length));

  while (result.includes(word)) {
    result = result.replace(word, "*".repeat(word.length));
  }

  console.log(result);
}

function strCount(...arg) {
  let [sentence, word] = arg;
  let count = 0;
  sentence.split(" ").forEach((statement) => {
    if (statement === word) {
      count++;
    }
  });

  console.log(count);
}

function name(params) {
  params = params.split(" ").forEach((thing) => console.log(thing));
}
