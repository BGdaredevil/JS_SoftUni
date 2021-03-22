function bonus(input) {
  let [studentCount, classCount, addBonus, ...rest] = input.map((el) =>
    Number(el)
  );
  let biggest = 0;
  let visited = 0;
  rest.map((el) => {
    let temp = (el / classCount) * (5 + addBonus);
    if (temp > biggest) {
      biggest = temp;
      visited = el;
    }
  });
  console.log(
    `Max Bonus: ${biggest.toFixed(
      0
    )}.\nThe student has attended ${visited} lectures.`
  );
}

function muOnline(input) {
  let rooms = input.split("|");
  let health = 100;
  let coins = 0;
  let best = 0;
  while (rooms.length > 0) {
    if (health <= 0) {
      break;
    }
    let [order, num] = rooms.shift().split(" ");
    num = Number(num);
    let row = "";
    best++;
    switch (order) {
      case "potion":
        if (health + num >= 100) {
          row += `You healed for ${100 - health} hp.\n`;
          health = 100;
        } else {
          row += `You healed for ${num} hp.\n`;
          health += num;
        }
        row += `Current health: ${health} hp.`;
        break;
      case "chest":
        coins += num;
        row += `You found ${num} bitcoins.`;
        break;
      default:
        health -= num;
        if (health > 0) {
          row += `You slayed ${order}.`;
        } else {
          row += `You died! Killed by ${order}.\nBest room: ${best}`;
        }
        break;
    }
    console.log(row);
  }
  if (health > 0 && rooms.length === 0) {
    console.log(`You've made it!\nBitcoins: ${coins}\nHealth: ${health}`);
  }
}

function inventory(input) {
  let ingredients = input.shift().split(", ");
  let line = input.shift();
  while (line !== "Craft!") {
    let [order, ...rest] = line.split(" - ");
    switch (order) {
      case "Collect":
        let item = rest.shift();
        if (!ingredients.includes(item)) {
          ingredients.push(item);
        }
        break;
      case "Drop":
        let thing = rest.shift();
        if (ingredients.includes(thing)) {
          ingredients.splice(ingredients.indexOf(thing), 1);
        }
        break;
      case "Combine Items":
        let [old, add] = rest.shift().split(":");
        if (ingredients.includes(old)) {
          ingredients.splice(ingredients.indexOf(old) + 1, 0, add);
        }
        break;
      case "Renew":
        let repared = rest.shift();
        if (ingredients.includes(repared)) {
          ingredients.push(ingredients.splice(ingredients.indexOf(repared), 1));
        }
        break;
    }

    line = input.shift();
  }
  if (line === "Craft!") {
    console.log(ingredients.join(", "));
  }
}
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
