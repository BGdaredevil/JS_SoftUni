function activate(input) {
  let rawKey = input.shift();
  const contain = (str, arr) => {
    let [subStr] = arr;
    if (str.includes(subStr)) {
      console.log(`${str} contains ${subStr}`);
    } else {
      console.log("Substring not found!");
    }
    return str;
  };
  const flipFlop = (str, arr) => {
    let [toCase, start, end] = arr;
    start = Number(start);
    end = Number(end);
    let testificate = str.slice(start, end);
    switch (toCase) {
      case "Upper":
        testificate = testificate.toUpperCase();
        break;
      case "Lower":
        testificate = testificate.toLowerCase();
        break;
    }
    console.log(str.slice(0, start) + testificate + str.slice(end));
    return str.slice(0, start) + testificate + str.slice(end);
  };
  const slicer = (str, arr) => {
    let [start, end] = arr.map((el) => Number(el));
    let result = str.slice(0, start) + str.slice(end);
    console.log(result);
    return result;
  };
  for (const line of input) {
    let [order, ...rest] = line.split(">>>");
    switch (order) {
      case "Contains":
        rawKey = contain(rawKey, rest);
        break;
      case "Flip":
        rawKey = flipFlop(rawKey, rest);
        break;
      case "Slice":
        rawKey = slicer(rawKey, rest);
        break;
      case "Generate":
        console.log(`Your activation key is: ${rawKey}`);
        break;
    }
  }
}

function detectpr(input) {
  input = input[0];
  let row = "";
  let coolList = {};
  let testEmogi = /(?<separ>::|\*\*)(?<emogi>[A-Z]{1}[a-z]{2,})\k<separ>/g;
  let testCoolness = /\d/g;
  const coolCalc = (str) => {
    let result = 0;
    str.split("").map((el) => (result += el.charCodeAt(0)));
    return result;
  };
  let coolThresh = [];
  while ((info = testCoolness.exec(input)) !== null) {
    coolThresh.push(Number(info[0]));
  }
  coolThresh = coolThresh.reduce((res, el) => res * el);
  row += `Cool threshold: ${coolThresh}\n`;
  while ((info = testEmogi.exec(input)) !== null) {
    coolList[info.groups.emogi] = {
      name: info.groups.emogi,
      coolness: coolCalc(info.groups.emogi),
      separ: info.groups.separ,
    };
  }
  let result = Object.values(coolList);
  row += `${result.length} emojis found in the text. The cool ones are:\n`;
  result.forEach((emo) => {
    if (emo.coolness > coolThresh) {
      row += `${emo.separ}${emo.name}${emo.separ}\n`;
    }
  });
  console.log(row);
}

function pirates(input) {
  let output = "";
  let cityList = {};
  let sailed = false;
  for (let line of input) {
    if (line === "Sail") {
      sailed = true;
    } else if (sailed === false) {
      let [loc, pop, wealth] = line.split("||");
      if (!cityList.hasOwnProperty(loc)) {
        cityList[loc] = { name: loc, pop: Number(pop), wealth: Number(wealth) };
      } else {
        cityList[loc].pop += Number(pop);
        cityList[loc].wealth += Number(wealth);
      }
    } else {
      let [order, town, people, gold] = line.split("=>");
      switch (order) {
        case "Plunder":
          if (!cityList.hasOwnProperty(town)) {
            break;
          }
          cityList[town].wealth -= Number(gold);
          cityList[town].pop -= Number(people);
          output += `${town} plundered! ${gold} gold stolen, ${people} citizens killed.\n`;
          if (cityList[town].wealth === 0 || cityList[town].pop === 0) {
            output += `${cityList[town].name} has been wiped off the map!\n`;
            delete cityList[town];
          }
          break;
        case "Prosper":
          if (!cityList.hasOwnProperty(town)) {
            break;
          }
          gold = Number(people);
          if (gold < 0) {
            output += "Gold added cannot be a negative number!\n";
            break;
          } else {
            cityList[town].wealth += Number(gold);
            output += `${gold} gold added to the city treasury. ${town} now has ${cityList[town].wealth} gold.\n`;
          }
          break;
        case "End":
          cityList = Object.values(cityList);
          if (cityList.length > 0) {
            output += `Ahoy, Captain! There are ${cityList.length} wealthy settlements to go to:\n`;
            cityList
              .sort((a, b) => a.name.localeCompare(b.name))
              .sort((a, b) => b.wealth - a.wealth)
              .forEach((place) => {
                output += `${place.name} -> Population: ${place.pop} citizens, Gold: ${place.wealth} kg\n`;
              });
          } else {
            output += `Ahoy, Captain! All targets have been plundered and destroyed!`;
          }
          console.log(output);
          break;
      }
    }
  }
}
