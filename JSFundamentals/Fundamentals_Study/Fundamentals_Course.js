function ages(input) {
  if (Number(input) < 0) {
    console.log(`out of bounds`);
  } else if (Number(input) <= 2) {
    console.log(`baby`);
  } else if (Number(input) <= 13) {
    console.log(`child`);
  } else if (Number(input) <= 19) {
    console.log(`teenager`);
  } else if (Number(input) <= 65) {
    console.log(`adult`);
  } else if (Number(input) >= 66) {
    console.log(`elder`);
  }
}
// ages(20);
// ages(1);
// ages(100);

function rounding(...input) {
  let num = parseFloat(Number(input.shift()));
  let toRange = Number(input.shift());
  if (toRange > 15) {
    toRange = 15;
  }
  console.log(parseFloat(num.toFixed(toRange)));
}
// rounding(3.1415926535897932384626433832795, 2);
// rounding(10.5, 3);

function divisible(input) {
  if (Number(input) % 10 === 0) {
    console.log(`The number is divisible by 10`);
  } else if (Number(input) % 7 === 0) {
    console.log(`The number is divisible by 7`);
  } else if (Number(input) % 6 === 0) {
    console.log(`The number is divisible by 6`);
  } else if (Number(input) % 3 === 0) {
    console.log(`The number is divisible by 3`);
  } else if (Number(input) % 2 === 0) {
    console.log(`The number is divisible by 2`);
  } else {
    console.log(`Not divisible`);
  }
}
// divisible(30);
// divisible(15);
// divisible(12);
// divisible(1643);

function vacation(...input) {
  let [grupSize, type, day] = input;
  let discount = 0;
  let perPerson;
  switch (type) {
    case "Students":
      if (Number(grupSize) >= 30) {
        discount = 0.15;
      }
      switch (day) {
        case "Friday":
          perPerson = 8.45;
          break;
        case "Saturday":
          perPerson = 9.8;
          break;
        case "Sunday":
          perPerson = 10.46;
          break;
      }
      break;
    case "Business":
      if (Number(grupSize) >= 100) {
        grupSize -= 10;
      }
      switch (day) {
        case "Friday":
          perPerson = 10.9;
          break;
        case "Saturday":
          perPerson = 15.6;
          break;
        case "Sunday":
          perPerson = 16;
          break;
      }
      break;
    case "Regular":
      if (Number(grupSize) >= 10 && Number(grupSize) <= 20) {
        discount = 0.05;
      }
      switch (day) {
        case "Friday":
          perPerson = 15;
          break;
        case "Saturday":
          perPerson = 20;
          break;
        case "Sunday":
          perPerson = 22.5;
          break;
      }
      break;
  }
  console.log(
    `Total price: ${(
      grupSize * perPerson -
      grupSize * perPerson * discount
    ).toFixed(2)}`
  );
}
// vacation(30, "Students", "Sunday");
// vacation(40, "Regular", "Saturday");

function leap(input) {
  input = Number(input);
  if (input % 4 === 0 && input % 100 !== 0) {
    console.log("yes");
  } else if (input % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
// leap(1984);
// leap(2003);
// leap(4);

function printSum(...input) {
  let start = Math.min(Number(input[0]), Number(input[1]));
  let end = Math.max(Number(input[0]), Number(input[1]));
  let result = [];
  let sum = 0;
  while (start <= end) {
    result.push(start);
    sum += start++;
  }
  console.log(`${result.join(" ")}\nSum: ${sum}`);
}
// printSum(5, 10);
// printSum(0, 26);
// printSum(50, 60);

function numTriangle(input) {
  input = Number(input);
  let temp = 1;
  let row = "";
  while (temp <= input) {
    let med = temp + " ";
    row += `${med.repeat(temp++)}\n`;
  }
  console.log(row);
}
// numTriangle(3);
// numTriangle(5);
// numTriangle(6);

function multy(input) {
  input = Number(input);
  let row = "";
  for (let i = 1; i <= 10; i++) {
    row += `${input} X ${i} = ${input * i}\n`;
  }
  console.log(row);
}
// multy(5);
// multy(2);

function login(input) {
  let user = input.shift();
  let pass = user.split("").reverse().join("");
  let tries = 1;
  for (const userInput of input) {
    if (userInput.localeCompare(pass) !== 0 && tries < 4) {
      console.log(`Incorrect password. Try again.`);
      tries++;
    } else if (userInput.localeCompare(pass) === 0) {
      console.log(`User ${user} logged in.`);
    } else {
      console.log(`User ${user} blocked!`);
    }
  }
}
// login(["Acer", "login", "go", "let me in", "recA"]);
// login(["momo", "omom"]);
// login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);

function pyramid(...input) {
  let [base, blockSize] = input.map((el) => Number(el));
  let pyramid = {
    base: base,
    height: blockSize,
    stone: 0,
    marble: 0,
    lapis: 0,
    gold: 0,
    capSize: 0,
  };
  let count = 0;

  if (pyramid.base % 2 === 0) {
    pyramid.capSize = 2;
  } else {
    pyramid.capSize = 1;
  }

  while (pyramid.base > pyramid.capSize) {
    count++;
    pyramid.stone += (pyramid.base - 2) ** 2 * blockSize;
    if (count % 5 !== 0) {
      pyramid.marble +=
        (pyramid.base ** 2 - (pyramid.base - 2) ** 2) * blockSize;
    } else {
      pyramid.lapis +=
        (pyramid.base ** 2 - (pyramid.base - 2) ** 2) * blockSize;
    }
    pyramid.height += blockSize;
    pyramid.base -= 2;
  }
  if (pyramid.base === pyramid.capSize) {
    pyramid.gold += pyramid.capSize ** 2 * blockSize;
  }
  console.log(
    `Stone required: ${Math.ceil(pyramid.stone)}\nMarble required: ${Math.ceil(
      pyramid.marble
    )}\nLapis Lazuli required: ${Math.ceil(
      pyramid.lapis
    )}\nGold required: ${Math.ceil(
      pyramid.gold
    )}\nFinal pyramid height: ${Math.floor(pyramid.height)}`
  );
}
// pyramid(11, 1);
// pyramid(11, 0.75);
// pyramid(1, 1);
// pyramid(23, 0.5);
