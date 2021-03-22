function worldTour(input) {
  let initial = input.shift();
  let addStop = (original, loc, str) => {
    loc = Number(loc);
    if (loc >= 0 && loc < original.length) {
      original = original.split("");
      original.splice(loc, 0, str);
      original = original.join("");
    }
    return original;
  };
  let delStop = (original, start, end) => {
    let temp;
    start = Number(start);
    end = Number(end);
    temp = Math.min(start, end);
    end = Math.max(start, end);
    start = temp;
    if (
      start >= 0 &&
      start < original.length &&
      end >= 0 &&
      end < original.length
    ) {
      original = original.split("");
      original.splice(start, Math.abs(end - start + 1));
      original = original.join("");
    }
    return original;
  };
  let switchStop = (original, older, newer) => {
    let rgx = new RegExp(older, "g");
    original = original.replace(rgx, newer);

    return original;
  };
  for (const info of input) {
    if (info === "Travel") {
      console.log(`Ready for world tour! Planned stops: ${initial}`);
    } else {
      let comand = info.split(":");
      switch (comand[0]) {
        case "Add Stop":
          initial = addStop(initial, comand[1], comand[2]);
          console.log(initial);
          break;
        case "Remove Stop":
          initial = delStop(initial, comand[1], comand[2]);
          console.log(initial);
          break;
        case "Switch":
          initial = switchStop(initial, comand[1], comand[2]);
          console.log(initial);
          break;
      }
    }
  }
}

function dest(input) {
  let dest = [];
  let points = 0;
  let test = /(?<separ>\=|\/)(?<place>[A-Z][A-Za-z]{2,})\k<separ>/g;
  //let test = /(?<separ>\=|\/)(?<place>[A-Z]{1}[a-z]{2,})\k<separ>/g;
  while ((curr = test.exec(input)) !== null) {
    points += curr.groups.place.length;
    dest.push(curr.groups.place);
  }
  console.log(`Destinations: ${dest.join(", ")}\nTravel Points: ${points}`);
}

function plant(input) {
  let initial = Number(input.shift());
  let plantList = {};
  let splitting = /: | - /g;
  let calcAverage = (arr) => {
    let result = 0;
    arr.map((el) => Number(el));
    for (const item of arr) {
      result += item;
    }
    result = result / arr.length;
    return result;
  };
  while (initial !== 0) {
    initial--;
    let [plant, rarity] = input.shift().split("<->");
    if (!plantList.hasOwnProperty(plant)) {
      plantList[plant] = { rarity: Number(rarity), ratings: [], average: 0 };
    } else {
      plantList[plant].rarity += Number(rarity);
    }
  }
  for (const line of input) {
    if (line === "Exhibition") {
      let all = Object.entries(plantList)
        .sort((a, b) => b[1].average - a[1].average)
        .sort((a, b) => b[1].rarity - a[1].rarity);
      console.log("Plants for the exhibition:");
      for (const item of all) {
        console.log(
          `- ${item[0]}; Rarity: ${
            item[1].rarity
          }; Rating: ${item[1].average.toFixed(2)}`
        );
      }
    } else {
      let [word, plant, param] = line.split(splitting);
      if (plantList.hasOwnProperty(plant)) {
        switch (word) {
          case "Rate":
            plantList[plant].ratings.push(Number(param));
            plantList[plant].average = calcAverage(plantList[plant].ratings);
            break;
          case "Update":
            plantList[plant].rarity = Number(param);
            break;
          case "Reset":
            plantList[plant].ratings = [];
            plantList[plant].average = 0;
            break;
          default:
            console.log("error");
            break;
        }
      } else {
        console.log("error");
      }
    }
  }
}
