import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { getMyCars, getUser } from "../services/dataService.js";

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

const myCarsTemplate = (data) => html` <section id="my-listings">
  <h1>My car listings</h1>
  <div class="listings">
    ${data.map((x) => carCardTemplate(x))}
    ${data.length === 0 ? html` <p class="no-cars">You haven't listed any cars yet.</p>` : ""}
  </div>
</section>`;

export async function myListingsView(ctx) {
  const populator = async () => {
    const data = await getMyCars(getUser()?._id);

    return myCarsTemplate(data);
  };

  ctx.render(until(populator(), loaderTemplate()));
}
