import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import { getSingleArticle, getUser, delSpecificArticle } from "../services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const detailsTemplate = (data, currUserId, delArticle) => html` <div class="container details">
  <div class="details-content">
    <h2>${data.title}</h2>
    <strong>${data.category}</strong>
    <p>${data.content}</p>
    <div class="buttons">
      ${data._ownerId === currUserId
        ? html`
            <a href="javascript:void(0)" @click=${() => delArticle(data._id)} class="btn delete"
              >Delete</a
            >
            <a href="/edit/${data._id}" class="btn edit">Edit</a>
          `
        : html` <a href="/home" class="btn edit">Back</a> `}
    </div>
  </div>
</div>`;

export async function detailsView(ctx) {
  console.log("detailsView");

  const populator = async () => {
    const data = await getSingleArticle(ctx.params.id);
    console.log(data);
    return detailsTemplate(data, getUser()._id, delArticle);
  };

  async function delArticle(id) {
    await delSpecificArticle(id);
    ctx.page.redirect("/home");
  }

  ctx.render(until(populator(), loaderTemplate()));
}
