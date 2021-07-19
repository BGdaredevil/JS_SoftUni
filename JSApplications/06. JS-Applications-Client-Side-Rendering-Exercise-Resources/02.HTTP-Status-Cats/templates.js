import { render, html } from "./node_modules/lit-html/lit-html.js";
import { ifDefined } from "./node_modules/lit-html/directives/if-defined.js";

export let catTemplate = (cat) => html` <li>
  <img src=${ifDefined(cat.imageLocation)} width="250" height="250" alt="Card image cap" />
  <div class="info">
    <button class="showBtn" @click=${event}>Show status code</button>
    <div class="status" style="display: none" id=${cat.id}>
      <h4>Status Code: ${cat.statusCode}</h4>
      <p>${cat.statusMessage}</p>
    </div>
  </div>
</li>`;

let event = (e) => {
  let div = e.target.closest(".info").querySelector(".status");
  e.target.innerText = e.target.innerText.includes("Show")
    ? "Hide status code"
    : "Show status code";
  div.style.display = div.style.display === "none" ? "block" : "none";
};
