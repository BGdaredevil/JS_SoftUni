import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { delSpecificListing, getSpecificListing, getUser } from "../services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const detailsTemplate = (car, visitorId, delCar) => html` <section id="listing-details">
  <h1>Details</h1>
  <div class="details-info">
    <img src=${car.imageUrl} />
    <hr />
    <ul class="listing-props">
      <li><span>Brand:</span>${car.brand}</li>
      <li><span>Model:</span>${car.model}</li>
      <li><span>Year:</span>${car.year}</li>
      <li><span>Price:</span>${car.price}$</li>
    </ul>

    <p class="description-para">${car.description}</p>

    ${car._ownerId === visitorId
      ? html` <div class="listings-buttons">
          <a href="/edit/${car._id}" class="button-list">Edit</a>
          <a
            @click=${async () => await delCar(car._id)}
            href="javascript:void(0)"
            class="button-list"
            >Delete</a
          >
        </div>`
      : ""}
  </div>
</section>`;

export async function detailsView(ctx) {
  const populator = async () => {
    const data = await getSpecificListing(ctx.params.id);
    return detailsTemplate(data, getUser()?._id, delCar);
  };

  ctx.render(until(populator(), loaderTemplate()));

  async function delCar(id) {
    await delSpecificListing(id);
    ctx.page.redirect("/car-listings");
  }
}
