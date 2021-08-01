import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { getAllcontent } from "../services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const articleTemplate = (article) => html` <article>
  <h3>${article.title}</h3>
  <p>${article.content}</p>
  <a href="/details/${article._id}" class="btn details-btn">Details</a>
</article>`;

const categoryTemplate = (categoryName, artList) => html` <section class="js">
  <h2>${categoryName}</h2>
  <div class="articles">
    ${artList.sort((a, b) => b.title.localeCompare(a.title)).map((x) => articleTemplate(x))}
  </div>
</section>`;

const homeTemplate = (data) => html` <div class="content">
  ${Object.entries(data).length > 0
    ? html` ${Object.entries(data).map(([k, v]) => categoryTemplate(k, v))} `
    : html` <h3 class="no-articles">No articles yet</h3> `}
</div>`;

export async function homeView(ctx) {
  console.log("homeView");

  const populator = async () => {
    const data = await getAllcontent();
    let arrangedData = data.reduce((acc, el) => {
      if (!acc.hasOwnProperty(el.category)) {
        acc[el.category] = [];
      }
      acc[el.category].push(el);
      return acc;
    }, {});
    console.log(data);
    console.log(arrangedData);

    return homeTemplate(arrangedData);
  };

  ctx.render(until(populator(), loaderTemplate()));
}
