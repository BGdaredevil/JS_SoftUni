function multy(n) {
  console.log(Number(n) * 2);
}
function excell(n) {
  if (n >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}
function onetofive() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
function onetoN(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

function MtoN(m, n) {
  let start = Math.max(Number(m), Number(n));
  let end = Math.min(Number(m), Number(n));
  for (let i = start; i >= end; i--) {
    console.log(i);
  }
}
function student(nam, age, grad) {
  console.log(`Name: ${nam}, Age: ${age}, Grade: ${grad.toFixed(2)}`);
}
function printTheMonth(n) {
  switch (n) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Error!");
      break;
  }
}
function lang(input) {
  switch (input) {
    case "Spain":
    case "Argentina":
    case "Mexico":
      console.log("Spanish");
      break;
    case "England":
    case "USA":
      console.log("English");
      break;
    default:
      console.log("unknown");
      break;
  }
}
function theatre(day, age) {
  age = Number(age);
  let result;
  let child = false;
  let middleAge = false;
  let old = false;

  if (age >= 0 && age <= 18) {
    child = true;
  } else if (age > 18 && age <= 64) {
    middleAge = true;
  } else if (age > 64 && age <= 122) {
    old = true;
  } else if (!child && !middleAge && !old) {
    console.log("Error!");
    return;
  }
  switch (day) {
    case "Weekday":
      if (child) {
        result = 12;
      } else if (old) {
        result = 12;
      } else if (middleAge) {
        result = 18;
      }
      break;
    case "Weekend":
      if (child) {
        result = 15;
      } else if (old) {
        result = 15;
      } else if (middleAge) {
        result = 20;
      }
      break;
    case "Holiday":
      if (child) {
        result = 5;
      } else if (old) {
        result = 10;
      } else if (middleAge) {
        result = 12;
      }
      break;
  }
  console.log(`${result}$`);
}
function dividableInThree() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
function sumTheOdd(input) {
  input = Number(input);
  let sum = 0;
  let counter = 1;
  let i = 1;
  while (counter <= input) {
    if (i % 2 === 1) {
      console.log(i);
      sum += i;
      counter++;
    }
    i++;
  }

  console.log(`Sum: ${sum}`);
}
sumTheOdd(5);
