import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import {
  getSpecificShoe,
  getUser,
  delSpecificShoe,
  purchaseShoe,
  getPurchases,
} from "../Services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const detailsTemplate = (data, user, delShoe, purchase) => html` <div class="offer-details">
  <h1>${data.brand} ${data.name}</h1>
  <div class="info">
    <img src=${data.imageUrl} alt="" />
    <div class="description">
      ${data.description}
      <br />
      <br />
      <p class="price">$${data.price.toFixed(2)}</p>
    </div>
  </div>
  <p>Buyers: ${data.purchases.length}</p>
  <div class="actions">
    ${data._ownerId === user._id
      ? html` <a href="/edit/${data._id}">Edit</a>
          <a href="javascript:void(0)" @click=${() => delShoe(data._id)}>Delete</a>`
      : html`
          ${data.purchases.some((x) => x.email === user.email)
            ? html` <span>You bought it</span>`
            : html`<a href="javascript:void(0)" @click=${(e) => purchase(user.email, data._id, e)}
                >Buy</a
              >`}
        `}
  </div>
</div>`;

export async function detailsView(ctx) {
  console.log("detailsView");
  let data;
  let purchases;
  const populator = async () => {
    data = await getSpecificShoe(ctx.params.id);
    purchases = await getPurchases(data._id);
    data.purchases = Object.values(purchases);
    console.log(data);
    return detailsTemplate(data, getUser(), delShoe, purchase);
  };

  ctx.render(until(populator(), loaderTemplate()));

  async function purchase(email, itemId, e) {
    await purchaseShoe({ email, itemId });
    ctx.page.redirect(`/details/${itemId}`);
  }

  async function delShoe(id) {
    await delSpecificShoe(id);
    ctx.page.redirect("/home");
  }
}
