function solve(input) {
  let [cols, rows, x, y] = input.map(Number);
  let board = [];
  for (let row = 0; row < rows; row++) {
    board.push([]);
    for (let col = 0; col < cols; col++) {
      board[row].push(0);
    }
  }
  board[x][y] = 1;
  for (let row in board) {
    row = Number(row);
    for (let col in board) {
      col = Number(col);
      if (row != x || col != y) {
        board[row][col] =
          Math.floor(Math.max(Math.abs(row - x), Math.abs(col - y))) + 1;
      }
    }
  }
  return board.map((el) => el.join(" ")).join("\n");
}
solve([5, 5, 2, 2]);
