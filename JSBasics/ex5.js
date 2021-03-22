function cinema(t, r, c) {
  r = Number(r);
  c = Number(c);
  switch (t) {
    case "Premiere":
      console.log((r * c * 12).toFixed(2));
      console.log("leva");
      break;
    case "Normal":
      console.log((r * c * 7.5).toFixed(2));
      console.log("leva");
      break;
    case "Discount":
      console.log((r * c * 5).toFixed(2));
      console.log("leva");
      break;
  }
}
function summer(temperature, timeOfDay) {
  let outfit, shoes;
  temperature = Number(temperature);
  if (temperature >= 25) {
    switch (timeOfDay) {
      case "Morning":
        outfit = "T-Shirt";
        shoes = "Sandals";
        break;
      case "Afternoon":
        outfit = "Swim Suit";
        shoes = "Barefoot";
        break;
      case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  } else {
    if (temperature > 18 && temperature <= 24) {
      switch (timeOfDay) {
        case "Morning":
          outfit = "Shirt";
          shoes = "Moccasins";
          break;
        case "Afternoon":
          outfit = "T-Shirt";
          shoes = "Sandals";
          break;
        case "Evening":
          outfit = "Shirt";
          shoes = "Moccasins";
          break;
      }
    } else {
      if (temperature >= 10 && temperature <= 18) {
        switch (timeOfDay) {
          case "Morning":
            outfit = "Sweatshirt";
            shoes = "Sneakers";
            break;
          case "Afternoon":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
          case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
        }
      }
    }
  }
  console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}
function home(flowerType, ammount, budget) {
  let rosePrice = 5;
  let daliaPrice = 3.8;
  let tulipPrice = 2.8;
  let narcisPrice = 3;
  let gladiousPrice = 2.5;
  let percentDiscount, total, rem;
  ammount = Number(ammount);
  budget = Number(budget);

  switch (flowerType) {
    case "Roses":
      if (ammount <= 80) {
        percentDiscount = 1;
        total = rosePrice * ammount * percentDiscount;
      } else {
        percentDiscount = 0.9;
        total = rosePrice * ammount * percentDiscount;
      }
      break;
    case "Dahlias":
      if (ammount <= 90) {
        percentDiscount = 1;
        total = daliaPrice * ammount * percentDiscount;
      } else {
        percentDiscount = 0.85;
        total = daliaPrice * ammount * percentDiscount;
      }
      break;
    case "Tulips":
      if (ammount <= 80) {
        percentDiscount = 1;
        total = tulipPrice * ammount * percentDiscount;
      } else {
        percentDiscount = 0.85;
        total = tulipPrice * ammount * percentDiscount;
      }
      break;
    case "Narcissus":
      if (ammount < 120) {
        percentDiscount = 1.15;
        total = narcisPrice * ammount * percentDiscount;
      } else {
        percentDiscount = 1;
        total = narcisPrice * ammount * percentDiscount;
      }
      break;
    case "Gladiolus":
      if (ammount < 80) {
        percentDiscount = 1.2;
        total = gladiousPrice * ammount * percentDiscount;
      } else {
        percentDiscount = 1;
        total = gladiousPrice * ammount * percentDiscount;
      }
      break;
  }
  rem = budget - total;
  if (budget >= total) {
    console.log(
      `Hey, you have a great garden with ${ammount} ${flowerType} and ${rem.toFixed(
        2
      )} leva left.`
    );
  } else {
    rem = rem * -1;
    console.log(`Not enough money, you need ${rem.toFixed(2)} leva more.`);
  }
}
function fishBoat(moneyStack, timeOfYear, fishermans) {
  let boatRent, discPeople, discEven, totalDiscount, remStack;
  moneyStack = Number(moneyStack);
  fishermans = Number(fishermans);
  let isEven = fishermans % 2;
  switch (timeOfYear) {
    case "Spring":
      boatRent = 3000;
      if (fishermans >= 12) {
        boatRent = boatRent * 0.75;
        switch (isEven) {
          case 0:
            boatRent = boatRent * 0.95;
            break;
        }
      } else {
        if (fishermans >= 7 && fishermans <= 11) {
          boatRent = boatRent * 0.85;
          switch (isEven) {
            case 0:
              boatRent = boatRent * 0.95;
              break;
          }
        } else {
          boatRent = boatRent * 0.9;
          switch (isEven) {
            case 0:
              boatRent = boatRent * 0.95;
              break;
          }
        }
      }
      break;
    case "Summer":
      boatRent = 4200;
      if (fishermans >= 12) {
        boatRent = boatRent * 0.75;
        switch (isEven) {
          case 0:
            boatRent = boatRent * 0.95;
            break;
        }
      } else {
        if (fishermans >= 7 && fishermans <= 11) {
          boatRent = boatRent * 0.85;
          switch (isEven) {
            case 0:
              boatRent = boatRent * 0.95;
              break;
          }
        } else {
          boatRent = boatRent * 0.9;
          switch (isEven) {
            case 0:
              boatRent = boatRent * 0.95;
              break;
          }
        }
      }
      break;
    case "Autumn":
      boatRent = 4200;
      if (fishermans >= 12) {
        boatRent = boatRent * 0.75;
      } else {
        if (fishermans >= 7 && fishermans <= 11) {
          boatRent = boatRent * 0.85;
        } else {
          boatRent = boatRent * 0.9;
        }
      }
      break;
    case "Winter":
      boatRent = 2600;
      if (fishermans >= 12) {
        boatRent = boatRent * 0.75;
        switch (isEven) {
          case 0:
            boatRent = boatRent * 0.95;
            break;
        }
      } else {
        if (fishermans >= 7 && fishermans <= 11) {
          boatRent = boatRent * 0.85;
          switch (isEven) {
            case 0:
              boatRent = boatRent * 0.95;
              break;
          }
        } else {
          boatRent = boatRent * 0.9;
          switch (isEven) {
            case 0:
              boatRent = boatRent * 0.95;
              break;
          }
        }
      }
      break;
  }
  remStack = moneyStack - boatRent;
  if (remStack >= 0) {
    console.log(`Yes! You have ${remStack.toFixed(2)} leva left.`);
  } else {
    remStack = Math.abs(remStack);
    console.log(`Not enough money! You need ${remStack.toFixed(2)} leva.`);
  }
}
function road(funds, season) {
  let loc, cost, acc;
  funds = Number(funds);
  if (funds > 1000) {
    loc = "Europe";
    cost = 0.9 * funds;
    acc = "Hotel";
  } else {
    if (funds <= 1000 && funds > 100) {
      loc = "Balkans";
      switch (season) {
        case "summer":
          cost = 0.4 * funds;
          acc = "Camp";
          break;
        case "winter":
          cost = 0.8 * funds;
          acc = "Hotel";
          break;
      }
    } else {
      loc = "Bulgaria";
      switch (season) {
        case "summer":
          cost = 0.3 * funds;
          acc = "Camp";
          break;
        case "winter":
          cost = 0.7 * funds;
          acc = "Hotel";
          break;
      }
    }
  }
  console.log(`Somewhere in ${loc}`);
  console.log(`${acc} - ${cost.toFixed(2)}`);
}
function elka(num1, num2, action) {
  let isEven;
  num1 = Number(num1);
  num2 = Number(num2);
  switch (action) {
    case "+":
      isEven = (num1 + num2) % 2;
      switch (isEven) {
        case 0:
          isEven = "even";
          break;
        case 1:
          isEven = "odd";
          break;
      }
      console.log(`${num1} + ${num2} = ${num1 + num2} - ${isEven}`);
      break;
    case "-":
      isEven = (num1 - num2) % 2;
      switch (Math.abs(isEven)) {
        case 0:
          isEven = "even";
          break;
        case 1:
          isEven = "odd";
          break;
      }
      console.log(`${num1} - ${num2} = ${num1 - num2} - ${isEven}`);
      break;
    case "*":
      isEven = (num1 * num2) % 2;
      switch (isEven) {
        case 0:
          isEven = "even";
          break;
        case 1:
          isEven = "odd";
          break;
      }
      console.log(`${num1} * ${num2} = ${num1 * num2} - ${isEven}`);
      break;
    case "%":
      if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
      } else {
        console.log(`${num1} % ${num2} = ${num1 % num2}`);
      }
      break;
    case "/":
      if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
      } else {
        console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
      }
      break;
  }
}
function hotelRoom(month, nights) {
  let studioPr, apartmentPr;
  nights = Number(nights);
  switch (month) {
    case "May":
    case "October":
      studioPr = 50;
      apartmentPr = 65;
      if (nights > 14) {
        studioPr = studioPr * 0.7;
        apartmentPr = apartmentPr * 0.9;
      } else {
        if (nights <= 14 && nights > 7) {
          studioPr = studioPr * 0.95;
        }
      }
      break;
    case "June":
    case "September":
      studioPr = 75.2;
      apartmentPr = 68.7;
      if (nights > 14) {
        studioPr = studioPr * 0.8;
        apartmentPr = apartmentPr * 0.9;
      }
      break;
    case "July":
    case "August":
      studioPr = 76;
      apartmentPr = 77;
      if (nights > 14) {
        apartmentPr = apartmentPr * 0.9;
      }
      break;
  }
  console.log(`Apartment: ${(nights * apartmentPr).toFixed(2)} lv.`);
  console.log(`Studio: ${(nights * studioPr).toFixed(2)} lv.`);
}
function exam(hhE, mmE, hhS, mmS) {
  hhE = Number(hhE);
  mmE = Number(mmE);
  hhS = Number(hhS);
  mmS = Number(mmS);
  let minSince00Exam = hhE * 60 + mmE;
  let minSince00Stud = hhS * 60 + mmS;
  let diff = minSince00Exam - minSince00Stud;
  if (diff <= -60) {
    console.log("Late");
    let hh = Math.ceil(diff / 60);
    let mm = Math.abs(diff) % 60;
    if (mm <= 9) {
      console.log(`${Math.abs(hh)}:0${mm} hours after the start`);
    } else {
      console.log(`${Math.abs(hh)}:${mm} hours after the start`);
    }
  } else {
    if (diff > -60 && diff < 0) {
      console.log("Late");
      let mm = Math.abs(diff) % 60;
      console.log(`${mm} minutes after the start`);
    } else {
      if (diff === 0) {
        console.log("on time");
      } else {
        if (diff <= 30) {
          console.log("on time");
          let mm = Math.abs(diff) % 60;
          console.log(`${mm} minutes before the start`);
        } else {
          if (diff < 60 && diff > 30) {
            console.log("Early");
            let mm = Math.abs(diff) % 60;
            console.log(`${mm} minutes before the start`);
          } else {
            console.log("Early");
            let hh = Math.floor(diff / 60);
            let mm = Math.abs(diff) % 60;
            if (mm <= 9) {
              console.log(`${hh}:0${mm} hours before the start`);
            } else {
              console.log(`${hh}:${mm} hours before the start`);
            }
          }
        }
      }
    }
  }
}
function voley(year, praz, pat) {
  praz = Number(praz);
  pat = Number(pat);
  let weekendT = 48;
  let weekendS = weekendT - pat;
  let workWeekend = weekendS / 4;
  let timesPlayed = weekendS - workWeekend + pat + (praz * 2) / 3;

  switch (year) {
    case "leap":
      console.log(Math.floor(timesPlayed * 1.15));
      break;
    default:
      console.log(Math.floor(timesPlayed));
      break;
  }
}
voley("leap", "5", "2");
