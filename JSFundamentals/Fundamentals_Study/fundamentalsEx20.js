function wordsTracker(input) {
  let wordsToTrack = input.shift().split(" ");
  let result = new Map();
  wordsToTrack.forEach((word) => {
    result.set(word, 0);
  });
  input.forEach((item) => {
    if (result.has(item)) {
      let newVal = result.get(item);
      result.set(item, (newVal += 1));
    }
  });
  let occurances = Array.from(result.entries());
  occurances.sort((a, b) => Number(b[1]) - Number(a[1]));
  occurances.forEach((occurance) => {
    console.log(`${occurance[0]} - ${occurance[1]}`);
  });
}

function oddApearance(input) {
  input = input.toLowerCase();
  input = input.split(" ");
  let result = new Map();
  input.forEach((word) => {
    let count = 1;
    if (result.has(word)) {
      count = result.get(word);
      result.set(word, (count += 1));
    } else {
      result.set(word, count);
    }
  });
  result = Array.from(result.entries());
  let output = [];
  result.forEach((res) => {
    if (res[1] % 2 === 1) {
      output.push(res[0]);
    }
  });
  console.log(output.join(" "));
}

function valetParking(input) {
  let parking = new Map();
  input.forEach((item) => {
    let [operation, carNo] = item.split(", ");
    switch (operation) {
      case "IN":
        parking.set(carNo);
        break;
      case "OUT":
        parking.delete(carNo);
        break;
    }
  });
  parking = Array.from(parking.keys()).sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  if (parking.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    parking.forEach((car) => console.log(car));
  }
}

function party(input) {
  let guestList = [];
  let arrivedList = [];
  let vipList = [];
  let regularList = [];
  let sorter = (x, y) => {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };
  let isStarted = false;
  input.forEach((item) => {
    if (item === "PARTY") {
      isStarted = true;
    } else {
      if (!isStarted) {
        guestList.push(item);
      } else {
        arrivedList.push(item);
      }
    }
  });
  arrivedList.forEach((visitor) => {
    guestList.splice(guestList.indexOf(visitor), 1);
  });

  console.log(guestList.length);
  for (let guest of guestList) {
    if (isNaN(guest[0])) {
      regularList.push(guest);
    } else {
      vipList.push(guest);
    }
  }
  //regularList.sort((a, b) => sorter(a, b));
  //vipList.sort((a, b) => sorter(a, b));
  vipList.forEach((vip) => console.log(vip));
  regularList.forEach((regular) => console.log(regular));
}

function cardGame(input) {
  let people = new Map();
  let pointsCalc = (arr) => {
    let cardsInfo = arr;
    let returnValue = 0;
    let itermediateValue = 0;
    cardsInfo.forEach((card) => {
      card = card.split("");
      let first = 0;
      let second = 0;
      switch (card[0]) {
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          first = Number(card[0]);
          break;
        case "1":
          first = 10;
          card.splice(1, 1);
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
      switch (card[1]) {
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
      itermediateValue = first * second;
      returnValue += itermediateValue;
    });
    return returnValue;
  };
  for (let line of input) {
    line = line.split(": ");
    let person = line[0];
    let personalCards = [];
    let cards = line[1].split(", ");
    if (people.has(person)) {
      personalCards = people.get(person);
      for (let i = 0; i < cards.length; i++) {
        let currCard = cards[i];
        if (
          personalCards.every((pCard) => {
            if (pCard !== currCard) {
              return true;
            } else {
              return false;
            }
          })
        ) {
          personalCards.push(currCard);
        }
      }
      people.set(person, personalCards);
    } else {
      for (let i = 0; i < cards.length; i++) {
        let currCard = cards[i];
        if (
          personalCards.every((pCard) => {
            if (pCard !== currCard) {
              return true;
            } else {
              return false;
            }
          })
        ) {
          personalCards.push(currCard);
        }
      }
      people.set(person, personalCards);
    }
  }

  let peopleNames = Array.from(people.keys());
  peopleNames.forEach((person) => {
    console.log(`${person}: ${pointsCalc(people.get(person))}`);
  });
}

function travelTime(input) {
  let countries = {};
  for (const line of input) {
    let [country, city, price] = line.split(" > ");
    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
    }
    if (!countries[country].hasOwnProperty(city)) {
      countries[country][city] = price;
    } else {
      if (countries[country][city] > price) {
        countries[country][city] = price;
      }
    }
  }
  let keys = Object.keys(countries).sort();
  keys.forEach((country) => {
    let row = "";
    let sortedCities = Object.keys(countries[country]).sort((a, b) => {
      return Number(countries[country][a]) - Number(countries[country][b]);
    });
    row += `${country} -> `;
    sortedCities.forEach((item) => {
      row += `${item} -> ${countries[country][item]} `;
    });
    console.log(row);
  });
}

function users(input) {
  let companies = {};
  for (const line of input) {
    let [company, employee] = line.split(" -> ");
    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }
    if (
      companies[company].every((el) => {
        if (el !== employee) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      companies[company].push(employee);
    }
  }
  let keys = Object.keys(companies).sort();
  keys.forEach((company) => {
    console.log(company);
    let ids = Object.keys(companies[company]);
    ids.forEach((id) => {
      console.log(`-- ${companies[company][id]}`);
    });
  });
}

function aMinorTask(input) {
  let resources = new Map();
  for (let i = 0; i < input.length; i++) {
    let item = input[i++];
    let quantity = Number(input[i]);
    let temp = 0;
    if (resources.has(item)) {
      temp = resources.get(item);
      temp += quantity;
      resources.set(item, temp);
    } else {
      resources.set(item, quantity);
    }
  }
  Array.from(resources.keys()).forEach((key) => {
    console.log(`${key} -> ${resources.get(key)}`);
  });
}

function arenaTierOriginal(input) {
  let gladiators = {};
  class Gladiator {
    constructor(name, tehnique, skill) {
      let temp = {};
      temp[tehnique] = skill;
      this.name = name;
      this.tehniques = {};
      Object.assign(this.tehniques, temp);
      this.calcTotalSkill(this);
    }

    calcTotalSkill(fighter) {
      let temp = Object.values(this.tehniques);
      let totalLevel = 0;
      temp.forEach((el) => {
        totalLevel += Number(el);
      });
      this.totalSkill = totalLevel;
    }

    addTehnique(newTech, level) {
      let current = this.tehniques;
      if (!current.hasOwnProperty(newTech)) {
        current[newTech] = level;
      }
      this.tehniques = current;
      this.calcTotalSkill(this);
    }

    increaseSkill(tech, level) {
      let current = this.tehniques;
      if (current.hasOwnProperty(tech)) {
        if (Number(current[tech]) < Number(level)) {
          current[tech] = level;
        }
      }
      this.tehniques = current;
      this.calcTotalSkill(this);
    }

    fight(gladiator2) {
      let g1Tech = Object.entries(Object.values(this)[1]);
      let g2Tech = Object.entries(Object.values(gladiator2)[1]);
      let commonIsFound = false;
      for (let i = 0; i < g1Tech.length; i++) {
        if (
          g2Tech.every((el) => {
            if (el[0] !== g1Tech[i][0]) {
              return false;
            } else {
              return true;
            }
          })
        ) {
          commonIsFound = true;
          if (commonIsFound) {
            if (Number(this.totalSkill) > Number(gladiator2.totalSkill)) {
              //del gladiator 2
              delete gladiators[gladiator2.name];
            } else {
              //del gladiator 1
              delete gladiators[this.name];
            }
          }
          break;
        }
      }
    }
  }

  let isEnd;
  for (const line of input) {
    let info = line.split(" -> ");
    if (info.length === 1) {
      if (info[0] === "Ave Cesar") {
        isEnd = true;
        break;
      } else {
        let [first, second] = info[0].split(" vs ");
        let g1 = gladiators[first];
        let g2 = gladiators[second];
        if (g1 !== undefined && g2 !== undefined) {
          gladiators[first].fight(g2);
        }
      }
    } else {
      isEnd = false;
      let [nam, tech, level] = line.split(" -> ");
      if (!gladiators.hasOwnProperty(nam)) {
        gladiators[nam] = new Gladiator(nam, tech, level);
      } else {
        if (!gladiators[nam].tehniques.hasOwnProperty(tech)) {
          gladiators[nam].addTehnique(tech, level);
        } else {
          gladiators[nam].increaseSkill(tech, level);
        }
      }
    }
  }

  if (isEnd) {
    Object.values(gladiators)
      .sort()
      .sort((a, b) => b.totalSkill - a.totalSkill)
      .forEach((value) => {
        console.log(`${value.name}: ${value.totalSkill} skill`);
        Object.entries(value.tehniques)
          .sort()
          .sort((a, b) => b[1] - a[1])
          .forEach((el) => console.log(`- ${el[0]} <!> ${el[1]}`));
      });
  }
}

function arenaTier(input) {
  let arena = {};
  let fightKey = " vs ";
  let skillKey = " -> ";
  for (const line of input) {
    if (line === "Ave Cesar") {
      break;
    } else if (line.includes(skillKey)) {
      let [gName, gSkill, gSkillLevel] = line.split(skillKey);
      gSkillLevel = Number(gSkillLevel);
      if (!arena[gName]) {
        arena[gName] = {};
        arena[gName][gSkill] = gSkillLevel;
        arena[gName]["totalSkill"] = 0;
        arena[gName]["totalSkill"] += gSkillLevel;
      } else {
        if (!arena[gName][gSkill]) {
          arena[gName][gSkill] = gSkillLevel;
          arena[gName]["totalSkill"] += gSkillLevel;
        } else {
          if (arena[gName][gSkill] < gSkillLevel) {
            let temp = gSkillLevel - arena[gName][gSkill];
            arena[gName][gSkill] = gSkillLevel;
            arena[gName]["totalSkill"] += temp;
          }
        }
      }
    } else if (line.includes(fightKey)) {
      let [gFirst, gSecond] = line.split(fightKey);
      if (arena.hasOwnProperty(gFirst) && arena.hasOwnProperty(gSecond)) {
        let isFinished = false;
        for (let skillsFirst of Object.entries(arena[gFirst])) {
          for (let skillsSecond of Object.entries(arena[gSecond])) {
            if (
              skillsFirst[0] === skillsSecond[0] &&
              skillsFirst[0] !== "totalSkill" &&
              skillsSecond[0] !== "totalSkill"
            ) {
              if (arena[gSecond]["totalSkill"] > arena[gFirst]["totalSkill"]) {
                delete arena[gFirst];
                isFinished = true;
                break;
              } else if (
                arena[gSecond]["totalSkill"] < arena[gFirst]["totalSkill"]
              ) {
                delete arena[gSecond];
                isFinished = true;
                break;
              }
            }
          }
          if (isFinished) {
            break;
          }
        }
      }
    }
  }
  let ivan = Object.entries(arena);
  ivan.sort();
  ivan.sort((a, b) => b[1].totalSkill - a[1].totalSkill);
  ivan.forEach((value) => {
    console.log(`${value[0]}: ${value[1].totalSkill} skill`);
    let reasons = Object.entries(value[1]);
    reasons.sort();
    reasons.pop();
    reasons.sort((a, b) => b[1] - a[1]);
    reasons.forEach((el) => console.log(`- ${el[0]} <!> ${el[1]}`));
  });
}

function theGrind(input) {
  input = input.toLowerCase().split(" ");
  let neededloots = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };
  let junkloots = {};
  let shopPrize = {
    shards: {
      name: "Shadowmourne",
      price: 250,
      curency: "shards",
    },
    fragments: {
      name: "Valanyr",
      price: 250,
      curency: "fragments",
    },
    motes: {
      name: "Dragonwrath",
      price: 250,
      curency: "motes",
    },
  };
  for (let i = 0; i < input.length; i++) {
    let quantity = Number(input[i++]);
    let item = input[i];
    if (neededloots.hasOwnProperty(item)) {
      neededloots[item] += quantity;
      if (neededloots[item] >= 250) {
        //sort out the prize
        neededloots[item] -= 250;
        console.log(`${shopPrize[item].name} obtained!`);
        Object.entries(neededloots)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .sort((a, b) => b[1] - a[1])
          .forEach((thing) => console.log(`${thing[0]}: ${thing[1]}`));
        Object.entries(junkloots)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .forEach((thing) => console.log(`${thing[0]}: ${thing[1]}`));
        break;
      }
    } else if (!junkloots[item]) {
      junkloots[item] = quantity;
    } else {
      junkloots[item] += quantity;
    }
  }
}

theGrind("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
