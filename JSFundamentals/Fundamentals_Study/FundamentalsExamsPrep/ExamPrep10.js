function secret(input) {
  let row = "";
  let orders = {
    InsertSpace(str, loc) {
      str = `${str.substring(0, Number(loc))} ${str.substring(
        Number(loc),
        str.length
      )}`;
      row += `${str}\n`;
      return str;
    },
    Reverse(str, toFind) {
      if (str.includes(toFind)) {
        str = str.replace(toFind, "");
        str += toFind.split("").reverse().join("");
        row += `${str}\n`;
      } else {
        row += "error\n";
      }
      return str;
    },
    ChangeAll(str, target, replacement) {
      let test = new RegExp(target, "g");
      str = str.replace(test, replacement);
      row += `${str}\n`;
      return str;
    },
  };
  let string = input.shift();
  let line = input.shift();
  while (line !== "Reveal") {
    let [todo, ...rest] = line.split(":|:");
    string = orders[todo](string, ...rest);
    line = input.shift();
  }
  return `${row}You have a new text message: ${string}`;
}

function mirrorWords(input) {
  let row = "";
  let result = [];
  let matches = 0;
  let test = /(?<separ>[#@])(?<first>[A-Za-z]{3,})\k<separ>{2}(?<second>[A-Za-z]{3,})\k<separ>/g;
  while ((info = test.exec(input)) !== null) {
    matches++;
    let { separ, first, second } = { ...info.groups };
    let temp = second.split("").reverse().join("");
    if (first === temp) {
      result.push(`${first} <=> ${second}`);
    }
  }
  matches > 0
    ? (row += `${matches} word pairs found!\n`)
    : (row += `No word pairs found!\n`);

  result.length > 0
    ? (row += `The mirror words are:\n${result.join(", ")}`)
    : (row += `No mirror words!`);
  return row;
}

function NFS(input) {
  let row = "";
  let count = Number(input.shift());
  let order = input.shift();
  let orders = {
    garage: {},
    Drive(car, dist, fuel) {
      dist = Number(dist);
      fuel = Number(fuel);
      car = orders.garage[car];
      if (car.fuel >= fuel) {
        car.fuel -= fuel;
        car.mileage += dist;
        row += `${car.carName} driven for ${dist} kilometers. ${fuel} liters of fuel consumed.\n`;
        if (car.mileage >= 100000) {
          row += `Time to sell the ${car.carName}!\n`;
          delete orders.garage[car.carName];
        }
      } else {
        row += `Not enough fuel to make that ride\n`;
      }
    },
    Refuel(car, fuel) {
      fuel = Number(fuel);
      car = orders.garage[car];
      if (car.fuel + fuel > 75) {
        row += `${car.carName} refueled with ${75 - car.fuel} liters\n`;
        car.fuel = 75;
      } else {
        car.fuel += fuel;
        row += `${car.carName} refueled with ${fuel} liters\n`;
      }
    },
    Revert(car, dist) {
      dist = Number(dist);
      car = orders.garage[car];
      car.mileage -= dist;
      row += `${car.carName} mileage decreased by ${dist} kilometers\n`;
      if (car.mileage < 10000) {
        car.mileage = 10000;
      }
    },
  };

  while (order !== "Stop") {
    if (count > 0) {
      count--;
      let [carName, mileage, fuel] = order.split("|");
      orders.garage[carName] = {
        carName,
        mileage: Number(mileage),
        fuel: Number(fuel),
      };
    } else {
      let [todo, ...rest] = order.split(" : ");
      orders[todo](...rest);
    }
    order = input.shift();
  }

  row += Object.values(orders.garage)
    .sort((a, b) => b.mileage - a.mileage || a.carName.localeCompare(b.carName))
    .map(
      (car) =>
        `${car.carName} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`
    )
    .join("\n");

  return row;
}

(function solve(input) {
  let arr = [1, 2, 3, 4, 5];
  let sum = arr.reduce((startValue, element) => {
    startValue += element;
    return startValue;
  }, 0);
  console.log(sum);
})();
