function sumTable() {
  let lala = [...document.querySelectorAll("td")]
    .filter((el) => el.cellIndex === 1 && el.id === "")
    .reduce((acc, el) => (acc += Number(el.innerText)), 0);
  document.getElementById("sum").innerText = lala.toFixed(2);
}
