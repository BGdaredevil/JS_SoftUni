function greatestCD(...input) {
  let [first, second] = input;
  let max = Math.max(first, second);
  let min = Math.min(first, second);
  let rem;
  while (rem !== 0) {
    rem = max % min;
    if (rem === 0) {
      return min;
    } else {
      max = min;
      min = rem;
    }
  }
}
