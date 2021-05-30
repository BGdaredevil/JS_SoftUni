function solve(input) {
  let row = "";
  let order = [];
  let result = input.reduce((acc, row) => {
    let [town, product, price] = row.split(" | ");
    price = Number(price);
    if (!order.includes(product)) {
      order.push(product);
    }

    if (!acc[product]) {
      acc[product] = [{ price, town }];
    } else {
      let found = false;
      for (const pair of acc[product]) {
        if (pair.town === town) {
          pair.price = price;
          found = true;
          break;
        }
      }
      if (!found) {
        acc[product].push({ price, town });
      }
    }

    return acc;
  }, {});
  for (const item of order) {
    let best = result[item]
      .slice()
      .sort((a, b) => a.price - b.price)
      .shift();

    row += `${item} -> ${best.price} (${best.town})\n`;
  }
  return row;
}
console.log(
  solve([
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "New York City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Mexico City | Audi | 100000",
    "Washington City | Mercedes | 1000",
  ])
);
