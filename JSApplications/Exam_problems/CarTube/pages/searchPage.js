import { html } from "../node_modules/lit-html/lit-html.js";
import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { getByYear } from "../services/dataService.js";
// import {
//   applyForTeam,
//   approveAplication,
//   createTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const carCardTemplate = (car) => html`<div class="listing">
  <div class="preview">
    <img src=${car.imageUrl} />
  </div>
  <h2>${car.brand} ${car.model}</h2>
  <div class="info">
    <div class="data-info">
      <h3>Year: ${car.year}</h3>
      <h3>Price: ${car.price} $</h3>
    </div>
    <div class="data-buttons">
      <a href="/details/${car._id}" class="button-carDetails">Details</a>
    </div>
  </div>
</div>`;

const searchTemplate = (form) => html` <section id="search-cars">
  <h1>Filter by year</h1>

  <div class="container">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired production year"
    />
    <button @click=${form.submit} class="button-list">Search</button>
  </div>
  ${form.err !== undefined ? html`<h2>${form.err.message}</h2>` : ""}

  <!-- Display all records -->

  ${form.data !== undefined
    ? html`
        <h2>Results:</h2>
        <div class="listings">
          ${form.data.length > 0
            ? html` ${form.data.map((x) => carCardTemplate(x))} `
            : html` <p class="no-cars">No results.</p> `}
        </div>
      `
    : ""}
</section>`;

export async function searchView(ctx) {
  console.log("search");

  const form = { submit: onSubmit };

  ctx.render(searchTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    let query = e.target.parentElement.querySelector("input").value.trim();
    if (query === "") {
      form.err = {
        message: "Please enter a valid year",
      };
      ctx.render(searchTemplate(form));
      return;
    }
    query = Number(query);
    if (isNaN(query)) {
      form.err = {
        message: "Please enter a valid year",
      };
      ctx.render(searchTemplate(form));
      return;
    }

    try {
      let theNewThing = await getByYear(query);
      console.log(theNewThing);
      form.err = undefined;
      form.data = theNewThing;
      ctx.render(searchTemplate(form));
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
