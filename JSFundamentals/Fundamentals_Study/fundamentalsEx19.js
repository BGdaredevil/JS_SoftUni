function phoneBook(input) {
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ");
  }
  let map = new Map(input);
  for (const line of map) {
    console.log(`${line[0]} -> ${line[1]}`);
  }
}

function storage(input) {
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ");
  }
  let map = new Map();

  input.forEach((item) => {
    if (map.has(item[0])) {
      let amount = Number(map.get(item[0]));
      amount += Number(item[1]);
      map.set(item[0], amount);
    } else {
      map.set(item[0], Number(item[1]));
    }
  });
  for (let [thing, amount] of map) {
    console.log(`${thing} -> ${amount}`);
  }
}

function schoolGrades(input) {
  let students = new Map();
  for (let string of input) {
    let grades = string.split(" ");
    let name = grades.shift();
    grades = grades.map(Number);
    if (!students.has(name)) {
      students.set(name, grades);
    } else {
      let currGrades = students.get(name).concat(grades);
      students.set(name, currGrades);
    }
  }

  let sortedStudents = Array.from(students).sort((a, b) => {
    let sumA = 0;
    for (let i = 0; i < a[1].length; i++) {
      let num = a[1][i];
      sumA += num;
    }
    sumA = sumA / a[1].length;
    let sumB = 0;
    for (let i = 0; i < b[1].length; i++) {
      let num = b[1][i];
      sumB += num;
    }
    sumB = sumB / b[1].length;
    return sumA - sumB;
  });

  for (let row of sortedStudents) {
    console.log(`${row[0]}: ${row[1].join(", ")}`);
  }
}

function words(input) {
  let wordList = new Map();
  let count = 1;
  for (let word of input) {
    if (wordList.has(word)) {
      count = wordList.get(word);
      wordList.set(word, ++count);
    } else {
      wordList.set(word, 1);
    }
  }
  let sorted = Array.from(wordList).sort((a, b) => b[1] - a[1]);
  sorted.forEach((el) => console.log(`${el[0]} -> ${el[1]} times`));
}

function neighbourhoods(input) {
  let places = input.shift().split(", ");
  let hoods = new Map();
  places.forEach((place) => hoods.set(place, []));
  input.forEach((item) => {
    item = item.split(" - ");
    if (hoods.has(item[0])) {
      let newValue = hoods.get(item[0]);
      newValue.push(item[1]);
      hoods.set(item[0], newValue);
    }
  });
  let sorted = Array.from(hoods.entries()).sort(
    (a, b) => b[1].length - a[1].length
  );
  sorted.forEach((sort) => {
    console.log(`${sort[0]}: ${sort[1].length}`);
    sort[1].forEach((tenant) => {
      console.log(`--${tenant}`);
    });
  });
}

neighbourhoods([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
