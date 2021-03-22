function sum(input) {
  let ammountNums = Number(input[0]);
  let summ = Number();
  let max = 0;
  for (let i = 1; i <= ammountNums; i++) {
    summ += Number(input[i]);
    if (max < Number(input[i])) {
      max = Number(input[i]);
    }
  }
  if (max === summ - max) {
    console.log(`Yes Sum = ${max}`);
  } else {
    console.log(`No Diff = ${Math.abs(summ - max - max)}`);
  }
}
function evenOdd(input) {
  let numbers = Number(input[0]),
    oddMin = Number.POSITIVE_INFINITY,
    oddMax = Number.NEGATIVE_INFINITY,
    evenMin = Number.POSITIVE_INFINITY,
    evenMax = Number.NEGATIVE_INFINITY,
    evenSum = 0,
    oddSum = 0;

  for (let i = 1; i <= numbers; i++) {
    if (i % 2 === 1) {
      oddSum += Number(input[i]);
      if (Number(input[i]) < oddMin) {
        oddMin = Number(input[i]);
      }
      if (Number(input[i]) > oddMax) {
        oddMax = Number(input[i]);
      }
    } else {
      evenSum += Number(input[i]);
      if (Number(input[i]) < evenMin) {
        evenMin = Number(input[i]);
      }
      if (Number(input[i]) > evenMax) {
        evenMax = Number(input[i]);
      }
    }
  }
  if (oddMin === Number.POSITIVE_INFINITY) {
    oddMin = "No";
  }
  if (oddMax === Number.NEGATIVE_INFINITY) {
    oddMax = "No";
  }
  if (evenMin === Number.POSITIVE_INFINITY) {
    evenMin = "No";
  }
  if (evenMax === Number.NEGATIVE_INFINITY) {
    evenMax = "No";
  }
  console.log(`OddSum = ${oddSum}`);
  console.log(`OddMin = ${oddMin}`);
  console.log(`OddMax = ${oddMax}`);
  console.log(`EvenSum = ${evenSum}`);
  console.log(`EvenMin = ${evenMin}`);
  console.log(`EvenMax = ${evenMax}`);
}
function pairs(input) {
  let pairNumber = Number(input[0]);
  let pairValues = [];
  let maximumDiff = 0;

  for (let i = 2; i <= pairNumber * 2; i += 2) {
    let pairSum = Number(input[i]) + Number(input[i - 1]);
    pairValues.push(pairSum);
  }
  for (let i = 0; i < pairValues.length; i++) {
    const currentValue = pairValues[i];
    const previousValue = pairValues[i - 1];
    if (Math.abs(currentValue - previousValue) > maximumDiff) {
      maximumDiff = Math.abs(currentValue - previousValue);
    }
  }
  if (maximumDiff === 0) {
    console.log(`Yes, value = ${Number(pairValues[0])}`);
  } else {
    console.log(`No, maxdiff = ${maximumDiff}`);
  }
}
function lili(input) {
  age = parseFloat(input[0]);
  washCost = parseFloat(input[1]);
  dollCost = parseFloat(input[2]);
  let toy = 0,
    mon = 0,
    counter = 0;
  for (let i = 1; i <= age; i++) {
    switch (i % 2) {
      case 0:
        counter++;
        mon = 10 * counter + mon;
        break;
      case 1:
        toy += 1;
        break;
    }
  }
  mon = mon + dollCost * toy - counter * 1;
  if (mon >= washCost) {
    console.log(`Yes! ${(mon - washCost).toFixed(2)}`);
  } else {
    console.log(`No! ${(washCost - mon).toFixed(2)}`);
  }
}
function past(input) {
  let inheritedCash = Number(input[0]);
  let targetYear = Number(input[1]);
  let costs = 12000;
  let neededCash = 0;
  for (let i = 1800; i <= targetYear; i++) {
    if (i % 2 === 0) {
      neededCash += costs;
    } else {
      neededCash = neededCash + costs + 50 * (i - 1800 + 18);
    }
  }
  if (inheritedCash >= neededCash) {
    console.log(
      `Yes! He will live a carefree life and will have ${(
        inheritedCash - neededCash
      ).toFixed(2)} dollars left.`
    );
  } else {
    console.log(
      `He will need ${(neededCash - inheritedCash).toFixed(
        2
      )} dollars to survive.`
    );
  }
}
function hospital(input) {
  let period = Number(input[0]);
  let doctors = 7;
  let days = 0;
  let treated = 0;
  let untreated = 0;
  for (let i = 1; i <= period; i++) {
    days++;
    if (days === 3) {
      if (untreated > treated) {
        doctors++;
      }
      days = 0;
    }
    if (Number(input[i]) - doctors > 0) {
      untreated = untreated + Number(input[i]) - doctors;
      treated += doctors;
    } else {
      treated += Number(input[i]);
    }
  }
  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${untreated}.`);
}
function division(input) {
  let argNo = Number(input[0]);
  let div2 = 0;
  let div3 = 0;
  let div4 = 0;
  for (i = 1; i <= argNo; i++) {
    if (Number(input[i]) % 2 === 0) {
      div2++;
    }
    if (Number(input[i]) % 3 === 0) {
      div3++;
    }
    if (Number(input[i]) % 4 === 0) {
      div4++;
    }
  }
  div2 = (div2 / argNo) * 100;
  div3 = (div3 / argNo) * 100;
  div4 = (div4 / argNo) * 100;
  console.log(`${div2.toFixed(2)}%`);
  console.log(`${div3.toFixed(2)}%`);
  console.log(`${div4.toFixed(2)}%`);
}
function logistics(input) {
  let loads = Number(input[0]);
  let busPerTon = 200;
  let truckPerTon = 175;
  let trainPerTon = 120;
  let freightBus = 0;
  let freightTruck = 0;
  let freightTrain = 0;
  let tonnage = 0;
  let byBus = 0;
  let byTruck = 0;
  let byTrain = 0;
  for (i = 1; i <= loads; i++) {
    tonnage += Number(input[i]);
    if (Number(input[i]) > 11) {
      freightTrain = freightTrain + Number(input[i]) * trainPerTon;
      byTrain += Number(input[i]);
    } else if (Number(input[i]) > 3) {
      freightTruck = freightTruck + Number(input[i]) * truckPerTon;
      byTruck += Number(input[i]);
    } else {
      freightBus = freightBus + Number(input[i]) * busPerTon;
      byBus += Number(input[i]);
    }
  }
  console.log(
    `${((freightTrain + freightTruck + freightBus) / tonnage).toFixed(2)}`
  );
  console.log(`${((byBus / tonnage) * 100).toFixed(2)}%`);
  console.log(`${((byTruck / tonnage) * 100).toFixed(2)}%`);
  console.log(`${((byTrain / tonnage) * 100).toFixed(2)}%`);
}
logistics(["4", "1", "5", "16", "3"]);
