function solve(...input) {
  let num = Number(input.shift());
  let result = "";
  let operations = {
    chop(a) {
      return a / 2;
    },
    dice(a) {
      return Math.sqrt(a);
    },
    spice(a) {
      return a + 1;
    },
    bake(a) {
      return a * 3;
    },
    fillet(a) {
      return a * 0.8;
    },
  };
  for (const action of input) {
    num = operations[action](num);
    result += `${num}\n`;
  }
  return result;
}
