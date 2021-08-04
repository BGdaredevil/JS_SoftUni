import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { deleteIdea, getOneIdea, getUser } from "../services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const detailsTemplate = (data, userId) => html` <div class="container home some">
  <img class="det-img" src=${data.img} />
  <div class="desc">
    <h2 class="display-5">${data.title}</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">${data.description}</p>
  </div>
  ${data._ownerId === userId
    ? html` <div class="text-center">
        <a class="btn detb" href="javascript:void(0)" @click=${() => data.del(data._id)}>Delete</a>
      </div>`
    : ""}
</div>`;

export async function detailsView(ctx) {
  console.log("detailsView");

  const populator = async () => {
    const data = await getOneIdea(ctx.params.id);
    data.del = del;

    return detailsTemplate(data, getUser()?._id);
  };

  ctx.render(until(populator(), loaderTemplate()));

  async function del(id) {
    await deleteIdea(id);
    ctx.page.redirect("/dashboard");
  }
}
