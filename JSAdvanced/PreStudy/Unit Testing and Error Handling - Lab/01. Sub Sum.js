function solve(arr, start, end) {
  if (!Array.isArray(arr)) {
    return NaN;
  }

  if (start < 0) {
    start = 0;
  }
  if (end >= arr.length) {
    end = arr.length - 1;
  }

  let working = arr.slice(start, end + 1).reduce((acc, el) => {
    acc += Number(el);
    return acc;
  }, 0);

  if (!isNaN(working)) {
    return working;
  } else {
    return NaN;
  }
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, "twenty", 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve("text", 0, 2));
