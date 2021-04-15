function colorize() {
  // TODO
  let tableRows = document.querySelectorAll("tr");
  for (const row of tableRows) {
    if (row.rowIndex % 2 === 1) {
      row.style.backgroundColor = "teal";
    }
    //console.log(row.rowIndex);
  }
}
