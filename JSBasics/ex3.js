function time(run1, run2, run3) {
  run1 = Number(run1);
  run2 = Number(run2);
  run3 = Number(run3);
  timeSec = run1 + run2 + run3;
  let mins = Math.floor(timeSec / 60);
  let sec = timeSec % 60;

  if (sec <= 9) {
    console.log(`${mins}:0${sec}`);
  } else {
    console.log(`${mins}:${sec}`);
  }
}

function bonus(input) {
  input = Number(input);
  let bonusEven;
  let bonusFive;

  if (input <= 100) {
    if (input % 2 === 0) {
      bonusEven = 1;
    } else {
      bonusEven = 0;
    }
    if (input % 10 === 5) {
      bonusFive = 2;
    } else {
      bonusFive = 0;
    }
    console.log(5 + bonusFive + bonusEven);
    console.log(input + 5 + bonusFive + bonusEven);
  } else {
    if (input > 1000) {
      bonusa = input * 0.1;
      if (input % 2 === 0) {
        bonusEven = 1;
      } else {
        bonusEven = 0;
      }
      if (input % 10 === 5) {
        bonusFive = 2;
      } else {
        bonusFive = 0;
      }
      console.log(bonusa + bonusFive + bonusEven);
      console.log(input + bonusa + bonusFive + bonusEven);
    } else {
      if (input <= 1000) {
        bonusa = input * 0.2;
        if (input % 2 === 0) {
          bonusEven = 1;
        } else {
          bonusEven = 0;
        }
        if (input % 10 === 5) {
          bonusFive = 2;
        } else {
          bonusFive = 0;
        }
        console.log(bonusa + bonusFive + bonusEven);
        console.log(input + bonusa + bonusFive + bonusEven);
      } else {
        console.log("else");
      }
    }
  }
}

function speed(input) {
  input = Number(input);
  if (input <= 10) {
    console.log("slow");
  } else if (input <= 50) {
    console.log("average");
  } else if (input <= 150) {
    console.log("fast");
  } else if (input <= 1000) {
    console.log("ultra fast");
  } else {
    console.log("extremely fast");
  }
}
function converter(length, unitIn, unitOut) {
  length = Number(length);
  if (unitIn === "m" && unitOut === "mm") {
    console.log((length * 1000).toFixed(3));
  } else if (unitIn === "m" && unitOut === "cm") {
    console.log((length * 100).toFixed(3));
  } else if (unitIn === "m" && unitOut === "m") {
    console.log((length * 1).toFixed(3));
  } else if (unitIn === "mm" && unitOut === "mm") {
    console.log((length * 1).toFixed(3));
  } else if (unitIn === "mm" && unitOut === "cm") {
    console.log((length * 0.1).toFixed(3));
  } else if (unitIn === "mm" && unitOut === "m") {
    console.log((length * 0.001).toFixed(3));
  } else if (unitIn === "cm" && unitOut === "cm") {
    console.log((length * 1).toFixed(3));
  } else if (unitIn === "cm" && unitOut === "mm") {
    console.log((length * 10).toFixed(3));
  } else if (unitIn === "cm" && unitOut === "m") {
    console.log((length * 0.01).toFixed(3));
  }
}

function future(hours, minut) {
  hours = Number(hours);
  minut = Number(minut);

  if (minut + 15 >= 60) {
    hours += 1;
    minut = minut + 15 - 60;
    if (hours === 24) {
      hours = 0;
    }
  } else {
    minut = minut + 15;
  }
  if (minut <= 9) {
    console.log(`${hours}:0${minut}`);
  } else {
    console.log(`${hours}:${minut}`);
  }
}
function movie(budget, extras, pricePerExtra) {
  budget = Number(budget);
  extras = Number(extras);
  pricePerExtra = Number(pricePerExtra);
  let deco = budget * 0.1;
  if (extras > 150) {
    pricePerExtra = pricePerExtra * 0.9;
  }
  if (budget - deco - pricePerExtra * extras < 0) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${(deco + pricePerExtra * extras - budget).toFixed(
        2
      )} leva more.`
    );
  } else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(
        budget -
        deco -
        pricePerExtra * extras
      ).toFixed(2)} leva left.`
    );
  }
}
function swimming(recordTime, length, timePerMeter) {
  recordTime = Number(recordTime);
  length = Number(length);
  timePerMeter = Number(timePerMeter);
  let ivanT = length * timePerMeter + Math.floor(length / 15) * 12.5;
  if (ivanT >= recordTime) {
    console.log(
      `No, he failed! He was ${(ivanT - recordTime).toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${ivanT.toFixed(2)} seconds.`
    );
  }
}
function scolarship(income, grade, minSalery) {
  income = Number(income);
  grade = Number(grade);
  minSalery = Number(minSalery);
  let charitySc = Math.floor(minSalery * 0.35);
  let gradeSc = Math.floor(grade * 25);
  if (income >= minSalery) {
    if (grade >= 5.5) {
      console.log(`You get a scholarship for excellent results ${gradeSc} BGN`);
    } else {
      console.log("You cannot get a scholarship!");
    }
  } else {
    if (grade >= 5.5) {
      if (gradeSc >= charitySc) {
        console.log(
          `You get a scholarship for excellent results ${gradeSc} BGN`
        );
      } else {
        console.log(`You get a Social scholarship ${charitySc} BGN`);
      }
    } else {
      if (grade >= 4.5) {
        console.log(`You get a Social scholarship ${charitySc} BGN`);
      } else {
        console.log("You cannot get a scholarship!");
      }
    }
  }
}
scolarship("999", "5", "1000.00");
