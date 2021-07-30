import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { getAllListings } from "../services/dataService.js";

const carCardTemplate = (car) => html` <div class="listing">
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

const homeTemplate = (data) => html` <section id="car-listings">
  <h1>Car Listings</h1>
  <div class="listings">
    ${data.map((x) => carCardTemplate(x))}
    ${data.length === 0 ? html` <p class="no-cars">No cars in database.</p>` : ""}
  </div>
</section>`;

export async function carListingsView(ctx) {
  const populator = async () => {
    const data = await getAllListings();
    return homeTemplate(data);
  };

  ctx.render(until(populator(), loaderTemplate()));
}
