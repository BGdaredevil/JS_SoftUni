function matchName(input) {
  let pattern = /\b[A-Z]{1}[a-z]+ {1}[A-Z]{1}[a-z]+\b/gm;
  let result = [];
  while ((name = pattern.exec(input)) !== null) {
    result.push(name[0]);
  }
  console.log(result.join(` `));
}

function matchPhone(input) {
  let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/gm;
  let result = [];
  while ((phone = pattern.exec(input)) !== null) {
    result.push(phone[0]);
  }
  console.log(result.join(`, `));
}

function matchDate(input) {
  let pattern = /\b(?<day>\d{2})(?<separ>.|-|\/)(?<month>[A-Z]{1}[a-z]{2})\k<separ>(?<year>\d{4})\b/gm;
  let result = [];
  input = input.shift();
  while ((valid = pattern.exec(input)) !== null) {
    console.log(
      `Day: ${valid.groups.day}, Month: ${valid.groups.month}, Year: ${valid.groups.year}`
    );
  }
}

function removeOccurances(...input) {
  let [word, text] = input;
  //console.log(word);
  //console.log(text);
  while (text.includes(word)) {
    text = text.replace(word, "");
  }
  console.log(text);
}
removeOccurances("ice", "kicegiciceeb");
