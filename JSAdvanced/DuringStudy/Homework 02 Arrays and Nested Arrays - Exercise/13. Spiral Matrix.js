function solve(...input) {
  let [rows, cols] = input.map(Number);
  let row = 0;
  let col = 0;
  let step = 0;
  let count = 1;
  let board = [];
  for (let row = 0; row < rows; row++) {
    board.push([]);
    for (let col = 0; col < cols; col++) {
      board[row].push(0);
    }
  }
  while (count <= rows * cols) {
    while (col < cols - step) {
      board[row][col] = count;
      col++;
      count++;
    }
    col--;
    row++;
    while (row < rows - step) {
      board[row][col] = count;
      row++;
      count++;
    }
    row--;
    while (col > 0 + step) {
      col--;
      board[row][col] = count;
      count++;
    }
    step++;
    while (row > 0 + step) {
      row--;
      board[row][col] = count;
      count++;
    }
    col++;
  }
  return board.map((el) => el.join(" ")).join("\n");
}
console.log(solve(6, 6));
