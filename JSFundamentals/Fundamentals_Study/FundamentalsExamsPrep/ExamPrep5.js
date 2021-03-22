function CS(input) {
  let [energy, ...rest] = input;
  energy = Number(energy);
  let frags = 0;
  for (let dist of rest) {
    if (dist === "End of battle" /* && energy >= 0 */) {
      console.log(`Won battles: ${frags}. Energy left: ${energy}`);
    } else if (energy >= 0) {
      energy -= Number(dist);
      frags++;
      if (frags % 3 === 0) {
        energy += frags;
      }
    } else {
      console.log(
        `Not enough energy! Game ends with ${frags} won battles and ${energy} energy`
      );
      break;
    }
  }
}

function shoot(input) {
  let hits = 0;
  let targets = input
    .shift()
    .split(" ")
    .map((el) => Number(el));
  for (let index of input) {
    if (index === "End") {
      console.log(`Shot targets: ${hits} -> ${targets.join(" ")}`);
    } else {
      index = Number(index);
      if (index < 0 || index > targets.length - 1) {
        continue;
      }
      if (targets[index] !== -1) {
        hits++;
        let val = targets[index];
        targets[index] = -1;
        targets = targets.map((el) => {
          if (el > val && el !== -1) {
            el -= val;
          } else if (el !== -1) {
            el += val;
          }
          return el;
        });
      }
    }
  }
}

function moving(input) {
  let isEnd = false;
  let targets = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  for (let line of input) {
    let [order, index, val] = line.split(" ");
    index = Number(index);
    val = Number(val);
    switch (order) {
      case "Shoot":
        if (targets[index] !== undefined) {
          targets[index] = targets[index] - val;
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }
        break;
      case "Add":
        if (targets[index] === undefined) {
          console.log("Invalid placement!");
        } else {
          targets.splice(index, 0, val);
        }
        break;
      case "Strike":
        let start = index - val;
        let end = index + val;
        let isOk = true;
        for (let i = start; i <= end; i++) {
          if (targets[i] === undefined) {
            isOk = false;
            break;
          }
        }
        if (isOk) {
          targets.splice(start, end - start + 1);
        } else {
          console.log(`Strike missed!`);
        }
        break;
      case "End":
        isEnd = true;
        console.log(targets.join("|"));
        break;
    }
    if (isEnd) {
      break;
    }
  }
}
