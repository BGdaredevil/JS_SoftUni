function activate(input) {
  let result = input.shift();
  let line = input.shift();
  let row = "";
  let operations = {
    Contains(str, substr) {
      str.includes(substr)
        ? (row += `${str} contains ${substr}\n`)
        : (row += `Substring not found!\n`);
      return str;
    },
    Flip(str, toCase, start, end) {
      start = Number(start);
      end = Number(end);
      let mid = str.substr(start, end - start);
      if (toCase === "Upper") {
        mid = mid.toUpperCase();
      } else {
        mid = mid.toLowerCase();
      }
      mid = `${str.slice(0, start)}${mid}${str.slice(end, str.length)}`;
      row += `${mid}\n`;
      return mid;
    },
    Slice(str, start, end) {
      let line = `${str.slice(0, Number(start))}${str.slice(
        Number(end),
        str.length
      )}`;
      row += line;
      row += "\n";
      return line;
    },
  };
  while (line !== "Generate") {
    let [order, ...rest] = line.split(">>>");
    result = operations[order](result, ...rest);
    line = input.shift();
  }
  return (row += `Your activation key is: ${result}`);
}

function emji(input) {
  input = input.shift();
  let row = "";
  let cool = [];
  let pattern = /(?<leading>::|\*\*)(?<word>[A-Z]{1}[a-z]{2,})\k<leading>/g;
  let emoteCount = 0;
  let coolLevel = input
    .match(/\d/g)
    .map(Number)
    .reduce((acc, el) => (acc *= el), 1);
  row += `Cool threshold: ${coolLevel}\n`;
  while ((info = pattern.exec(input)) !== null) {
    emoteCount++;
    let temp = info.groups.word
      .split("")
      .reduce((acc, el) => (acc += el.charCodeAt(0)), 0);
    if (temp > coolLevel) {
      cool.push(info[0]);
    }
  }
  row += `${emoteCount} emojis found in the text. The cool ones are:\n`;
  row += cool.join("\n");
  return row;
}

function pirates(input) {
  let targets = {};
  let events = {
    row: "",
    Plunder(city, people, gold) {
      targets[city].population -= Number(people);
      targets[city].gold -= Number(gold);
      events.row += `${city} plundered! ${gold} gold stolen, ${people} citizens killed.\n`;
      if (targets[city].population <= 0 || targets[city].gold <= 0) {
        events.row += `${city} has been wiped off the map!\n`;
        delete targets[city];
      }
    },
    Prosper(city, gold) {
      gold = Number(gold);
      if (gold >= 0) {
        targets[city].gold += Number(gold);
        events.row += `${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.\n`;
      } else {
        events.row += `Gold added cannot be a negative number!\n`;
      }
    },
  };
  let line = input.shift();
  while (line !== "Sail") {
    let [city, population, gold] = line.split("||");
    if (!targets.hasOwnProperty(city)) {
      targets[city] = {
        city,
        population: Number(population),
        gold: Number(gold),
      };
    } else {
      targets[city].population += Number(population);
      targets[city].gold += Number(gold);
    }
    line = input.shift();
  }
  line = input.shift();
  while (line !== "End") {
    let [order, ...rest] = line.split("=>");
    events[order](...rest);
    line = input.shift();
  }

  targets = Object.values(targets);
  if (targets.length === 0) {
    events.row += `Ahoy, Captain! All targets have been plundered and destroyed!\n`;
  } else {
    events.row += `Ahoy, Captain! There are ${targets.length} wealthy settlements to go to:\n`;
    targets
      .sort((a, b) => b.gold - a.gold || a.city.localeCompare(b.city))
      .forEach((el) => {
        events.row += `${el.city} -> Population: ${el.population} citizens, Gold: ${el.gold} kg\n`;
      });
  }
  return events.row;
}
console.log(
  pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End",
  ])
);

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
