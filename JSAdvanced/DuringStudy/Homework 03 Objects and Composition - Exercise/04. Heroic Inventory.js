function solve(input) {
  return JSON.stringify(
    input.reduce((acc, hero) => {
      let [hName, hLevel, ...items] = hero.split(/ \/ |, /g);
      acc.push({
        name: hName,
        level: Number(hLevel),
        items,
      });
      return acc;
    }, [])
  );
}
console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
console.log(solve(["Jake / 1000 / Gauss, HolidayGrenade"]));
