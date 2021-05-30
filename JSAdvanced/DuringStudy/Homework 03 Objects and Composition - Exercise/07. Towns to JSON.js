function solve(input) {
  let table = input.slice();
  let keys = table
    .shift()
    .split("|")
    .filter((s) => s.length > 0)
    .map((x) => x.trim());
  let result = table.reduce((a, townInfo) => {
    a.push(
      townInfo
        .split("|")
        .filter((s) => s.length > 0)
        .map((y) => y.trim())
        .reduce((acc, el, loc) => {
          if (loc > 0) {
            el = Math.round(Number(el) * 100) / 100;
          }
          acc[keys[loc]] = el;
          return acc;
        }, {})
    );
    return a;
  }, []);
  return JSON.stringify(result);
}
console.log(
  solve([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
console.log(
  solve([
    "| Town | Latitude | Longitude |",
    "| Veliko Turnovo | 43.0757 | 25.6172 |",
    "| Monatevideo | 34.50 | 56.11 |",
  ])
);
