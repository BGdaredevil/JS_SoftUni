function imitation(input) {
  let message = input.shift();
  let moving = (info, num) => {
    // let toMove = info.slice(0, Number(num));
    // info = info.replace(toMove, "");
    // info += toMove;
    let isValid = Number(num) >= 0 && Number(num) <= info.length;
    if (isValid) {
      info = info.split("");
      for (let i = 0; i < num; i++) {
        info.push(info.shift());
      }
      info = info.join("");
    }
    return info;
  };
  let inserting = (info, loc, val) => {
    let isValid = Number(loc) >= 0 && Number(loc) <= info.length;
    if (isValid) {
      let start = info.slice(0, Number(loc));
      let end = info.slice(Number(loc));
      info = start + val + end;
    }
    return info;
  };
  let changingAll = (info, target, replacement) => {
    while (info.includes(target)) {
      info = info.replace(target, replacement);
    }
    return info;
  };
  for (let line of input) {
    if (line === "Decode") {
      console.log(`The decrypted message is: ${message}`);
      break;
    } else {
      let [key, item, value] = line.split("|");
      switch (key) {
        case "Move":
          message = moving(message, item);
          break;
        case "Insert":
          message = inserting(message, item, value);
          break;
        case "ChangeAll":
          message = changingAll(message, item, value);
          break;
      }
    }
  }
}

function opelAstra(input) {
  input = input.shift();
  let test = /(?<char>\||#)(?<food>[A-Za-z ]+)\k<char>(?<date>\d{2}\/\d{2}\/\d{2})\k<char>(?<calories>\d+)\k<char>/g;
  let totalCalories = 0;
  let dailyIntake = 2000;
  let row = "";
  while ((item = test.exec(input)) !== null) {
    row += `Item: ${item.groups.food}, Best before: ${item.groups.date}, Nutrition: ${item.groups.calories}\n`;
    totalCalories += Number(item.groups.calories);
  }
  console.log(
    `You have food to last you for: ${Math.floor(
      totalCalories / dailyIntake
    )} days!`
  );
  console.log(row);
}

function pianist(input) {
  let list = new Map();
  let rows = Number(input.shift());
  while (rows > 0) {
    let [piece, composer, key] = input.shift().split("|");
    list.set(piece, { name: piece, by: composer, key: key });
    rows--;
  }
  for (let line of input) {
    line = line.split("|");
    let comand = line.shift();
    if (comand === "Stop") {
      break;
    }
    switch (comand) {
      case "Add":
        let [piece, composer, key] = line;
        if (list.has(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          list.set(piece, { name: piece, by: composer, key: key });
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        }
        break;
      case "Remove":
        let [piece1] = line;
        if (list.has(piece1)) {
          list.delete(piece1);
          console.log(`Successfully removed ${piece1}!`);
        } else {
          console.log(
            `Invalid operation! ${piece1} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        let [piece2, newKey] = line;
        if (!list.has(piece2)) {
          console.log(
            `Invalid operation! ${piece2} does not exist in the collection.`
          );
        } else {
          let temp = list.get(piece2);
          temp.key = newKey;
          list.set(piece2, temp);
          console.log(`Changed the key of ${piece2} to ${newKey}!`);
        }
        break;
    }
  }
  [...list.values()]
    .sort((a, b) => a.by.localeCompare(b.by))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((item) => {
      console.log(`${item.name} -> Composer: ${item.by}, Key: ${item.key}`);
    });
}
pianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
