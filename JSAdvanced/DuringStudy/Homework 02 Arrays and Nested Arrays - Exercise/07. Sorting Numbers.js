function solve(arr) {
  let tempSort = arr.sort((a, b) => a - b);
  let sorted = [];
  while (tempSort.length > 0) {
    sorted.push(tempSort.shift());
    if (tempSort.length > 0) {
      sorted.push(tempSort.pop());
    }
  }
  return sorted;
}
