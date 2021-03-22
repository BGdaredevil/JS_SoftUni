function travel(input) {
  let row = "";
  let iniStr = input.shift();
  let orders = {
    "Add Stop"(str, index, strToIns) {
      index = Number(index);
      if (orders.validator(str, index)) {
        return `${str.slice(0, index)}${strToIns}${str.slice(
          index,
          str.length
        )}`;
      } else {
        return str;
      }
    },
    "Remove Stop"(str, start, end) {
      start = Number(start);
      end = Number(end);
      if (orders.validator(str, start) && orders.validator(str, end)) {
        return `${str.slice(0, start)}${str.slice(end + 1, str.length)}`;
      } else {
        return str;
      }
    },
    Switch(str, old, replacement) {
      let regex = new RegExp(old, "g");
      return str.replace(regex, replacement);
    },
    validator(str, num) {
      if (num >= 0 && num < str.length) {
        return true;
      } else {
        return false;
      }
    },
  };
  let curr = input.shift();
  while (curr !== "Travel") {
    let [order, ...rest] = curr.split(":");
    iniStr = orders[order](iniStr, ...rest);
    row += `${iniStr}\n`;
    curr = input.shift();
  }
  row += `Ready for world tour! Planned stops: ${iniStr}`;
  return row;
}

function destMapper(input) {
  let pattern = /(?<separ>[=/])(?<place>[A-Z][A-Za-z]{2,})\k<separ>/g;
  let places = [];
  let temp = input.match(pattern);
  let points = 0;
  if (temp !== null) {
    points = temp
      .map((el) => el.slice(1, el.length - 1))
      .reduce((acc, el) => {
        acc += el.length;
        places.push(el);
        return acc;
      }, 0);
  }

  return `Destinations: ${places.join(", ")}\nTravel Points: ${points}`;
}

function plantDicsovery(input) {
  let row = "";
  let orders = {
    list: {},
    Rate(plant, rating) {
      if (orders.list.hasOwnProperty(plant)) {
        orders.list[plant].rating.push(Number(rating));
        orders.list[plant].average =
          orders.list[plant].rating.reduce((acc, el) => (acc += el), 0) /
          orders.list[plant].rating.length;
      } else {
        row += `error\n`;
      }
    },
    Update(plant, newRarity) {
      if (orders.list.hasOwnProperty(plant)) {
        orders.list[plant].rarity = Number(newRarity);
      } else {
        row += `error\n`;
      }
    },
    Reset(plant) {
      if (orders.list.hasOwnProperty(plant)) {
        orders.list[plant].rating = [];
        orders.list[plant].average = 0;
      } else {
        row += `error\n`;
      }
    },
  };
  let initial = Number(input.shift());
  let line = input.shift();
  while (line !== "Exhibition") {
    if (initial > 0) {
      let [plant, rarity] = line.split("<->");
      if (orders.list.hasOwnProperty(plant)) {
        orders.list[plant].rarity = Number(rarity);
      } else {
        orders.list[plant] = { rarity: Number(rarity), rating: [], average: 0 };
      }
      initial--;
    } else {
      let [order, ...rest] = line.split(/[: -]+/g);
      orders[order](...rest);
    }
    line = input.shift();
  }
  row += `Plants for the exhibition:\n`;
  Object.entries(orders.list)
    .sort((a, b) => b[1].rarity - a[1].rarity || b[1].average - a[1].average)
    .map(
      (el) =>
        (row += `- ${el[0]}; Rarity: ${
          el[1].rarity
        }; Rating: ${el[1].average.toFixed(2)}\n`)
    );
  return row;
}
console.log(
  plantDicsovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition",
  ])
);
