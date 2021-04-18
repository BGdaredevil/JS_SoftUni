function solve() {
  let result = Array.from(arguments).reduce((acc, arg) => {
    let type = typeof arg;
    console.log(`${type}: ${arg}`);
    if (!acc.hasOwnProperty(type)) {
      acc[type] = 0;
    }
    acc[type]++;
    return acc;
  }, {});
  Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .forEach((entry) => {
      console.log(`${entry[0]} = ${entry[1]}`);
    });
}

solve([], 3.333, 9.999);
