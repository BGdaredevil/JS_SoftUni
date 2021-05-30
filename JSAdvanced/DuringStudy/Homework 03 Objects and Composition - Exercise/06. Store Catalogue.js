function solve(input) {
  let char = "";
  let row = "";
  let result = input.reduce((acc, line) => {
    let [item, price] = line.split(" : ");
    if (!acc[item]) {
      acc[item] = Number(price);
    }
    return acc;
  }, {});
  Object.entries(result)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((line) => {
      let tempChar = line[0][0];
      if (char !== tempChar) {
        char = tempChar;
        row += `${tempChar.toUpperCase()}\n`;
      }
      row += `  ${line[0]}: ${line[1]}\n`;
    });
  return row;
}
console.log(
  solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
  ])
);
