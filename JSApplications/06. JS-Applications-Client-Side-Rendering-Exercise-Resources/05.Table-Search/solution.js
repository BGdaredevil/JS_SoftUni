import { askServer } from "./dataService.js";
import { render } from "./node_modules/lit-html/lit-html.js";
import { table } from "./template.js";
// import { selectTemplate } from "./template.js";

let url = "http://localhost:3030/jsonstore/advanced/table";
let rootElement = document.querySelector("#tableBody");

document.querySelector("#searchBtn").addEventListener("click", () => {
  let data = Object.values(usersObjData).map((x) => Object.assign({}, x));
  let txt = document.querySelector("#searchField").value.toLowerCase().trim();

  if (txt === "") {
    return;
  }

  data
    .filter((p) => Object.values(p).some((v) => v.toLowerCase().includes(txt)))
    .forEach((p) => (p.class = "select"));

  renderTable(data);
});

let usersObjData;

(async function getData() {
  usersObjData = await askServer(url, "get", undefined, true);
  let tempUsers = Object.values(usersObjData);
  renderTable(tempUsers);
})();

function renderTable(dataObj) {
  render(table(dataObj), rootElement);
}
