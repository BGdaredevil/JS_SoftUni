function generateReport() {
  let check = Array.from(document.querySelectorAll("input")).filter(
    (el) => el.checked === true
  );
  let colKeys = check.slice().map((el) => (el = el.name.trim()));
  let cols = check.slice().map((el) => (el = el.parentElement.cellIndex));
  let rows = Array.from(document.querySelectorAll("tbody tr"));
  //   console.log(check[1].parentElement);
  //   console.log(colKeys);
  //   console.log(cols);
  //   console.log(rows);
  //   console.log(cells);

  let result = rows.reduce((acc, el) => {
    let currentCells = Array.from(el.children).filter((e) => {
      if (cols.includes(e.cellIndex)) {
        return true;
      } else {
        return false;
      }
    });
    let current = currentCells.reduce((a, e, ind) => {
      a[colKeys[ind]] = e.innerText;
      return a;
    }, {});
    acc.push(current);
    return acc;
  }, []);

  let temp = document.getElementById("output");
  temp.value = JSON.stringify(result, null, 3);
  console.log(JSON.parse(document.getElementById("output").value));
}
