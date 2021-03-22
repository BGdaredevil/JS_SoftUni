function carWash(input) {
  let progress = 0;
  input.forEach((element) => {
    switch (element) {
      case "soap":
        progress += 10;
        break;
      case "water":
        progress *= 1.2;
        break;
      case "vacuum cleaner":
        progress *= 1.25;
        break;
      case "mud":
        progress *= 0.9;
        break;
    }
  });
  console.log(`The car is ${progress.toFixed(2)}% clean.`);
}

function numMod(input) {
  input = input.toString().split("");
  let average = (input) => {
    let sum = 0;
    let numberDigits = 0;
    input.forEach((element) => {
      sum += Number(element);
      numberDigits++;
    });
    return sum / numberDigits;
  };
  while (5 > average(input)) {
    input.push(9);
  }
  console.log(input.join(""));
}

function pointValidation(input) {
  let index = 0;
  let x0 = 0;
  let y0 = 0;
  let x1 = Number(input[index++]);
  let y1 = Number(input[index++]);
  let x2 = Number(input[index++]);
  let y2 = Number(input[index++]);
  let distance2pointsIsValid = (x1, y1, x2, y2) => {
    let dx = Math.abs(x1 - x2);
    let dy = Math.abs(y1 - y2);
    let result = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    if (result % 1 !== 0) {
      return false;
    } else {
      return true;
    }
  };
  if (distance2pointsIsValid(x1, y1, x0, y0)) {
    console.log(`{${x1}, ${y1}} to {${x0}, ${y0}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x0}, ${y0}} is invalid`);
  }
  if (distance2pointsIsValid(x2, y2, x0, y0)) {
    console.log(`{${x2}, ${y2}} to {${x0}, ${y0}} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {${x0}, ${y0}} is invalid`);
  }
  if (distance2pointsIsValid(x1, y1, x2, y2)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

function radioCrystals(input) {
  let targetThickness = Number(input.shift());
  let currentThickness;

  let cut = (thickness) => {
    if (thickness / 4 < targetThickness) {
      return thickness;
    }
    let cutCount = 0;
    while (thickness / 4 >= targetThickness) {
      thickness = thickness / 4;
      cutCount++;
    }
    console.log(`Cut x${cutCount}`);
    thickness = transportAndWashing(thickness);
    return thickness;
  };
  let lap = (thickness) => {
    if (thickness * 0.8 < targetThickness) {
      return thickness;
    }
    let lapCount = 0;
    while (thickness * 0.8 >= targetThickness) {
      thickness *= 0.8;
      lapCount++;
    }
    console.log(`Lap x${lapCount}`);
    thickness = transportAndWashing(thickness);
    return thickness;
  };
  let grind = (thickness) => {
    if (thickness - 20 < targetThickness) {
      return thickness;
    }
    let grindCount = 0;
    while (thickness - 20 >= targetThickness) {
      thickness -= 20;
      grindCount++;
    }
    console.log(`Grind x${grindCount}`);
    thickness = transportAndWashing(thickness);
    return thickness;
  };
  let etch = (thickness) => {
    if (thickness - 2 < targetThickness - 1) {
      return thickness;
    }
    let etchCount = 0;
    while (thickness - 2 >= targetThickness) {
      thickness -= 2;
      etchCount++;
    }
    if (thickness - 1 === targetThickness) {
      thickness -= 2;
      etchCount++;
    }
    console.log(`Etch x${etchCount}`);
    thickness = transportAndWashing(thickness);
    return thickness;
  };
  let Xray = (thickness) => {
    if (thickness + 1 === targetThickness) {
      thickness += 1;
      console.log(`X-ray x1`);
    }
    return thickness;
  };
  let transportAndWashing = (thickness) => {
    thickness = Math.floor(thickness);
    console.log("Transporting and washing");
    return thickness;
  };
  let isReady = (thickness) => {
    if (thickness === targetThickness) {
      console.log(`Finished crystal ${thickness} microns`);
      return true;
    }
  };

  input.forEach(function (element) {
    currentThickness = Number(element);
    console.log(`Processing chunk ${currentThickness} microns`);
    currentThickness = cut(currentThickness);
    if (isReady(currentThickness)) {
      return;
    }
    currentThickness = lap(currentThickness);
    if (isReady(currentThickness)) {
      return;
    }
    currentThickness = grind(currentThickness);
    if (isReady(currentThickness)) {
      return;
    }
    currentThickness = etch(currentThickness);
    if (isReady(currentThickness)) {
      return;
    }
    currentThickness = Xray(currentThickness);
    if (isReady(currentThickness)) {
      return;
    }
  });
}

function DNA(length) {
  length = Number(length);
  let repeatingSequance = "ATCGTTAGGG";
  let dashes = [0, 2, 4, 2];
  let stars = [2, 1, 0, 1];

  for (let i = 0; i < length; i++) {
    let row = "";
    row += "*".repeat(stars[i % 4]);
    row += repeatingSequance[(i % 5) * 2];
    row += "-".repeat(dashes[i % 4]);
    row += repeatingSequance[(i % 5) * 2 + 1];
    row += "*".repeat(stars[i % 4]);
    console.log(row);
  }
}
