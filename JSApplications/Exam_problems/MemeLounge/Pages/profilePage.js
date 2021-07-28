import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
// import { getTeams, isLogged, getTeamMembers } from "../Services/dataService.js";
import { loaderTemplate } from "./commonLoader.js";
import { getUser, getUserMemes } from "../Services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const memeCard = (meme) => html` <div class="user-meme">
  <p class="user-meme-title">${meme.title}</p>
  <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
  <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

const profileTemplate = (memeArr, user) => html` <section
  id="user-profile-page"
  class="user-profile"
>
  <article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png" />
    <div class="user-content">
      <p>Username: ${user.username}</p>
      <p>Email: ${user.email}</p>
      <p>My memes count: ${memeArr.length}</p>
    </div>
  </article>
  <h1 id="user-listings-title">User Memes</h1>
  <div class="user-meme-listings">
    ${memeArr.length > 0
      ? html`${memeArr.map((m) => memeCard(m))}`
      : html`<p class="no-memes">No memes in database.</p>`}
  </div>
</section>`;

export async function profileView(ctx) {
  const populator = async () => {
    const data = await getUserMemes(ctx.params.id);
    const user = getUser();

    return profileTemplate(data, user);
  };

  ctx.render(await populator());
  // ctx.render(until(populator(), loaderTemplate()));
}
