function solve(input, times) {
  times = Number(times);
  let rotator = (arr) => arr.unshift(arr.pop());
  for (let i = 0; i < times; i++) {
    rotator(input);
  }
  return input.join(" ");
}
