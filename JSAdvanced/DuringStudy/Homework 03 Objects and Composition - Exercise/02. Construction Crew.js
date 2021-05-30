function solve(input) {
  let giveWater = function () {
    this.levelOfHydrated += 0.1 * this.experience * this.weight;
  };
  if (input.dizziness) {
    giveWater.apply(input);
    input.dizziness = false;
  }
  return input;
}
console.log(
  solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true })
);
console.log(
  solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true })
);
console.log(
  solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false })
);
