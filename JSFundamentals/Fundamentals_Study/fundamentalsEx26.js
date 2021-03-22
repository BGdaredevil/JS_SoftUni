function furniture(input) {
  let order = /^>{2}(?<item>.*)<{2}(?<price>\d+|\d+.\d+)!(?<quantity>\d+)\b/gm;
  let items = ["Bought furniture:"];
  let total = 0;
  for (const line of input) {
    if (line.match(order)) {
      let orderInfo = order.exec(line);
      items.push(orderInfo.groups.item);
      total +=
        Number(orderInfo.groups.price) * Number(orderInfo.groups.quantity);
    } else if (line === "Purchase") {
      break;
    }
  }
  console.log(items.join(`\n`));
  console.log(`Total money spend: ${total.toFixed(2)}`);
}

function race(input) {
  let markNumbers = /[^0-9]+/gm;
  let markLetters = /[^a-z]+/gim;
  let racersList = new Map();
  let info = input.shift().split(",");
  for (let att of info) {
    att = att.trim();
    racersList.set(att, 0);
  }
  for (let line of input) {
    let name = line.split(markLetters).join("");
    let numbers = line.split(markNumbers).join("");
    if (racersList.has(name)) {
      let temp = racersList.get(name);
      for (const num of numbers) {
        temp += Number(num);
      }
      racersList.set(name, temp);
    }
  }
  let temp = [...racersList.entries()].sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${temp[0][0]}`);
  console.log(`2nd place: ${temp[1][0]}`);
  console.log(`3rd place: ${temp[2][0]}`);
}

function bar(input) {
  let test = /(?:%{1})(?<name>[A-Z]{1}[a-z]+)(?:%{1}.*<{1})(?<item>\w+)(?:>{1}.*\|)(?<quantity>\d+)(?:\|{1})(?:[^0-9]*)(?<itemPrice>\d+.\d+(?=\$)|\d{2}(?=\$))/gm;
  let total = 0;
  for (let line of input) {
    if (line === "end of shift") {
      console.log(`Total income: ${total.toFixed(2)}`);
      break;
    } else if (line.match(test) !== null) {
      line = test.exec(line);
      let med = Number(line.groups.itemPrice) * Number(line.groups.quantity);
      total += med;
      console.log(
        `${line.groups.name}: ${line.groups.item} - ${med.toFixed(2)}`
      );
    }
  }
}

function starEnigma(input) {
  let matrix = ["s", "t", "a", "r"];
  let attackedPlanets = [];
  let destroyedPlanets = [];
  let messageCount = Number(input.shift());
  while (messageCount > 0) {
    const line = input.shift();
    //let test = /[^@]*@(?<planet>[A-Z][a-z]+)[^:]*:(?<population>\d*)[^!]*!(?<type>A|D)![^-]*-*(?:->)(?<soldierCount>\d+).*\b/gm;
    let test = /@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<type>[A|D])![^@:!\->]*\->(?<soldierCount>\d+)/g;
    let decripted = "";
    let temp = line.toLowerCase();
    let key = 0;
    for (const ch of temp) {
      for (const k of matrix) {
        if (ch === k) {
          key++;
        }
      }
    }
    for (const ch of line) {
      decripted += String.fromCharCode(ch.charCodeAt(0) - key);
    }
    if (test.exec(decripted) === null) {
      messageCount--;
      continue;
    }
    test.lastIndex = 0;
    let info = test.exec(decripted).groups;
    if (info.type === "A") {
      attackedPlanets.push(info.planet);
    } else {
      destroyedPlanets.push(info.planet);
    }
    messageCount--;
  }

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  for (const pl of attackedPlanets.sort()) {
    console.log(`-> ${pl}`);
  }
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  for (const dpl of destroyedPlanets.sort()) {
    console.log(`-> ${dpl}`);
  }
}

function nether(input) {
  let demonList = [];
  for (const line of input) {
    let list = line.split(/\s*,\s*|,\s*/gm).map((el) => el.trim());
    for (const demon of list) {
      if (demon === "") {
        continue;
      }
      //let healthTest = /[\d*+./-]+/g;
      let healthTest = /[\d*+./-]+/g;
      //let dmgTest = /[+*/-]*\d+\.\d+|[+*/-]*\d+|[*/]/g;
      let dmgTest = /[+-]?\d+\.\d+|[+-]?\d+|[*/]/gm;
      let health = 0;
      let baseDmg = 0;
      demon
        .trim()
        .split(healthTest)
        .join("")
        .split("")
        .forEach((el) => {
          health += el.charCodeAt(0);
        });
      let operators = [];
      while ((ghjk = dmgTest.exec(demon.trim())) !== null) {
        operators.push(ghjk);
      }

      operators.forEach((op) => {
        if (!isNaN(op[0])) {
          baseDmg += Number(op[0]);
        }
      });
      operators.forEach((op) => {
        if (isNaN(op[0])) {
          switch (op[0]) {
            case "*":
              baseDmg *= 2;
              break;
            case "/":
              baseDmg /= 2;
              break;
          }
        }
      });

      demonList.push({
        name: demon.trim(),
        healthP: health,
        damage: baseDmg.toFixed(2),
      });
    }
  }
  demonList
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((player) => {
      console.log(
        `${player.name} - ${player.healthP} health, ${player.damage} damage`
      );
    });
}

function email(input) {
  let emailRegEx = /\s+[a-z\d]+[\-._]?[a-z\d]+@[a-z\d]+[\-._]?[a-z\d]*\.{1}[a-z\d]+[\-._]?[a-z\d]+/gm;
  let emailList = [];
  for (const line of input) {
    if (line === "end") {
      break;
    } else {
      let temp = [];
      while ((exper = emailRegEx.exec(line)) !== null) {
        temp.push(exper[0]);
      }
      temp.forEach((el) => emailList.push(el));
    }
  }
  emailList.forEach((el) => console.log(el));
}
