import { html } from "./node_modules/lit-html/lit-html.js";
import { ifDefined } from "./node_modules/lit-html/directives/if-defined.js";

export let resultCalc = (num) => html`<div id="result">${num} matches found</div>`;

export let townLiElement = (town) => html`<li class=${ifDefined(town.mark)}>${town.name}</li>`;

export let townUlElement = (townArr) => html`<ul>
  ${townArr.map((t) => townLiElement(t))}
</ul> `;

export let articleElement = (tArr, seek, num) => html` <div id="towns">${townUlElement(tArr)}</div>
  <input type="text" id="searchText" />
  <button @click=${seek}>Search</button>
  ${num !== undefined ? resultCalc(num) : ""}`;
