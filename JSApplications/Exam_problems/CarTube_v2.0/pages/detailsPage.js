import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import { getOneListing, getUser, delListing } from "../services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const detailsTemplate = (car, delHandler, visitorId) => html` <section id="listing-details">
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

    ${visitorId === car._ownerId
      ? html`
          <div class="listings-buttons">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a href="javascript:void(0)" @click=${() => delHandler(car._id)} class="button-list"
              >Delete</a
            >
          </div>
        `
      : ""}
  </div>
</section>`;

export async function detailsView(ctx) {
  console.log("detailsView", ctx.params.id);

  const populator = async () => {
    const data = await getOneListing(ctx.params.id);
    console.log(data);

    async function delCar(id) {
      await delListing(id);
      ctx.page.redirect("/all-listings");
    }

    return detailsTemplate(data, delCar, getUser()?._id);
  };

  ctx.render(until(populator(), loaderTemplate()));
}
