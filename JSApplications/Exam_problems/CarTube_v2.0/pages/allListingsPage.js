import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import {
  getAllListings,
  getListingsByYear,
  getMyListings,
  getUser,
} from "../services/dataService.js";
import notificationService from "../services/notificationService.js";

const listingCard = (car) => html`
  <div class="listing">
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
  </div>
`;

const allListingsTemplate = (data) => html` <section id="car-listings">
  <h1>Car Listings</h1>
  <div class="listings">
    ${data.length > 0
      ? html` ${data.map(listingCard)} `
      : html` <p class="no-cars">No cars in database.</p> `}
  </div>
</section>`;

const myListingsTemplate = (data) => html` <section id="my-listings">
  <h1>My car listings</h1>
  <div class="listings">
    <!-- Display all records -->
    ${data.length > 0
      ? html` ${data.map(listingCard)} `
      : html` <p class="no-cars">You haven't listed any cars yet.</p> `}
  </div>
</section>`;

const searchTemplate = (data) => html` <section id="search-cars">
  <h1>Filter by year</h1>
  <div class="container">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired production year"
    />
    <button
      @click=${(e) => {
        let year = e.target.parentElement.querySelector("input").value.trim();
        if (isNaN(year) || year == "") {
          notificationService.createNotification("Please enter a valid year");
          return;
        }
        data.handler(year);
      }}
      class="button-list"
    >
      Search
    </button>
  </div>

  ${data.list === undefined
    ? ""
    : html`
        <h2>Results:</h2>
        <div class="listings">
          ${data.list.length > 0
            ? html` ${data.list.map(listingCard)} `
            : html` <p class="no-cars">No results.</p> `}
        </div>
      `}
</section>`;

export async function allListingsView(ctx) {
  const populator = async () => {
    const data = await getAllListings();
    return allListingsTemplate(data);
  };

  ctx.render(until(populator(), loaderTemplate()));
}

export async function myListingsView(ctx) {
  const user = getUser();
  const populator = async () => {
    const data = await getMyListings(user._id);
    return myListingsTemplate(data);
  };

  ctx.render(until(populator(), loaderTemplate()));
}

export async function searchView(ctx) {
  console.log("search");
  let data = { handler: getResult };
  ctx.render(searchTemplate(data));

  async function getResult(year) {
    ctx.render(until(populator(year), loaderTemplate()));
  }

  const populator = async (num) => {
    data.list = await getListingsByYear(num);
    console.log(data.list);
    return searchTemplate(data);
  };
}
