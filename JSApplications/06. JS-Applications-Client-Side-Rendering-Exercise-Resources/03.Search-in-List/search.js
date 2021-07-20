import { render } from "./node_modules/lit-html/lit-html.js";
import { articleElement } from "./template.js";
import { towns } from "./towns.js";

let data = towns.map((t) => ({ name: t }));
render(articleElement(data, getMatchingCount), document.querySelector("article"));

function getMatchingCount(e) {
  let txt = document.querySelector("#searchText").value.toLowerCase();

  if (txt.length === 0) {
    return;
  }
  let dataCopy = data.map((t) =>
    t.name.toLowerCase().includes(txt) ? { name: t.name, mark: "active" } : t
  );
  let count = dataCopy.filter((t) => t.mark !== undefined).length;
  render(articleElement(dataCopy, getMatchingCount, count), document.querySelector("article"));
}
