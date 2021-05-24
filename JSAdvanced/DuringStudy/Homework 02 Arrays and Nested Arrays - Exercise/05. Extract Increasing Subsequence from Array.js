function solve(arr) {
  return arr.reduce(
    (acc, el) => {
      if (acc.result.length === 0) {
        acc.biggest = el;
        acc.result.push(el);
      } else {
        if (acc.biggest <= el) {
          acc.biggest = el;
          acc.result.push(el);
        }
      }
      return acc;
    },
    { biggest: -Infinity, result: [] }
  ).result;
}
