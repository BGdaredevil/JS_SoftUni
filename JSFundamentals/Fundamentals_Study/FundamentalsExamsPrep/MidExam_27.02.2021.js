function problem01(input) {
  let output = "";
  let total = 0;
  let orderCount = input.shift();
  while (orderCount > 0) {
    let pricePerCap = input.shift();
    let days = input.shift();
    let capCount = input.shift();
    orderCount--;
    let temp = days * pricePerCap * capCount;
    total += temp;
    output += `The price for the coffee is: $${temp.toFixed(2)}\n`;
  }
  output += `Total: $${total.toFixed(2)}`;
  return output;
}

function problem02(input) {
  let WeaponName = input.shift().split("|");
  let result = "";
  const isCorrect = (loc, arr) => {
    if (loc >= 0 && loc < arr.length) {
      return true;
    } else {
      return false;
    }
  };
  const move = (dir, dist, arr) => {
    dist = Number(dist);
    switch (dir) {
      case "Left":
        if (isCorrect(dist, arr) && dist !== 0) {
          let temp = arr[dist - 1];
          arr[dist - 1] = arr[dist];
          arr[dist] = temp;
        }
        break;
      case "Right":
        if (isCorrect(dist, arr) && dist !== arr.length - 1) {
          let temp = arr[dist + 1];
          arr[dist + 1] = arr[dist];
          arr[dist] = temp;
        }
        break;
    }
  };
  const checkEvenOdd = (order, arr) => {
    let evenOrOdd;
    switch (order) {
      case "Even":
        evenOrOdd = 0;
        break;
      case "Odd":
        evenOrOdd = 1;
        break;
    }

    let temp = arr.reduce((acc, el, ind) => {
      if (ind % 2 === evenOrOdd) {
        acc.push(el);
      }
      return acc;
    }, []);
    return `${temp.join(" ")}\n`;
  };

  for (const line of input) {
    if (line !== "Done") {
      let [order, dir, index] = line.split(" ");
      switch (order) {
        case "Move":
          move(dir, index, WeaponName);
          break;
        case "Check":
          result += checkEvenOdd(dir, WeaponName);
          break;
      }
    } else {
      result += `You crafted ${WeaponName.join("")}!`;
      break;
    }
  }
  return result;
}

function problem03(...input) {
  let leftDmg = 0;
  let rightDmg = 0;
  let [prices, entryIndex, comand] = input;
  let entryVal = prices[entryIndex];

  prices.map((el, loc) => {
    switch (comand) {
      case "cheap":
        if (loc < entryIndex) {
          if (el < entryVal) {
            leftDmg += el;
          }
        } else {
          if (el < entryVal && loc !== entryIndex) {
            rightDmg += el;
          }
        }
        break;
      case "expensive":
        if (loc < entryIndex) {
          if (el >= entryVal) {
            leftDmg += el;
          }
        } else {
          if (el >= entryVal && loc !== entryIndex) {
            rightDmg += el;
          }
        }
        break;
    }
  });

  if (leftDmg >= rightDmg) {
    return `Left - ${leftDmg}`;
  } else {
    return `Right - ${rightDmg}`;
  }
}
console.log(problem([1, 5, 1], 2, "expensive"));
console.log(problem([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive"));
