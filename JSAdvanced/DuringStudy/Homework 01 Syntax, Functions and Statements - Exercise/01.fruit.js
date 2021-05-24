function solve(...input) {
  let [food, qty, price] = input;
  qty = Number(qty) / 1000;
  price = Number(price);
  return `I need $${(qty * price).toFixed(2)} to buy ${qty.toFixed(
    2
  )} kilograms ${food}.`;
}
