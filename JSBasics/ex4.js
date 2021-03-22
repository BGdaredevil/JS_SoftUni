function day(input) {
  input = Number(input);
  switch (input) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Error");
      break;
  }
}
function rest(day) {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log("Working day");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
    default:
      console.log("Error");
      break;
  }
}
function animal(species) {
  switch (species) {
    case "dog":
      console.log("mammal");
      break;
    case "crocodile":
    case "snake":
    case "tortoise":
      console.log("reptile");
      break;
    default:
      console.log("unknown");
      break;
  }
}
function persom(age, gender) {
  age = Number(age);

  switch (gender) {
    case "m":
      if (age < 16) {
        console.log("Master");
      } else {
        console.log("Mr.");
      }
      break;
    default:
      if (age < 16) {
        console.log("Miss");
      } else {
        console.log("Ms.");
      }
      break;
  }
}
function store(item, place, amount) {
  amount = Number(amount);
  let coffePrice, waterPrice, beerPrice, sweetsPrice, peanutsPrice;
  switch (place) {
    case "Sofia":
      coffePrice = 0.5;
      waterPrice = 0.8;
      beerPrice = 1.2;
      sweetsPrice = 1.45;
      peanutsPrice = 1.6;
      break;
    case "Plovdiv":
      coffePrice = 0.4;
      waterPrice = 0.7;
      beerPrice = 1.15;
      sweetsPrice = 1.3;
      peanutsPrice = 1.5;
      break;
    default:
      coffePrice = 0.45;
      waterPrice = 0.7;
      beerPrice = 1.1;
      sweetsPrice = 1.35;
      peanutsPrice = 1.55;
      break;
  }
  switch (item) {
    case "coffee":
      console.log(coffePrice * amount);
      break;
    case "water":
      console.log(waterPrice * amount);
      break;
    case "beer":
      console.log(beerPrice * amount);
      break;
    case "sweets":
      console.log(sweetsPrice * amount);
      break;
    default:
      console.log(peanutsPrice * amount);
      break;
  }
}
function interval(inv) {
  inv = Number(inv);
  if (inv < -100) {
    console.log("No");
  } else if (inv > 100) {
    console.log("No");
  } else if (inv === 0) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}
function openingHours(time, wDay) {
  time = Number(time);
  switch (wDay) {
    case "Sunday":
      console.log("closed");
      break;
    default:
      if (10 <= time && time <= 18) {
        console.log("open");
      } else {
        console.log("closed");
      }
      break;
  }
}
function cinema(priceDay) {
  input = Number(priceDay);
  switch (priceDay) {
    case "Monday":
    case "Tuesday":
      console.log("12");
      break;
    case "Wednesday":
    case "Thursday":
      console.log("14");
      break;
    case "Friday":
      console.log("12");
      break;
    case "Saturday":
    case "Sunday":
      console.log("16");
      break;
  }
}
function vegie(thing) {
  switch (thing) {
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon":
    case "grapes":
      console.log("fruit");
      break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
      console.log("vegetable");
      break;
    default:
      console.log("unknown");
      break;
  }
}
function interval2(inve) {
  inve = Number(inve);
  if (inve >= 100 && inve <= 200) {
  } else if (inve === 0) {
  } else {
    console.log("invalid");
  }
}
function frStore(fruit, weekD, amm) {
  amm = Number(amm);
  let bananaP, appleP, orangeP, grapefruitP, kiwiP, pineP, grapeP;
  switch (weekD) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      bananaP = 2.5;
      appleP = 1.2;
      orangeP = 0.85;
      grapefruitP = 1.45;
      kiwiP = 2.7;
      pineP = 5.5;
      grapeP = 3.85;
      switch (fruit) {
        case "banana":
          console.log((bananaP * amm).toFixed(2));
          break;
        case "apple":
          console.log((appleP * amm).toFixed(2));
          break;
        case "orange":
          console.log((orangeP * amm).toFixed(2));
          break;
        case "grapefruit":
          console.log((grapefruitP * amm).toFixed(2));
          break;
        case "kiwi":
          console.log((kiwiP * amm).toFixed(2));
          break;
        case "pineapple":
          console.log((pineP * amm).toFixed(2));
          break;
        case "grapes":
          console.log((grapeP * amm).toFixed(2));
          break;
        default:
          console.log("error");
      }
      break;
    case "Saturday":
    case "Sunday":
      bananaP = 2.7;
      appleP = 1.25;
      orangeP = 0.9;
      grapefruitP = 1.6;
      kiwiP = 3;
      pineP = 5.6;
      grapeP = 4.2;
      switch (fruit) {
        case "banana":
          console.log((bananaP * amm).toFixed(2));
          break;
        case "apple":
          console.log((appleP * amm).toFixed(2));
          break;
        case "orange":
          console.log((orangeP * amm).toFixed(2));
          break;
        case "grapefruit":
          console.log((grapefruitP * amm).toFixed(2));
          break;
        case "kiwi":
          console.log((kiwiP * amm).toFixed(2));
          break;
        case "pineapple":
          console.log((pineP * amm).toFixed(2));
          break;
        case "grapes":
          console.log((grapeP * amm).toFixed(2));
          break;
        default:
          console.log("error");
      }
      break;
    default:
      console.log("error");
      break;
  }
}
function comision(loc, sales) {
  sales = Number(sales);
  let percent;
  if (sales > 10000) {
    switch (loc) {
      case "Sofia":
        percent = 0.12;
        console.log((percent * sales).toFixed(2));
        break;
      case "Varna":
        percent = 0.13;
        console.log((percent * sales).toFixed(2));
        break;
      case "Plovdiv":
        percent = 0.145;
        console.log((percent * sales).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    if (sales <= 10000 && sales > 1000) {
      switch (loc) {
        case "Sofia":
          percent = 0.08;
          console.log((percent * sales).toFixed(2));
          break;
        case "Varna":
          percent = 0.1;
          console.log((percent * sales).toFixed(2));
          break;
        case "Plovdiv":
          percent = 0.12;
          console.log((percent * sales).toFixed(2));
          break;
        default:
          console.log("error");
          break;
      }
    } else {
      if (sales <= 1000 && sales > 500) {
        switch (loc) {
          case "Sofia":
            percent = 0.07;
            console.log((percent * sales).toFixed(2));
            break;
          case "Varna":
            percent = 0.075;
            console.log((percent * sales).toFixed(2));
            break;
          case "Plovdiv":
            percent = 0.08;
            console.log((percent * sales).toFixed(2));
            break;
          default:
            console.log("error");
            break;
        }
      } else {
        if (sales <= 500 && sales >= 0) {
          switch (loc) {
            case "Sofia":
              percent = 0.05;
              console.log((percent * sales).toFixed(2));
              break;
            case "Varna":
              percent = 0.045;
              console.log((percent * sales).toFixed(2));
              break;
            case "Plovdiv":
              percent = 0.055;
              console.log((percent * sales).toFixed(2));
              break;
            default:
              console.log("error");
              break;
          }
        } else {
          console.log("error");
        }
      }
    }
  }
}
function ski(dur, accomodation, grade) {
  dur = Number(dur) - 1;
  let rem,
    onePerPrice = 18,
    appPrice = 25,
    presPrice = 35,
    total;
  if (dur > 15) {
    switch (accomodation) {
      case "room for one person":
        rem = 1 - 0;
        total = dur * onePerPrice * rem;
        break;
      case "apartment":
        rem = 1 - 0.5;
        total = dur * rem * appPrice;
        break;
      case "president apartment":
        rem = 1 - 0.2;
        total = dur * rem * presPrice;
        break;
    }
  } else {
    if (dur <= 15 && dur >= 10) {
      switch (accomodation) {
        case "room for one person":
          rem = 1 - 0;
          total = dur * onePerPrice * rem;
          break;
        case "apartment":
          rem = 1 - 0.35;
          total = dur * rem * appPrice;
          break;
        case "president apartment":
          rem = 1 - 0.15;
          total = dur * rem * presPrice;
          break;
      }
    } else {
      if (dur < 10) {
        switch (accomodation) {
          case "room for one person":
            rem = 1 - 0;
            total = dur * onePerPrice * rem;
            break;
          case "apartment":
            rem = 1 - 0.3;
            total = dur * rem * appPrice;
            break;
          case "president apartment":
            rem = 1 - 0.1;
            total = dur * rem * presPrice;
            break;
        }
      } else {
        console.log("he did not go");
      }
    }
  }
  switch (grade) {
    case "positive":
      console.log((total * 1.25).toFixed(2));
      break;
    case "negative":
      console.log((total * 0.9).toFixed(2));
      break;
  }
}
