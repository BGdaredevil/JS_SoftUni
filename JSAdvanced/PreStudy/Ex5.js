function cityRecord(...input) {
  return { name: input[0], population: input[1], treasury: input[2] };
}

function townPopulation(input) {
  let townList = {};
  for (const line of input) {
    let [town, pop] = line.split(" <-> ");
    if (!townList.hasOwnProperty(town)) {
      townList[town] = Number(pop);
    } else {
      townList[town] += Number(pop);
    }
  }
  Object.entries(townList).forEach((town) => {
    console.log(`${town[0]} : ${town[1]}`);
  });
}

function cityTaxes(...input) {
  let [town, pop, treasury] = input;
  pop = Number(pop);
  treasury = Number(treasury);
  let log = {
    name: town,
    population: pop,
    treasury: treasury,
    taxRate: 10,
    collectTaxes: function () {
      log.treasury = log.treasury + log.population * log.taxRate;
    },
    applyGrowth: function (percentage) {
      log.population = log.population * (percentage / 100 + 1);
    },
    applyRecession: function (percentage) {
      log.treasury = log.treasury * (1 - percentage / 100);
    },
  };
  return log;
}

function factory(listFunc, orders) {
  let resultArr = [];
  for (const order of orders) {
    let resultItem = {};
    resultItem.name = order.template.name;
    for (const part of order.parts) {
      resultItem[part] = listFunc[part];
    }
    resultArr.push(resultItem);
  }
  return resultArr;
}

function createAssemblyLine() {
  return {
    hasClima: function (info) {
      info.temp = 21;
      info.tempSettings = 21;
      info.adjustTemp = function () {
        if (info.temp < info.tempSettings) {
          info.temp += 1;
        } else {
          info.temp -= 1;
        }
      };
    },
    hasAudio: function (info) {
      info.currentTrack = { name: null, artist: null };
      info.nowPlaying = function () {
        if (info.currentTrack !== null) {
          console.log(
            `Now playing ${info.currentTrack.name} by ${info.currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic: function (info) {
      info.checkDistance = function (dist) {
        if (dist < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (dist <= 0.25) {
          console.log("Beep! Beep!");
        } else if (dist <= 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };
}

function fromJSONToHTMLTable(input) {
  //Write your code here
  input = JSON.parse(input);
  let row = "<table>\n";
  row += "\t<tr>";
  let keys = Object.keys(input[0]);
  for (const key of keys) {
    row += `<th>${key}</th>`;
  }
  row += `</tr>\n`;
  for (const line of input) {
    row += `\t<tr>`;
    let entries = Object.entries(line);
    for (const entry of entries) {
      if (keys.includes(entry[0])) {
        row += `<td>${entry[1]}</td>`;
      }
    }
    row += `</tr>\n`;
    console.log(row);
  }
  row += `</table>\n`;
  //console.log(row);
  return row;
}
console.log(
  fromJSONToHTMLTable([
    '[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]',
  ])
);
