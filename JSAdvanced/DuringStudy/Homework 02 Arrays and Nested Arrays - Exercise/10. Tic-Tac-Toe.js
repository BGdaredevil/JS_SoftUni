function solve(input) {
  let currPlayer = "X";
  let board = [];
  let switcher = {
    X: "O",
    O: "X",
  };
  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push(false);
    }
  }

  for (el of input) {
    let [r, c] = el.split(" ").map(Number);

    if (putMark(r, c, currPlayer)) {
      if (checker(currPlayer)) {
        let row = `Player ${currPlayer} wins!\n`;
        board.map((e) => (row = row + e.join("\t") + "\n"));
        return row;
      }
      currPlayer = switcher[currPlayer];
    }

    if (!board.flat().includes(false)) {
      let row = "The game ended! Nobody wins :(\n";
      board.map((e) => (row = row + e.join("\t") + "\n"));
      return row;
    }
  }

  function putMark(row, col, player) {
    if (board[row][col] === false) {
      board[row][col] = player;
      return true;
    } else {
      console.log(`This place is already taken. Please choose another!`);
      return false;
    }
  }

  function checker(player) {
    // horizontal
    for (const hLine of board) {
      if (hLine.every((el) => el === player)) {
        return true;
      }
    }
    // vertical
    for (let row = 0; row < board.length; row++) {
      let tempCol = [];
      for (let col = 0; col < board.length; col++) {
        tempCol.push(board[col][row]);
      }
      if (tempCol.every((el) => el === player)) {
        return true;
      }
    }
    // diagonal

    if ([board[0][0], board[1][1], board[2][2]].every((el) => el === player)) {
      return true;
    }

    if ([board[0][2], board[1][1], board[2][0]].every((el) => el === player)) {
      return true;
    }

    return false;
  }
}
console.log(
  solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"])
);
