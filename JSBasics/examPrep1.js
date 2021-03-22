function computer(input) {
  let vat = 0;
  let preVat = 0;
  let withVat = 0;
  let isSpecial;
  let isZero = true;
  for (const price of input) {
    if (price === "regular") {
      isSpecial = false;
      break;
    } else if (price === "special") {
      isSpecial = true;
      break;
    } else if (Number(price) < 0) {
      console.log("Invalid price!");
    } else {
      preVat += Number(price);
      vat += Number(price) * 0.2;
      withVat += Number(price) * 1.2;
      isZero = false;
    }
  }
  if (isSpecial) {
    withVat = withVat * 0.9;
  }
  if (isZero) {
    console.log("Invalid order!");
  } else {
    console.log(
      `Congratulations you've just bought a new computer!\nPrice without taxes: ${preVat.toFixed(
        2
      )}$\nTaxes: ${vat.toFixed(
        2
      )}$\n-----------\nTotal price: ${withVat.toFixed(2)}$`
    );
  }
}
// computer(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
// computer([
//   "1023",
//   "15",
//   "-20",
//   "-5.50",
//   "450",
//   "20",
//   "17.66",
//   "19.30",
//   "regular",
// ]);
// computer(["regular"]);

function lift(input) {
  let hasPlaces = false;
  let [que, lift] = input;
  lift = lift.split(" ").map((el) => Number(el));
  que = Number(que);
  for (let i = 0; i < lift.length; i++) {
    const cabin = lift[i];
    if (cabin === 4) {
      continue;
    } else {
      let empty = 4 - cabin;
      if (que - empty < 0) {
        lift[i] = cabin + que;
        break;
      } else {
        que -= empty;
        lift[i] = cabin + empty;
      }
    }
  }
  for (const cabin of lift) {
    if (cabin < 4) {
      hasPlaces = true;
      break;
    }
  }
  if (hasPlaces) {
    console.log(`The lift has empty spots!\n${lift.join(" ")}`);
  } else if (que !== 0) {
    console.log(
      `There isn't enough space! ${que} people in a queue!\n${lift.join(" ")}`
    );
  } else {
    console.log(`${lift.join(" ")}`);
  }
}
// lift(["15", "0 0 0 0"]);
// lift(["16", "0 0 0 0"]);
// lift(["20", "0 2 0"]);

function memory(input) {
  let moves = 0;
  let checkEqual = (a, b) => {
    if (seq[a] === seq[b]) {
      return true;
    } else {
      return false;
    }
  };
  let checkValid = (a, b) => {
    if (a === b) {
      return false;
    } else if (a >= seq.length || a < 0 || b >= seq.length || b < 0) {
      return false;
    } else {
      return true;
    }
  };
  let correctSplice = (array, index) => {
    array.splice(index, 1);
    return array;
  };
  let incorrectAdd = (array, num) => {
    let toAdd = `-${num}a`;
    array.splice(array.length / 2, 0, toAdd, toAdd);
    return array;
  };
  let seq = input.shift().split(" ");
  for (const line of input) {
    moves++;
    if (line === "end") {
      if (seq.length === 0) {
        console.log(`You have won in ${moves} turns!`);
      } else {
        console.log(`Sorry you lose :(\n${seq.join(" ")}`);
      }
      break;
    } else {
      let indexes = line.split(" ").map((el) => Number(el));
      if (checkValid(indexes[0], indexes[1])) {
        if (checkEqual(indexes[0], indexes[1])) {
          console.log(
            `Congrats! You have found matching elements - ${seq[indexes[0]]}!`
          );
          seq = correctSplice(seq, Math.max(indexes[0], indexes[1]));
          seq = correctSplice(seq, Math.min(indexes[0], indexes[1]));
          if (seq.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
          }
        } else {
          console.log(`Try again!`);
        }
      } else {
        console.log(`Invalid input! Adding additional elements to the board`);
        seq = incorrectAdd(seq, moves);
      }
    }
  }
}
//memory(["1 1 2 2 3 3 4 4 5 5 ", "1 0", "-1 0", "1 0 ", "1 0 ", "1 0 ", "end"]);
//memory(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
//memory(["a 2 4 a 2 4 ", "4 0 ", "0 2", "0 1", "0 1 ", "end"]);
