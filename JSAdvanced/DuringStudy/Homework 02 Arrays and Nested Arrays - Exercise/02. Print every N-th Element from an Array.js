function solve(arr, num) {
  return arr.filter((el, loc) => (loc % num === 0 ? true : false));
}
solve(["5", "20", "31", "4", "20"], 2);
