import { cats } from "./catSeeder.js";
import { render, html } from "./node_modules/lit-html/lit-html.js";
import { catTemplate } from "./templates.js";

let root = document.querySelector("section#allCats");
render(
  html`<ul>
    ${cats.map((c) => catTemplate(c))}
  </ul>`,
  root
);
