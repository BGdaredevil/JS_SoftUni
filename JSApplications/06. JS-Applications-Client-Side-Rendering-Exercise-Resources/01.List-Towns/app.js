import { render, html } from "./node_modules/lit-html/lit-html.js";
import { ulElements } from "./template.js";

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let txt = new FormData(form).get("towns").split(" ");

  render(ulElements(txt), document.querySelector("#root"));
  form.reset();
});

// let ulElements = (arr) =>
//   html`<ul>
//     ${arr.map((x) => html`<li>${x}</li>`)}
//   </ul>`;
