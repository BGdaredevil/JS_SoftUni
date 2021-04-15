function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let listItems = Array.from(document.querySelectorAll("tbody tr"));

  function onClick() {
    let searchItem = document.getElementById("searchField").value.toLowerCase();
    document.getElementById("searchField").value = "";
    listItems.map((row) => {
      if (row.innerText.toLowerCase().includes(searchItem)) {
        row.setAttribute("class", "select");
      } else {
        row.removeAttribute("class");
      }
    });
  }
}
