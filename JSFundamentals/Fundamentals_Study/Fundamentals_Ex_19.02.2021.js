function employees(input) {
  let list = {};
  for (const name of input) {
    list[name] = { name, personalNum: name.length };
  }
  let row = "";
  for (const person of Object.values(list)) {
    row += `Name: ${person.name} -- Personal Number: ${person.personalNum}\n`;
  }
  return row;
}

function towns(input) {
  let row = "";
  let list = {};
  for (const line of input) {
    let [town, latitude, longtitude] = line.split(" | ");
    list[town] = {
      town,
      latitude: Number(latitude).toFixed(2),
      longtitude: Number(longtitude).toFixed(2),
    };
    row += `{ town: '${list[town].town}', latitude: '${list[town].latitude}', longitude: '${list[town].longtitude}' }\n`;
  }
  return row;
}

function provisions(...input) {
  let shop = {};
  let [current, ordered] = input;
  let item;
  for (let index in current) {
    index = Number(index);
    if (index % 2 === 1) {
      shop[item] = Number(current[index]);
    } else {
      item = current[index];
    }
  }
  for (let i in ordered) {
    i = Number(i);
    if (i % 2 === 0) {
      item = ordered[i];
    } else {
      let qty = Number(ordered[i]);
      if (shop.hasOwnProperty(item)) {
        qty += shop[item];
      }
      shop[item] = qty;
    }
  }
  let row = "";
  for (const [prod, qty] of Object.entries(shop)) {
    row += `${prod} -> ${qty}\n`;
  }
  return row;
}

function movies(input) {
  let result = "";
  let list = {};
  for (const line of input) {
    if (line.includes("addMovie ")) {
      let name = line
        .split("addMovie ")
        .filter((el) => el.length > 0)
        .toString();
      list[name] = { name };
    } else if (line.includes(" directedBy ")) {
      let [mov, dir] = line.split(" directedBy ").filter((el) => el.length > 0);
      if (list.hasOwnProperty(mov)) {
        list[mov].director = dir;
      }
    } else if (line.includes(" onDate ")) {
      let [movie, dat] = line.split(" onDate ").filter((el) => el.length > 0);
      if (list.hasOwnProperty(movie)) {
        list[movie].date = dat;
      }
    }
  }
  for (const info of Object.values(list)) {
    if (Object.values(info).length === 3) {
      result += JSON.stringify(info) + "\n";
    }
  }
  return result;
}

function inventory(input) {
  let list = [];
  for (const line of input) {
    let [hero, level, ...inventory] = line.split(/ \/ |, /);
    level = Number(level);
    inventory.sort((a, b) => a.localeCompare(b));
    list.push({ hero, level, inventory });
  }
  let row = "";
  list
    .sort((a, b) => a.level - b.level)
    .forEach((el) => {
      row += `Hero: ${el.hero}\nlevel => ${
        el.level
      }\nitems => ${el.inventory.join(", ")}\n`;
    });
  return row;
}

function dictionary(input) {
  let dictionary = {};
  for (let line of input) {
    line = JSON.parse(line);
    dictionary[Object.keys(line).shift()] = Object.values(line).shift();
  }
  let row = "";
  Object.entries(dictionary)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((el) => (row += `Term: ${el[0]} => Definition: ${el[1]}\n`));
  return row;
}

function theClassStorage() {
  class Storage {
    constructor(cap) {
      this.capacity = cap;
      this.storage = [];
      this.totalCost = 0;
    }

    addProduct(info) {
      this.storage.push(info);
      this.totalCost += info.price * info.quantity;
      this.capacity -= info.quantity;
    }

    getProducts() {
      return this.storage.map((el) => JSON.stringify(el)).join("\n");
    }
  }

  let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
  let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
  let productThree = { name: "Bread", price: 1.1, quantity: 8 };
  let storage = new Storage(50);

  storage.addProduct(productOne);
  storage.addProduct(productTwo);
  storage.addProduct(productThree);
  storage.getProducts();
  console.log(storage.capacity);
  console.log(storage.totalCost);
}

function catalogue(input) {
  let list = [];
  let letter;
  let row = "";

  for (const line of input) {
    let [name, price] = line.split(" : ");
    price = Number(price);
    list.push({ name, price });
  }
  list.sort((a, b) => a.name.localeCompare(b.name));
  for (const item of list) {
    if (item.name[0] !== letter) {
      letter = item.name[0];
      row += `${letter}\n`;
    }
    row += `  ${item.name}: ${item.price}\n`;
  }
  return row;
}

function sysRegister(input) {
  let row = "";
  let list = {};
  for (const line of input) {
    let [sysName, comp, subComp] = line.split(" | ");
    if (!list.hasOwnProperty(sysName)) {
      list[sysName] = {};
    }
    if (!list[sysName].hasOwnProperty(comp)) {
      list[sysName][comp] = [];
    }
    list[sysName][comp].push(subComp);
  }

  Object.entries(list)
    .sort(
      (a, b) =>
        Object.values(b[1]).length - Object.values(a[1]).length ||
        a[0].localeCompare(b[0])
    )
    .forEach((system) => {
      row += `${system[0]}\n`;
      Object.entries(system[1])
        .sort((a, b) => b[1].length - a[1].length)
        .forEach((component) => {
          row += `|||${component[0]}\n`;
          component[1].forEach((subComponent) => {
            row += `||||||${subComponent}\n`;
          });
        });
    });
  return row;
}
console.log(
  sysRegister([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security",
  ])
);
