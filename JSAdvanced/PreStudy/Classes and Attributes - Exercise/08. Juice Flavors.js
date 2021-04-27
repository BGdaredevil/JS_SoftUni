function solve(input) {
  let processed = input.reduce(
    (acc, row) => {
      let [juceName, qty] = row.split(" => ");
      if (!acc.tank.hasOwnProperty(juceName)) {
        acc.tank[juceName] = 0;
      }
      acc.tank[juceName] += Number(qty);
      if (acc.tank[juceName] / 1000 >= 1) {
        if (!acc.bottles.hasOwnProperty(juceName)) {
          acc.bottles[juceName] = 0;
        }
        acc.bottles[juceName] += Math.floor(acc.tank[juceName] / 1000);
        acc.tank[juceName] = acc.tank[juceName] % 1000;
      }

      return acc;
    },
    { tank: {}, bottles: {} }
  );
  let output = Object.entries(processed.bottles).reduce((acc, el) => {
    acc += `${el.join(" => ")}\n`;
    return acc;
  }, "");
  return output.trim();
}
console.log(
  solve([
    "Orange => 2000",
    "Peach => 1432",
    "Banana => 450",
    "Peach => 600",
    "Strawberry => 549",
  ])
);
console.log(
  solve([
    "Kiwi => 234",
    "Pear => 2345",
    "Watermelon => 3456",
    "Kiwi => 4567",
    "Pear => 5678",
    "Watermelon => 6789",
  ])
);
