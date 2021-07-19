import { html } from "./node_modules/lit-html/lit-html.js";

export let liElement = (e) => html`<li>${e}</li>`;

export let ulElements = (arr) =>
  html`<ul>
    ${arr.map((x) => liElement(x))}
  </ul>`;
