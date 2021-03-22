function distance(input) {
  let speed = Number(input[0]);
  let time1 = Number(input[1]);
  let time2 = Number(input[2]);
  let time3 = Number(input[3]);
  let result =
    (speed * time1) / 60 +
    (speed * 1.1 * time2) / 60 +
    (speed * 1.1 * 0.95 * time3) / 60;
  console.log(result.toFixed(2));
}
function haralambi(input) {
  let availableCash = Number(input[0]);
  let floorWidth = Number(input[1]);
  let floorLength = Number(input[2]);
  let triangleSide = Number(input[3]);
  let triangleHeight = Number(input[4]);
  let pricePerTile = Number(input[5]);
  let priceWork = Number(input[6]);
  let loss = 5;
  let floorArea = floorLength * floorWidth;
  let tileArea = (triangleHeight * triangleSide) / 2;
  let neededTiles = Math.ceil(floorArea / tileArea) + loss;
  let priceOfTiles = neededTiles * pricePerTile;
  let total = priceWork + priceOfTiles;
  let cashLeft = availableCash - total;
  if (cashLeft >= 0) {
    console.log(`${cashLeft.toFixed(2)} lv left.`);
  } else {
    console.log(`You'll need ${Math.abs(cashLeft).toFixed(2)} lv more.`);
  }
}
function flowerShop(input) {
  let hrizantema = Number(input[0]);
  let rozes = Number(input[1]);
  let tulips = Number(input[2]);
  let season = input[3];
  let isHoliday = input[4];
  let arrange = 2;
  let rDiscount = 1;
  let tDiscount = 1;
  let priceIncrease;
  let quantityDiscount = 1;
  let priceHrizantema;
  let priceRozes;
  let priceTulips;
  switch (isHoliday) {
    case "Y":
      priceIncrease = 1.15;
      break;
    case "N":
      priceIncrease = 1;
      break;
  }
  switch (season) {
    case "Spring":
      priceHrizantema = 2;
      priceRozes = 4.1;
      priceTulips = 2.5;
      if (tulips > 7) {
        tDiscount = 0.95;
      } else {
        tDiscount = 1;
      }
      break;
    case "Summer":
      priceHrizantema = 2;
      priceRozes = 4.1;
      priceTulips = 2.5;
      break;
    case "Autumn":
      priceHrizantema = 3.75;
      priceRozes = 4.5;
      priceTulips = 4.15;
      break;
    case "Winter":
      priceHrizantema = 3.75;
      priceRozes = 4.5;
      priceTulips = 4.15;
      if (rozes >= 10) {
        rDiscount = 0.9;
      } else {
        rDiscount = 1;
      }
      break;
  }
  if (tulips + rozes + hrizantema > 20) {
    quantityDiscount = 0.8;
  }
  let buketCosts =
    (tulips * priceTulips + priceRozes * rozes + priceHrizantema * hrizantema) *
      priceIncrease *
      tDiscount *
      rDiscount *
      quantityDiscount +
    arrange;
  console.log(buketCosts.toFixed(2));
}
function grades(input) {
  let testedStudents = Number(input[0]);
  let topStudents = 0;
  let between4and5 = 0;
  let between3and4 = 0;
  let failStudents = 0;
  let sum = 0;
  for (let i = 1; i <= testedStudents; i++) {
    const studentGrade = Number(input[i]);
    if (studentGrade >= 5) {
      topStudents++;
    } else if (studentGrade >= 4) {
      between4and5++;
    } else if (studentGrade >= 3) {
      between3and4++;
    } else {
      failStudents++;
    }
    sum += studentGrade;
  }
  console.log(
    `Top students: ${((topStudents / testedStudents) * 100).toFixed(2)}%`
  );
  console.log(
    `Between 4.00 and 4.99: ${((between4and5 / testedStudents) * 100).toFixed(
      2
    )}%`
  );
  console.log(
    `Between 3.00 and 3.99: ${((between3and4 / testedStudents) * 100).toFixed(
      2
    )}%`
  );
  console.log(`Fail: ${((failStudents / testedStudents) * 100).toFixed(2)}%`);
  console.log(`Average: ${(sum / testedStudents).toFixed(2)}`);
}
function hat(n) {
  n = Number(n[0]);
  let hatWidth = 4 * n + 1;
  let hatHeight = 2 * n + 5;
  let pointsWidth = 2 * n - 1;
  let row = "";
  row = ".".repeat(pointsWidth) + "/|\\" + ".".repeat(pointsWidth);
  console.log(row);
  row = ".".repeat(pointsWidth) + "\\|/" + ".".repeat(pointsWidth);
  console.log(row);
  for (let i = pointsWidth; i >= 0; i--) {
    row = "";
    row += ".".repeat(i);
    row += "*";
    row += "-".repeat(pointsWidth - i);
    row += "*";
    row += "-".repeat(pointsWidth - i);
    row += "*";
    row += ".".repeat(i);
    console.log(row);
  }
  row = "*".repeat(hatWidth);
  console.log(row);
  row = "*";
  row += ".*".repeat((hatWidth - 1) / 2);
  console.log(row);
  row = "*".repeat(hatWidth);
  console.log(row);
}
function combo(input) {
  let start = input[0].charCodeAt(0);
  let end = input[1].charCodeAt(0);
  let skip = input[2].charCodeAt(0);
  let validLetters = [];
  let counter = 0;
  let result = "";
  for (let i = start; i <= end; i++) {
    let letter;
    if (i !== skip) {
      letter = String.fromCharCode(i);
      validLetters.push(letter);
    }
  }
  for (let i = 0; i < validLetters.length; i++) {
    const l1 = validLetters[i];
    for (let j = 0; j < validLetters.length; j++) {
      const l2 = validLetters[j];
      for (let k = 0; k < validLetters.length; k++) {
        const l3 = validLetters[k];
        result = result.concat(l1, l2, l3, " ");
        counter++;
      }
    }
  }
  console.log(`${result}${counter}`);
}
combo(["a", "c", "b"]);
