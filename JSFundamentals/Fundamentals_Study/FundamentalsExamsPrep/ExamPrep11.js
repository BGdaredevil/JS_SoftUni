function immitation(input) {
  let orders = {
    Move(str, theLength) {
      let toMove = str.substring(0, Number(theLength));
      return str.replace(toMove, "").concat(toMove);
    },
    Insert(str, loc, val) {
      loc = Number(loc);
      let first = str.substring(0, loc);
      let second = str.substring(loc);
      return first.concat(val, second);
    },
    ChangeAll(str, target, replacement) {
      //let reg = new RegExp(target);
      //return str.replace(reg, replacement);
      while (str.includes(target)) {
        str = str.replace(target, replacement);
      }
      return str;
    },
  };
  let message = input.shift();
  let line = input.shift();
  while (line !== "Decode") {
    let [order, ...rest] = line.split("|");
    message = orders[order](message, ...rest);
    line = input.shift();
  }
  return `The decrypted message is: ${message}`;
}

function adAstra(input) {
  let row = "";
  let dailyEnergy = 2000;
  let test = /(?<separ>[#|])(?<name>[A-Za-z ]+)\k<separ>(?<expDate>\d{2}\/\d{2}\/\d{2})\k<separ>(?<energy>\d+)\k<separ>/g;
  let totEnergy = 0;

  while ((info = test.exec(input)) !== null) {
    let { separ, name, expDate, energy } = { ...info.groups };
    energy = Number(energy);
    row += `Item: ${name}, Best before: ${expDate}, Nutrition: ${energy}\n`;
    totEnergy += energy;
  }

  return `You have food to last you for: ${Math.floor(
    totEnergy / dailyEnergy
  )} days!\n`.concat(row);
}

function pianist(input) {
  let row = "";
  let initial = Number(input.shift());
  let line = input.shift();
  let collection = {
    list: {},
    Add(piece, composer, key) {
      if (!collection.list.hasOwnProperty(piece)) {
        collection.list[piece] = { piece, composer, key };
        return `${piece} by ${composer} in ${key} added to the collection!\n`;
      } else {
        return `${piece} is already in the collection!\n`;
      }
    },
    Remove(piece) {
      if (collection.list.hasOwnProperty(piece)) {
        delete collection.list[piece];
        return `Successfully removed ${piece}!\n`;
      } else {
        return `Invalid operation! ${piece} does not exist in the collection.\n`;
      }
    },
    ChangeKey(piece, newKey) {
      if (collection.list.hasOwnProperty(piece)) {
        collection.list[piece].key = newKey;
        return `Changed the key of ${piece} to ${newKey}!\n`;
      } else {
        return `Invalid operation! ${piece} does not exist in the collection.\n`;
      }
    },
  };
  while (line !== "Stop") {
    if (initial > 0) {
      initial--;
      collection.Add(...line.split("|"));
    } else {
      let [order, ...rest] = line.split("|");
      row += collection[order](...rest);
    }
    line = input.shift();
  }
  row += Object.values(collection.list)
    .sort(
      (a, b) =>
        a.piece.localeCompare(b.piece) || a.composer.localeCompare(b.composer)
    )
    .reduce((acc, el) => {
      acc += `${el.piece} -> Composer: ${el.composer}, Key: ${el.key}\n`;
      return acc;
    }, "");
  return row;
}

function signCheck(num1, num2, num3) {
  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);

  function isPositive(x) {
    if (x > 0) {
      return true;
    } else {
      return false;
    }
  }

  if (num1 === 0 || num2 === 0 || num3 === 0) {
    console.log("Positive");
  } else {
    let result = (num1, num2, num3) => {
      if (isPositive(num1) && isPositive(num2) && isPositive(num3)) {
        return "Positive";
      } else if (isPositive(num1 * num2) && isPositive(num3)) {
        return "Positive";
      } else if (!isPositive(num1 * num2) && !isPositive(num3)) {
        return "Positive";
      } else {
        return "Negative";
      }
    };
    console.log(result(num1, num2, num3));
  }
}

//custom flat
function solve() {
  let toBeFlattened = [
    1,
    2,
    3,
    true,
    [5],
    {},
    [22, 33, 44, [111]],
    { theSecond: "ivan" },
    {},
  ];

  let final = toBeFlattened.reduce((result, curr) => {
    if (typeof curr !== "object") {
      result.push(curr);
    } else {
      let tempKey = Object.keys(curr);
      let temp = Object.values(curr);

      if (tempKey[0] === undefined && temp[0] === undefined) {
        result.push({});
        //return result;
      } else if (isNaN(tempKey[0])) {
        result.push(
          Object.entries(curr).reduce((acc, el) => {
            if (el[1].length > 1 && typeof el[1] !== "string") {
              result[el[0]] = { ...el[1] };
            } else {
              result[el[0]] = el[1];
            }
            return acc;
          }, {})
        );
      } else {
        while (temp.length > 0) {
          result.push(temp.shift());
        }
      }
    }
    return result;
  }, []);

  console.log(final);
}
solve();
