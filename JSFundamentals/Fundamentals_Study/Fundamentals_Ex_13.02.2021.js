function train(input) {
  let insert = [...input];
  let wagons = insert.shift().split(" ").map(Number);
  let max = Number(insert.shift());
  for (const line of insert) {
    if (isNaN(line)) {
      wagons.push(Number(line.split(" ").pop()));
    } else {
      let qty = Number(line);
      for (let i in wagons) {
        i = Number(i);
        if (wagons[i] + qty <= max) {
          wagons[i] += qty;
          break;
        }
      }
    }
  }
  return wagons.join(" ");
}

function distArr(input) {
  let result = [];
  input.filter((el) => (!result.includes(el) ? result.push(el) : false));
  return result.join(" ");
}

function houseParty(input) {
  let result = [];
  let row = "";
  input.map((el) => {
    let [name, ...rest] = el.split(" ");
    if (!rest.includes("not")) {
      if (!result.includes(name)) {
        result.push(name);
      } else {
        row += `\n${name} is already in the list!`;
      }
    } else {
      if (result.includes(name)) {
        result = result.filter((it) => (it === name ? false : true));
      } else {
        row += `\n${name} is not in the list!`;
      }
    }
  });
  row += `\n${result.join("\n")}`;
  return row;
}

function sortByTwo(input) {
  return input
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n");
}

function sortAnnoying(input) {
  let result = [];
  input.sort((a, b) => b - a);
  while (input.length > 0) {
    if (result.length % 2 === 0) {
      result.push(input.shift());
    } else {
      result.push(input.pop());
    }
  }
  console.log(result.join(" "));
}

function bomb(...input) {
  let [target, bomb] = input;
  let [bombNum, power] = bomb;
  while (target.includes(bombNum)) {
    let start =
      target.indexOf(bombNum) - power < 0 ? 0 : target.indexOf(bombNum) - power;
    let end =
      target.indexOf(bombNum) + power > target.length - 1
        ? target.length - 1
        : target.indexOf(bombNum) + power;
    target.splice(start, end - start + 1);
  }

  return target.reduce((sum, el) => (sum += el), 0);
}

function getNum(...input) {
  let [firstArr, second] = input;
  let [elCountTake, elCountDel, numToSearch] = second;
  let nums = firstArr.splice(0, elCountTake).splice(elCountDel);

  return `Number ${numToSearch} occurs ${
    nums.filter((el) => el === numToSearch).length
  } times.`;
}

function arrManipulate(...input) {
  let output = "";
  let [arr, orders] = input;
  for (const line of orders) {
    let [order, num, ...rest] = line.split(" ");
    switch (order) {
      case "add":
        arr.splice(Number(num), 0, ...rest.map(Number));
        break;
      case "addMany":
        arr.splice(Number(num), 0, ...rest.map(Number));
        break;
      case "contains":
        output += arr.indexOf(Number(num));
        output += "\n";
        break;
      case "remove":
        arr.splice(Number(num), 1);
        break;
      case "shift":
        let count = Number(num) % arr.length;
        arr.push(arr.splice(0, count));
        arr = arr.flat();
        break;
      case "sumPairs":
        arr = arr.reduce((acc, el, i) => {
          if (isNaN(arr[i + 1])) {
            acc.push(el);
          } else {
            acc.push(el + arr[i + 1]);
          }
          arr.shift();
          return acc;
        }, []);
        break;
      case "print":
        output += `[ ${arr.join(", ")} ]`;
        return output;
    }
  }
}

function gladiator(input) {
  let inventory = input.shift().split(" ");
  for (const line of input) {
    let [order, item, upg] = line.split(/ |-/);
    switch (order) {
      case "Buy":
        if (!inventory.includes(item)) {
          inventory.push(item);
        }
        break;
      case "Trash":
        if (inventory.includes(item)) {
          inventory.splice(inventory.indexOf(item), 1);
        }
        break;
      case "Repair":
        if (inventory.includes(item)) {
          inventory.push(inventory.splice(inventory.indexOf(item), 1));
        }
        break;
      case "Upgrade":
        if (inventory.includes(item)) {
          inventory.splice(inventory.indexOf(item) + 1, 0, `${item}:${upg}`);
        }
        break;
    }
  }
  return inventory.join(" ");
}

function zeWall(input) {
  let targetHeght = 30;
  input.map(Number);
  let days = 0;
  let perFoot = 195;
  let elementCost = 1900;
  let output = [];
  let row = "";

  while (!input.every((el) => el === targetHeght)) {
    days++;
    let daily = 0;
    for (let sec in input) {
      sec = Number(sec);
      if (input[sec] < 30) {
        daily++;
        input[sec]++;
      }
    }
    output.push(daily * perFoot);
  }
  row = output.join(", ");
  row += `\n${output.reduce((d, el) => (d += el), 0) * elementCost} pesos`;
  return row;
}
console.log(zeWall([21, 25, 28]));
