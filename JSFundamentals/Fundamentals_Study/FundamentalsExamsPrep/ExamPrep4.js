function secret(input) {
  let secretStr = input.shift();
  const logger = (str) => {
    console.log(str);
  };
  const inserter = (str, arr) => {
    let item = " ";
    let index = Number(arr.shift());
    str = str.split("");
    str.splice(index, 0, item);
    str = str.join("");
    return str;
  };
  const reverser = (str, arr) => {
    let toRemove = arr.shift();
    if (!str.includes(toRemove)) {
      console.log("error");
      return str;
    }
    str = str.replace(toRemove, "");
    toRemove = toRemove.split("").reverse().join("");
    str += toRemove;
    logger(str);
    return str;
  };
  const CDChanger = (str, arr) => {
    let [older, newer] = arr;
    while (str.includes(older)) {
      str = str.replace(older, newer);
    }
    return str;
  };
  for (let line of input) {
    if (line === "Reveal") {
      console.log(`You have a new text message: ${secretStr}`);
      break;
    } else {
      let [order, ...rest] = line.split(":|:");
      switch (order) {
        case "InsertSpace":
          secretStr = inserter(secretStr, rest);
          logger(secretStr);
          break;
        case "Reverse":
          secretStr = reverser(secretStr, rest);
          break;
        case "ChangeAll":
          secretStr = CDChanger(secretStr, rest);
          logger(secretStr);
          break;
      }
    }
  }
}

function mirror(input) {
  let test = /(?<separ>@|#)(?<first>[A-Z]{3,})\k<separ>{2}(?<second>[A-Z]{3,})\k<separ>/gi;
  let str = input.shift();
  let matches = 0;
  let mirrors = [];
  const logger = (arr) => {
    let row = "The mirror words are:\n";
    let temp = [];
    for (const item of arr) {
      temp.push(`${item[0]} <=> ${item[1]}`);
    }
    row += temp.join(", ");
    console.log(row);
  };

  while ((info = test.exec(str)) !== null) {
    let first = info.groups.first;
    let second = info.groups.second;
    let temp = [first, second];
    second = second.split("").reverse().join("");
    let regSens = new RegExp(first, "g");
    matches++;
    if (regSens.test(second) && first.length === second.length) {
      mirrors.push(temp);
    }
  }

  if (matches > 0) {
    console.log(`${matches} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  if (mirrors.length === 0) {
    console.log("No mirror words!");
  } else {
    logger(mirrors);
  }
}

function NFS(input) {
  let carsNo = Number(input.shift());
  let carPark = {};
  while (carsNo > 0) {
    carsNo--;
    let [carName, mileage, fuel] = input.shift().split("|");
    carPark[carName] = { mileage: Number(mileage), fuel: Number(fuel) };
  }
  for (const line of input) {
    let [dir, ...rest] = line.split(" : ");
    switch (dir) {
      case "Drive":
        let [car, dist, fuel] = rest;
        if (carPark[car].fuel > fuel) {
          carPark[car].mileage = carPark[car].mileage + Number(dist);
          carPark[car].fuel = carPark[car].fuel - Number(fuel);
          console.log(
            `${car} driven for ${dist} kilometers. ${fuel} liters of fuel consumed.`
          );
          if (carPark[car].mileage >= 100000) {
            console.log(`Time to sell the ${car}!`);
            delete carPark[car];
          }
        } else {
          console.log("Not enough fuel to make that ride");
        }
        break;
      case "Refuel":
        let [car1, fuel1] = rest;
        let temp = carPark[car1].fuel;
        fuel1 = Number(fuel1);
        if (temp + fuel1 >= 75) {
          fuel1 = 75 - temp;
        }
        carPark[car1].fuel = temp + fuel1;
        console.log(`${car1} refueled with ${fuel1} liters`);

        break;
      case "Revert":
        let [car2, kilometers] = rest;
        carPark[car2].mileage -= Number(kilometers);
        console.log(`${car2} mileage decreased by ${kilometers} kilometers`);
        if (carPark[car2].mileage < 10000) {
          carPark[car2].mileage = 10000;
        }
        break;
      case "Stop":
        let toPrint = Object.entries(carPark)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .sort((a, b) => b[1].mileage - a[1].mileage);
        toPrint.forEach((el) => {
          console.log(
            `${el[0]} -> Mileage: ${el[1].mileage} kms, Fuel in the tank: ${el[1].fuel} lt.`
          );
        });
        break;
    }
  }
}
NFS([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
