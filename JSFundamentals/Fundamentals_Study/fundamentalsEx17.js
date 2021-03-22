function employees(input) {
  let employees = [];
  class employee {
    constructor(name) {
      this.name = name;
      this.number = name[0].length;
    }
    logger() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
    }
  }

  for (let i = 0; i < input.length; i++) {
    let employeeInfo = input[i];
    employees.push(new employee([employeeInfo]));
  }

  for (const employee of employees) {
    employee.logger();
  }
}

function towns(input) {
  let towns = [];
  class town {
    constructor(info) {
      info = info.split(" | ");
      this.name = info[0];
      this.latitude = Number(info[1]);
      this.longitude = Number(info[2]);
    }
    logger() {
      console.log(
        `{ town: '${this.name}', latitude: '${this.latitude.toFixed(
          2
        )}', longitude: '${this.longitude.toFixed(2)}' }`
      );
    }
  }
  for (let i = 0; i < input.length; i++) {
    let townInfo = input[i];
    towns.push(new town(townInfo));
  }

  for (const town of towns) {
    town.logger();
  }
}

function store() {
  let input = arguments;
  let index = 0;
  let currentStock = input[index++];
  let orderedStuff = input[index];
  let stockAtTheMoment = [];

  class stocked {
    constructor(item, amount) {
      this.item = item;
      this.amount = amount;
    }
    logger() {
      console.log(`${this.item} -> ${this.amount}`);
    }
  }

  for (let i = 0; i < currentStock.length; i++) {
    let itemName = currentStock[i++];
    let itemQuantity = Number(currentStock[i]);
    stockAtTheMoment.push(new stocked(itemName, itemQuantity));
  }

  for (let i = 0; i < orderedStuff.length; i++) {
    let orderedName = orderedStuff[i++];
    let orderedQunatity = Number(orderedStuff[i]);
    let isFound = false;

    for (let j = 0; j < stockAtTheMoment.length; j++) {
      let currentStockName = stockAtTheMoment[j].item;
      if (currentStockName === orderedName) {
        stockAtTheMoment[j].amount += orderedQunatity;
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      stockAtTheMoment.push(new stocked(orderedName, orderedQunatity));
    }
  }

  for (const stocked of stockAtTheMoment) {
    stocked.logger();
  }
}

function cinema(input) {
  let movies = [];
  class Movie {
    constructor(name) {
      this.name = name;
    }

    addDirector(director) {
      this.director = director;
    }

    addDate(date) {
      this.date = date;
    }
  }

  for (let i = 0; i < input.length; i++) {
    let statement = input[i].split(" ");
    for (let j = 0; j < statement.length; j++) {
      let keyWord = statement[j];
      let testificate = statement;
      let frontPart;
      let backPart;
      switch (keyWord) {
        case "addMovie":
          testificate.splice(
            testificate.indexOf(keyWord),
            testificate.indexOf(keyWord) + 1
          );
          movies.push(new Movie(testificate.join(" ")));
          break;
        case "directedBy":
          frontPart = testificate
            .slice(0, testificate.indexOf(keyWord))
            .join(" ");
          backPart = testificate
            .slice(testificate.indexOf(keyWord) + 1, testificate.length)
            .join(" ");
          for (let k = 0; k < movies.length; k++) {
            if (movies[k].name === frontPart) {
              movies[k].addDirector(backPart);
            }
          }
          break;
        case "onDate":
          frontPart = testificate
            .slice(0, testificate.indexOf(keyWord))
            .join(" ");
          backPart = testificate
            .slice(testificate.indexOf(keyWord) + 1, testificate.length)
            .join(" ");
          for (let k = 0; k < movies.length; k++) {
            if (movies[k].name === frontPart) {
              movies[k].addDate(backPart);
            }
          }
          break;
      }
    }
  }
  for (const movie of movies) {
    let keys = Object.keys(movie);
    if (keys.length === 3) {
      console.log(JSON.stringify(movie));
    }
  }
}

function inventory(input) {
  let heroes = [];
  class Hero {
    constructor(statement) {
      statement = statement.split(" / ");
      let index = 0;
      this.name = statement[index++];
      this.level = Number(statement[index++]);
      this.items = statement[index++].split(", ").sort().join(", ");
    }

    logger() {
      let row1 = `Hero: ${this.name}`;
      let row2 = `level => ${this.level}`;
      let row3 = `items => ${this.items}`;

      console.log(row1);
      console.log(row2);
      console.log(row3);
    }
  }
  for (let i = 0; i < input.length; i++) {
    const heroInfo = input[i];
    heroes.push(new Hero(heroInfo));
  }
  heroes.sort((a, b) => {
    return a.level - b.level;
  });
  for (const hero of heroes) {
    hero.logger();
  }
}

function diction(input) {
  let dictionary = [];
  class Word {
    constructor(name, definition) {
      this.name = name;
      this.definition = definition;
    }
  }
  for (let i = 0; i < input.length; i++) {
    let pair = JSON.parse(input[i]);
    let name = Object.keys(pair).join("");
    let definition = Object.values(pair).join("");
    let isPresent = false;

    for (let j = 0; j < dictionary.length; j++) {
      let currItem = dictionary[j].name;
      if (currItem === name) {
        dictionary.splice(j, 1);
        dictionary.push(new Word(name, definition));
        isPresent = true;
      }
    }

    if (!isPresent) {
      dictionary.push(new Word(name, definition));
    }
  }
  dictionary.sort((a, b) => (a.name > b.name ? 1 : -1));

  for (const Word of dictionary) {
    console.log(`Term: ${Word.name} => Definition: ${Word.definition}`);
  }
}

function vehicle() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      parts.quality = parts.engine * parts.power;
      this.fuel = fuel;
    }
    drive(fuelLoss) {
      this.fuel -= fuelLoss;
    }
  }

  let parts = { engine: 6, power: 100 };
  let vehicle = new Vehicle("a", "b", parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);
}

function storage() {
  class Storage {
    constructor(capacity) {
      this.capacity = capacity;
      this.storage = [];
    }
    get totalCost() {
      return this.storage.reduce((acc, el) => {
        return acc + el.price * el.quantity;
      }, 0);
    }

    addProduct(product) {
      this.storage.push(product);
      this.capacity -= product.quantity;
      return;
    }

    getProducts() {
      let output = [];
      this.storage.forEach((product) => {
        output.push(JSON.stringify(product));
      });
      return output.join("\n");
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
  class Product {
    constructor(info) {
      info = info.split(" : ");
      this.name = info[0];
      this.price = info[1];
    }
  }
  let products = [];
  input.forEach((element) => products.push(new Product(element)));
  products.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );

  let result = [];
  for (let i = 0; i < products.length; i++) {
    let letter = products[i].name[0].toUpperCase();
    let letterIsFound = false;
    for (let j = 0; j < result.length; j++) {
      let element = result[j][0].toUpperCase();
      if (letter === element) {
        letterIsFound = true;
      }
    }
    if (!letterIsFound) {
      result.push(letter);
      result.push(`${"  " + products[i].name}: ${products[i].price}`);
    } else {
      result.push(`${"  " + products[i].name}: ${products[i].price}`);
    }
  }
  result.forEach((element) => console.log(element));
}

function systemRegister(input) {
  let register = {};
  for (let line of input) {
    let [sysName, component, subComponent] = line.split(" | ");
    if (!register.hasOwnProperty(sysName)) {
      register[sysName] = {};
    }
    if (!register[sysName].hasOwnProperty(component)) {
      register[sysName][component] = [];
    }
    register[sysName][component].push(subComponent);
  }
  let sortedKeys = Object.keys(register).sort(
    (a, b) =>
      Object.keys(register[b]).length - Object.keys(register[a]).length ||
      a.localeCompare(b)
  );
  sortedKeys.forEach((key) => {
    console.log(key);
    let sortedSubKeys = Object.keys(register[key]).sort(
      (a, b) =>
        Object.keys(register[key][b]).length -
        Object.keys(register[key][a]).length
    );
    sortedSubKeys.forEach((subKey) => {
      console.log(`|||${subKey}`);
      register[key][subKey].forEach((subComponent) =>
        console.log(`||||||${subComponent}`)
      );
    });
  });
}
systemRegister([
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
]);
