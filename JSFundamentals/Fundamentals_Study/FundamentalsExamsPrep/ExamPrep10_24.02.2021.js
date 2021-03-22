function shoot(input) {
  let hits = 0;
  let targets = input.shift().split(" ").map(Number);
  for (let index of input) {
    if (index === "End") {
      return `Shot targets: ${hits} -> ${targets.join(" ")}`;
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
console.log(shoot(["24 50 36 70", "0", "4", "3", "1", "End"]));
console.log(shoot(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]));

function CS(input) {
  let [energy, ...rest] = input;
  energy = Number(energy);
  let frags = 0;
  for (let dist of rest) {
    if (dist === "End of battle" /* && energy >= 0 */) {
      console.log(`Won battles: ${frags}. Energy left: ${energy}`);
    } else if (energy - Number(dist) >= 0) {
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
