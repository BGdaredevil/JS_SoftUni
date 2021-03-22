function wordsTracker(input) {
  let output = "";
  let toFind = input
    .shift()
    .split(" ")
    .reduce((acc, el) => {
      acc[el] = 0;
      return acc;
    }, {});
  input.map((el) => {
    if (toFind.hasOwnProperty(el)) {
      toFind[el] += 1;
    }
  });
  Object.entries(toFind)
    .sort((a, b) => b[1] - a[1])
    .forEach((el) => {
      output += `${el[0]} - ${el[1]}\n`;
    });
  return output;
}

function oddOcc(input) {
  let output = "";
  input = input.toLowerCase().split(" ");
  let result = new Map();
  input.map((el) => {
    if (result.has(el)) {
      result.set(el, result.get(el) + 1);
    } else {
      result.set(el, 1);
    }
  });
  Array.from(result)
    .filter((el) => (el[1] % 2 === 1 ? true : false))
    .forEach((el) => (output += ` ${el[0]}`));
  return output;
}

function valet(input) {
  let output = "";
  const parking = {
    lot: new Map(),
    IN: function (car) {
      parking.lot.set(car);
    },
    OUT: function (car) {
      parking.lot.delete(car);
    },
  };
  input.map((el) => {
    let [dir, car] = el.split(", ");
    parking[dir](car);
  });

  if (Array.from(parking.lot).length > 0) {
    Array.from(parking.lot)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach((el) => {
        output += `${el[0]}\n`;
      });
  } else {
    output = `Parking Lot is Empty`;
  }
  return output;
}

function party(input) {
  let output = "";
  let isStarted = false;
  const partyList = {
    listVip: [],
    listRegular: [],
    guestCount: 0,
    invite: function (pers) {
      partyList.guestCount++;
      if (isNaN(pers[0])) {
        partyList.listRegular.push(pers);
      } else {
        partyList.listVip.push(pers);
      }
    },
    visited: function (pers) {
      partyList.guestCount--;
      if (isNaN(pers[0])) {
        partyList.listRegular.splice(partyList.listRegular.indexOf(pers), 1);
      } else {
        partyList.listVip.splice(partyList.listVip.indexOf(pers), 1);
      }
    },
  };

  input.map((el) => {
    if (el === "PARTY") {
      isStarted = true;
    } else if (isStarted === false) {
      partyList.invite(el);
    } else if (isStarted === true) {
      partyList.visited(el);
    }
  });
  output += `${partyList.guestCount}\n`;
  output += partyList.listVip.join("\n");
  output += "\n";
  output += partyList.listRegular.join("\n");
  return output;
}

function cardGaming(input) {
  let output = "";
  function person(lala) {
    let [name, cardList] = lala;
    let cards = new Set(cardList);
    let totalPoints = getPoints(cards);
    return { name, totalPoints };
  }

  function getPoints(info) {
    return Array.from(info).reduce((acc, el) => {
      let first = 0;
      let second = 0;
      el = el.split("");
      switch (el.length) {
        case 2:
          switch (el[0]) {
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              first = Number(el[0]);
              break;
            case "J":
              first = 11;
              break;
            case "Q":
              first = 12;
              break;
            case "K":
              first = 13;
              break;
            case "A":
              first = 14;
              break;
          }
          switch (el[1]) {
            case "S":
              second = 4;
              break;
            case "H":
              second = 3;
              break;
            case "D":
              second = 2;
              break;
            case "C":
              second = 1;
              break;
          }
          break;
        case 3:
          first = 10;
          switch (el[2]) {
            case "S":
              second = 4;
              break;
            case "H":
              second = 3;
              break;
            case "D":
              second = 2;
              break;
            case "C":
              second = 1;
              break;
          }
          break;
      }
      acc += first * second;
      return acc;
    }, 0);
  }

  input = input.reduce((acc, el) => {
    let [name, cardList] = el.split(": ");
    let cards = cardList.split(", ");
    if (!acc.hasOwnProperty(name)) {
      acc[name] = cards;
    } else {
      acc[name].push(...cards);
    }
    return acc;
  }, {});

  let list = {};

  Object.entries(input).map((gamer) => {
    let player = person(gamer);
    if (!list.hasOwnProperty(player.name)) {
      list[player.name] = player.totalPoints;
    } else {
      list[player.name] += player.totalPoints;
    }
  });

  Object.entries(list).forEach((entry) => {
    output += `${entry[0]}: ${entry[1]}\n`;
  });

  return output;
}

function travelTime(input) {
  let row = "";
  let list = input.reduce((acc, line) => {
    let [country, town, cost] = line.split(" > ");
    cost = Number(cost);
    if (!acc.hasOwnProperty(country)) {
      acc[country] = {};
    }

    if (!acc[country].hasOwnProperty(town)) {
      acc[country][town] = cost;
    } else if (acc[country][town] > cost) {
      acc[country][town] = cost;
    }

    return acc;
  }, {});
  Object.entries(list)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((el) => {
      row += `${el[0]} -> `;
      Object.entries(el[1])
        .sort((a, b) => a[1] - b[1])
        .forEach((item) => (row += `${item[0]} -> ${item[1]} `));
      row += "\n";
    });
  return row;
}

function companyUsers(input) {
  let result = "";
  let list = input.reduce((acc, line) => {
    let [company, person] = line.split(" -> ");
    if (!acc.hasOwnProperty(company)) {
      acc[company] = [];
    }
    if (!acc[company].includes(person)) {
      acc[company].push(person);
    }

    return acc;
  }, {});
  Object.entries(list)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((el) => {
      result += `${el[0]}\n-- ${el[1].join("\n-- ")}\n`;
    });
  return result;
}

function minerTask(input) {
  let row = "";
  let mined = new Map();

  for (let i = 0; i < input.length; i++) {
    let item = input[i++];
    let qty = input[i];
    if (mined.has(item)) {
      let temp = mined.get(item);
      mined.set(item, (temp += Number(qty)));
    } else {
      mined.set(item, Number(qty));
    }
  }
  Array.from(mined).forEach((el) => (row += `${el[0]} -> ${el[1]}\n`));
  return row;
}

function arenaTier(input) {
  let row = "";
  let gladiators = {};
  const addGladiator = (gladiator, tech, skill) => {
    skill = Number(skill);
    if (!gladiators.hasOwnProperty(gladiator)) {
      gladiators[gladiator] = {};
      gladiators[gladiator][tech] = skill;
      gladiators[gladiator].totalSkill = skill;
    } else if (!gladiators[gladiator].hasOwnProperty(tech)) {
      gladiators[gladiator][tech] = skill;
      gladiators[gladiator].totalSkill += skill;
    } else if (gladiators[gladiator][tech] < skill) {
      gladiators[gladiator].totalSkill -= gladiators[gladiator][tech];
      gladiators[gladiator][tech] = skill;
      gladiators[gladiator].totalSkill += skill;
    }
  };
  const fight = (first, second) => {
    if (gladiators.hasOwnProperty(first) && gladiators.hasOwnProperty(second)) {
      let haveCommon = false;
      Object.keys(gladiators[first]).forEach((key) => {
        if (
          Object.keys(gladiators[second]).includes(key) &&
          key !== "totalSkill"
        ) {
          haveCommon = true;
          return;
        }
      });
      if (haveCommon) {
        if (gladiators[first].totalSkill > gladiators[second].totalSkill) {
          return second;
        } else if (
          gladiators[first].totalSkill < gladiators[second].totalSkill
        ) {
          return first;
        }
      }
    }
  };

  input.map((line) => {
    if (line.includes(" -> ")) {
      addGladiator(...line.split(" -> "));
    } else if (line.includes(" vs ")) {
      let looser = fight(...line.split(" vs "));
      if (looser) {
        delete gladiators[looser];
      }
    } else if (line === "Ave Cesar") {
      Object.entries(gladiators)
        .sort(
          (a, b) =>
            b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0])
        )
        .forEach((glad) => {
          row += `${glad[0]}: ${glad[1].totalSkill} skill\n`;
          Object.entries(glad[1])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach((el) => {
              if (el[0] !== "totalSkill") {
                row += `- ${el[0]} <!> ${el[1]}\n`;
              }
            });
        });
    }
  });

  return row;
}

function pirates(input) {
  let info = {
    sailed: false,
    cityList: {},
    addToList: (loc, pop, wealth) => {
      if (!info.cityList.hasOwnProperty(loc)) {
        info.cityList[loc] = {
          name: loc,
          pop: Number(pop),
          wealth: Number(wealth),
        };
      } else {
        info.cityList[loc].pop += Number(pop);
        info.cityList[loc].wealth += Number(wealth);
      }
    },
    Plunder: (town, people, gold) => {
      if (info.cityList.hasOwnProperty(town)) {
        info.cityList[town].wealth -= Number(gold);
        info.cityList[town].pop -= Number(people);
        output += `${town} plundered! ${gold} gold stolen, ${people} citizens killed.\n`;
        if (info.cityList[town].wealth === 0 || info.cityList[town].pop === 0) {
          output += `${info.cityList[town].name} has been wiped off the map!\n`;
          delete info.cityList[town];
        }
      }
    },
    Prosper: (town, gold) => {
      if (info.cityList.hasOwnProperty(town)) {
        gold = Number(gold);
        if (gold < 0) {
          output += "Gold added cannot be a negative number!\n";
        } else {
          info.cityList[town].wealth += Number(gold);
          output += `${gold} gold added to the city treasury. ${town} now has ${info.cityList[town].wealth} gold.\n`;
        }
      }
    },
    End: () => {
      info.cityList = Object.values(info.cityList);
      if (info.cityList.length > 0) {
        output += `Ahoy, Captain! There are ${info.cityList.length} wealthy settlements to go to:\n`;
        info.cityList
          .sort((a, b) => a.name.localeCompare(b.name))
          .sort((a, b) => b.wealth - a.wealth)
          .forEach((place) => {
            output += `${place.name} -> Population: ${place.pop} citizens, Gold: ${place.wealth} kg\n`;
          });
      } else {
        output += `Ahoy, Captain! All targets have been plundered and destroyed!`;
      }
    },
  };

  let output = "";

  for (let line of input) {
    if (line === "Sail") {
      info.sailed = true;
    } else if (info.sailed === false) {
      info.addToList(...line.split("||"));
    } else {
      let [order, ...rest] = line.split("=>");
      info[order](...rest);
    }
  }
  return output;
}

function grinding(input) {
  let legendaries = {
    shards: { cost: 250, item: "Shadowmourne" },
    fragments: { cost: 250, item: "Valanyr" },
    motes: { cost: 250, item: "Dragonwrath" },
  };
  let row = "";
  let isEnd = false;
  input
    .toLowerCase()
    .split(/(?<=[a-z])\s/g)
    .reduce(
      (acc, el) => {
        let [qty, drop] = el.split(" ");
        qty = Number(qty);
        if (!isEnd) {
          switch (drop) {
            case "shards":
            case "fragments":
            case "motes":
              acc.loot.hasOwnProperty(drop)
                ? (acc.loot[drop] += qty)
                : (acc.loot[drop] = qty);

              if (acc.loot[drop] >= legendaries[drop].cost) {
                isEnd = true;
                acc.loot[drop] -= legendaries[drop].cost;
                row += `${legendaries[drop].item} obtained!\n`;
                row += Object.entries(acc.loot)
                  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                  .reduce((str, el) => (str += `${el[0]}: ${el[1]}\n`), "");
                row += Object.entries(acc.junk)
                  .sort((a, b) => a[0].localeCompare(b[0]))
                  .reduce((str, el) => (str += `${el[0]}: ${el[1]}\n`), "");
              }
              break;

            default:
              acc.junk.hasOwnProperty(drop)
                ? (acc.junk[drop] += qty)
                : (acc.junk[drop] = qty);
              break;
          }
        }

        return acc;
      },
      { loot: { shards: 0, fragments: 0, motes: 0 }, junk: {} }
    );

  return row;
}

console.log(
  grinding(
    "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
  )
);
