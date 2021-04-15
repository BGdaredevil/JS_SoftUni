function deleteByEmail() {
  let tbody = Array.from(document.querySelectorAll("#customers tbody tr"));
  let strings = Array.from(
    document.querySelectorAll("#customers tbody tr")
  ).map((el) => (el = el.innerText));

  let toFind = document.querySelector("input").value;

  let result = document.querySelector("#result");

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].includes(toFind)) {
      tbody[i].parentNode.removeChild(tbody[i]);
      result.innerText = "Deleted.";
      return;
    }
  }
  result.innerText = "Not found.";
}
