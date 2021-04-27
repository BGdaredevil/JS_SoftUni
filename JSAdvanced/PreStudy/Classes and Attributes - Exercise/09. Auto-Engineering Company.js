function solve(input) {
  let list = input.reduce((acc, el) => {
    let [manufacturer, model, producedCount] = el.split(" | ");

    if (!acc.hasOwnProperty(manufacturer)) {
      acc[manufacturer] = {};
    }

    if (!acc[manufacturer].hasOwnProperty(model)) {
      acc[manufacturer][model] = 0;
    }

    acc[manufacturer][model] += Number(producedCount);

    return acc;
  }, {});

  return Object.entries(list)
    .reduce((acc, el) => {
      let [make, rest] = el;
      acc += `${make}\n`;
      acc += Object.entries(rest).reduce((a, e) => {
        a += `###${e[0]} -> ${e[1]}\n`;
        return a;
      }, "");
      return acc;
    }, "")
    .trim();
}
console.log(
  solve([
    "Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10",
  ])
);
