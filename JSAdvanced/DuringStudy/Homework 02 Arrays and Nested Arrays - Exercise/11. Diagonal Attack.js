function solve(input) {
  let matrix = input.map((el) => (el = el.split(" ").map(Number)));
  let left = 0;
  let right = 0;
  for (let row in matrix) {
    row = Number(row);
    for (let col in matrix) {
      col = Number(col);
      if (row === col) {
        left += matrix[row][col];
      }
      if (row + col + 1 === matrix.length) {
        right += matrix[row][col];
      }
    }
  }
  let output = [];
  for (let row in matrix) {
    row = Number(row);
    let tempOut = [];
    for (let col in matrix) {
      col = Number(col);
      if (left === right) {
        if (row !== col) {
          if (row + col + 1 !== matrix.length) {
            matrix[row][col] = left;
          }
        }
      }
      tempOut.push(matrix[row][col]);
    }
    output.push(tempOut.join(" "));
  }
  console.log(output.join("\n"));
}
solve([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
