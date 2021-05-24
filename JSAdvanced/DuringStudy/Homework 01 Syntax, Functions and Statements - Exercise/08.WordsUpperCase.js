function solve(input) {
  return input
    .toUpperCase()
    .split(/[^A-Z0-9]+/g)
    .filter((el) => el.length > 0)
    .join(", ");
}
