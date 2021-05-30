function solve(input) {
  const result = {};
  for (let i = 0; i < input.length; i++) {
    const item = input[i++];
    const val = Number(input[i]);
    if (result[item]) {
      result[item] += val;
    } else {
      result[item] = val;
    }
  }
  return result;
}
console.log(solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
console.log(
  solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"])
);
