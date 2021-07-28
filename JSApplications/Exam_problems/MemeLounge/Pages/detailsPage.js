import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import { getOneMeme, getUser, delMeme } from "../Services/dataService.js";

const detailsTemplate = (meme, visitorId, delHandler) => html` <section id="meme-details">
  <h1>Meme Title: ${meme.title}</h1>
  <div class="meme-details">
    <div class="meme-img">
      <img alt="meme-alt" src=${meme.imageUrl} />
    </div>
    <div class="meme-description">
      <h2>Meme Description</h2>
      <p>${meme.description}</p>

      ${meme._ownerId === visitorId
        ? html` <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button
              class="button danger"
              href="javascript.void(0)"
              @click=${() => delHandler(meme._id)}
            >
              Delete
            </button>`
        : ""}
    </div>
  </div>
</section>`;

export async function detailsView(ctx) {
  const populator = async () => {
    const data = await getOneMeme(ctx.params.id);
    console.log(data);
    console.log(localStorage);
    return detailsTemplate(data, getUser()?._id, delHandler);
  };

  ctx.render(await populator());

  async function delHandler(id) {
    if (confirm("Are you sure about that?")) {
      await delMeme(id);
      ctx.page.redirect("/meme-feed");
    }
  }
}
