function calorieObject(input) {
  let returnObject = {};
  let item;
  for (let index in input) {
    index = Number(index);
    if (index % 2 === 1) {
      returnObject[item] = Number(input[index]);
    } else {
      item = input[index];
    }
  }
  return returnObject;
}

function construction(input) {
  if (input.dizziness === true) {
    input.levelOfHydrated += 0.1 * input.experience * input.weight;
    input.dizziness = false;
  }
  return input;
}

function carFactory(order) {
  class Car {
    constructor(order) {
      this.model = order.model;
      this.engine = selectEngine(order);
      this.carriage = { type: order.carriage, color: order.color };
      this.wheels = selectWheels(order);
    }
  }

  function selectEngine(order) {
    let engineList = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ];
    for (const engine of engineList) {
      if (engine.power >= order.power) {
        return engine;
      }
    }
  }

  function selectWheels(order) {
    if (order.wheelsize % 2 === 0) {
      order.wheelsize -= 1;
    }
    return [order.wheelsize, order.wheelsize, order.wheelsize, order.wheelsize];
  }

  let result = new Car(order);

  return result;
}

function heroicInventory(input) {
  let list = [];
  for (const line of input) {
    let [name, level, ...items] = line.split(/ \/ |, /);
    list.push({ name, level: Number(level), items });
  }
  return JSON.stringify(list);
}

function lowestPrices(input) {
  let list = {};
  for (const line of input) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);

    if (list.hasOwnProperty(product)) {
      if (list[product].price > price) {
        list[product].price = price;
        list[product].town = town;
      }
    } else {
      list[product] = { product, price, town };
    }
  }

  let row = "";
  for (const item of Object.values(list)) {
    row += `${item.product} -> ${item.price} (${item.town})\n`;
  }
  return row;
}

function storeCatalogue(input) {
  let catalogue = {};
  for (const line of input) {
    let [item, price] = line.split(" : ");
    price = Number(price);
    catalogue[item] = { item, price };
  }
  let letter;
  let row = "";
  for (const product of Object.values(catalogue).sort((a, b) =>
    a.item.localeCompare(b.item)
  )) {
    let temp = product.item[0];
    if (temp != letter) {
      letter = temp;
      row += `${letter}\n`;
    }
    row += `  ${product.item}: ${product.price}\n`;
  }
  return row;
}

function townsToJSON(input) {
  let result = [];
  let headings = input
    .shift()
    .split("|")
    .map((el) => el.trim())
    .filter((el) => el.length > 0);
  for (let line of input) {
    let temp = {};
    line = line
      .split("|")
      .map((el) => el.trim())
      .filter((el) => el.length > 0);
    for (let index in line) {
      index = Number(index);
      let lol;
      if (!isNaN(line[index])) {
        lol = Math.round(Number(line[index]) * 100) / 100;
      } else {
        lol = line[index];
      }
      temp[headings[index]] = lol;
    }
    result.push(temp);
  }
  return JSON.stringify(result);
}

function rectanglee() {
  function rectangle(width, height, color) {
    function rect(w, h, c) {
      this.width = w;
      this.height = h;
      this.color = c;
    }

    rect.prototype.calcArea = function () {
      return this.width * this.height;
    };

    color = color.split("");
    color[0] = color[0].toUpperCase();
    color = color.join("");

    return new rect(width, height, color);
  }

  let rect = rectangle(4, 5, "red");
  console.log(rect.width);
  console.log(rect.height);
  console.log(rect.color);
  console.log(rect.calcArea());
}

function lol() {
  function createSortedList() {
    class TheList {
      constructor() {
        this.collection = [];
        this.size = this.collection.length;
      }

      maintain() {
        this.collection.sort((a, b) => a - b);
        this.size = this.collection.length;
      }

      add(el) {
        this.collection.push(el);
        this.maintain();
      }
      remove(loc) {
        if (loc >= 0 && loc < this.size) {
          this.collection.splice(loc, 1);
          this.maintain();
        }
      }
      get(loc) {
        if (loc >= 0 && loc < this.size) {
          return this.collection[loc];
        }
      }
    }
    return new TheList();
  }

  let list = createSortedList();
  list.add(5);
  list.add(6);
  list.add(7);
  console.log(list.get(1));
  list.remove(1);
  console.log(list.get(1));
}

function heroes() {
  function solve(name) {
    const canCast = (state) => ({
      cast: (spell) => {
        console.log(`${state.name} cast ${spell}`);
        state.mana--;
      },
    });
    const canFight = (state) => ({
      fight: () => {
        console.log(`${state.name} slashes at the foe!`);
        state.stamina--;
      },
    });
    const fighter = (name) => {
      let state = {
        name,
        health: 100,
        stamina: 100,
      };
      return Object.assign(state, canFight(state));
    };

    const mage = (name) => {
      let state = {
        name,
        health: 100,
        mana: 100,
      };
      return Object.assign(state, canCast(state));
    };
    return { mage: mage, fighter: fighter };
  }
  //let create = solve();
  const scorcher = solve().mage("Scorcher");
  scorcher.cast("fireball");
  scorcher.cast("thunder");
  scorcher.cast("light");

  const scorcher2 = solve().fighter("Scorcher 2");
  scorcher2.fight();

  console.log(scorcher2.stamina);
  console.log(scorcher.mana);
}

function notation(input) {
  const calculator = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  };
  let memory = [];
  for (const line of input) {
    if (!isNaN(line)) {
      memory.push(line);
    } else {
      let second = memory.pop();
      let first = memory.pop();
      if (isNaN(first) || isNaN(second)) {
        console.log(`Error: not enough operands!`);
        return;
      }
      memory.push(calculator(first, second, line));
    }
  }
  if (memory.length > 1) {
    console.log(`Error: too many operands!`);
  } else {
    console.log(memory.pop());
  }
}
notation([3, 4, "+"]);
notation([5, 3, 4, "*", "-"]);
notation([7, 33, 8, "-"]);
notation([15, "/"]);
