import { html } from "./node_modules/lit-html/lit-html.js";
import { ifDefined } from "./node_modules/lit-html/directives/if-defined.js";

let optionTemplate = (option) => html`<option value=${option._id}>${option.text}</option>`;

export let selectTemplate = (options) => html`${options.map((o) => optionTemplate(o))}`;
