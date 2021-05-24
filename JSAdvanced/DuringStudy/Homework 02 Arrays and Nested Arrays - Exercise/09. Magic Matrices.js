function solve(matr) {
  if (matr[0].length !== matr.length) {
    return false;
  }
  let sum = matr[0].reduce((a, e) => (a += e), 0);
  // horizontal
  for (const arr of matr) {
    let tempSum = arr.reduce((a, e) => (a += e), 0);
    if (sum !== tempSum) {
      return false;
    }
  }
  //  vertical
  for (let row = 0; row < matr.length; row++) {
    const arr = matr[row];
    let tempSum = 0;
    for (let col = 0; col < arr.length; col++) {
      tempSum += matr[col][row];
    }
    if (sum !== tempSum) {
      return false;
    }
  }
  return true;
}
console.log(
  solve([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
);
