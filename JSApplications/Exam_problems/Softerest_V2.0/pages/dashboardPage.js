import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import { getAllIdeas } from "../services/dataService.js";

const ideaCard = (idea) => html` <div
  class="card overflow-hidden current-card details"
  style="width: 20rem; height: 18rem"
>
  <div class="card-body">
    <p class="card-text">${idea.title}</p>
  </div>
  <img class="card-image" src=${idea.img} alt="Card image cap" />
  <a class="btn" href="/details/${idea._id}">Details</a>
</div>`;

const dashboardTemplate = (data) => html` <div id="dashboard-holder">
  ${data.length > 0
    ? html` ${data.map((d) => ideaCard(d))} `
    : html` <h1>No ideas yet! Be the first one :)</h1> `}
</div>`;

export async function dashboardView(ctx) {
  console.log("dashboardView");

  const populator = async () => {
    const data = await getAllIdeas();

    return dashboardTemplate(data);
  };

  ctx.render(until(populator(), loaderTemplate()));
}
