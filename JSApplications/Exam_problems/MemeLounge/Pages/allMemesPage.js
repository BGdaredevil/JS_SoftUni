import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { getAllMemes } from "../Services/dataService.js";

const memeCard = (meme) => html` <div class="meme">
  <div class="card">
    <div class="info">
      <p class="meme-title">${meme.title}</p>
      <img class="meme-image" alt="meme-img" src=${meme.imageUrl} />
    </div>
    <div id="data-buttons">
      <a class="button" href="/details/${meme._id}">Details</a>
    </div>
  </div>
</div>`;

const memesTemplate = (memeArr) => html` <section id="meme-feed">
  <h1>All Memes</h1>
  <div id="memes">
    ${memeArr.length > 0
      ? html` ${memeArr.map((m) => memeCard(m))} `
      : html` <p class="no-memes">No memes in database.</p> `}
  </div>
</section>`;

export async function memeView(ctx) {
  const populator = async () => {
    const data = await getAllMemes();
    // console.log(data);
    return memesTemplate(data);
  };

  ctx.render(await populator());

  //   ctx.render(until(populator(), loaderTemplate()));
}
