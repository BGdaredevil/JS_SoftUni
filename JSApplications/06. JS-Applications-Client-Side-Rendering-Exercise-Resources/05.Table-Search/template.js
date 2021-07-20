import { html } from "./node_modules/lit-html/lit-html.js";
import { ifDefined } from "./node_modules/lit-html/directives/if-defined.js";

let tableRow = (person) => html` <tr class=${ifDefined(person.class)}>
  <td>${person.firstName} ${person.lastName}</td>
  <td>${person.email}</td>
  <td>${person.course}</td>
</tr>`;

export let table = (dataArr) => html`${dataArr.map((p) => tableRow(p))}`;
