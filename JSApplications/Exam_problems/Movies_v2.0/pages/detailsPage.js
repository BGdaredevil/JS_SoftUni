import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import {
  delMovie,
  getLikesCount,
  getSpecificMovie,
  getUser,
  likeAMovie,
  getLikesByUser,
} from "../Services/dataService.js";

// TODO: place template:
// TODO: name properties:
// TODO: name functions:
// TODO: if untill is needed and a loader is needed.... Remove it otherwise....:

const detailsTemplate = (data, user, delHandler, likeHandler) => html` <section id="movie-example">
  <div class="container">
    <div class="row bg-light text-dark">
      <h1>Movie title: ${data.title}</h1>

      <div class="col-md-8">
        <img class="img-thumbnail" src=${data.img} alt="Movie" />
      </div>
      <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${data.description}</p>

        ${user !== null
          ? html` ${data._ownerId === user._id
              ? html`
                  <a
                    class="btn btn-danger"
                    href="javascript:void(0)"
                    @click=${() => delHandler(data._id)}
                    >Delete</a
                  >
                  <a class="btn btn-warning" href="/edit/${data._id}">Edit</a>
                `
              : html`
                  ${data.hasLiked
                    ? ""
                    : html` <a
                        class="btn btn-primary"
                        href="javascript:void(0)"
                        @click=${() => likeHandler(data._id)}
                        >Like</a
                      >`}
                  <span class="enrolled-span">Liked ${data.likes}</span>
                `}`
          : ""}
      </div>
    </div>
  </div>
</section>`;

export async function detailsView(ctx) {
  const populator = async () => {
    const user = getUser();
    const data = await getSpecificMovie(ctx.params.id);
    data.likes = await getLikesCount(data._id);
    if (user !== null) {
      data.hasLiked = (await getLikesByUser(user._id, data._id)).length > 0;
    }

    return detailsTemplate(data, user, delHandler, likeHandler);
  };

  ctx.render(until(populator(), loaderTemplate()));

  async function delHandler(id) {
    await delMovie(id);
    ctx.page.redirect("/home");
  }

  async function likeHandler(id) {
    await likeAMovie(id);
    ctx.page.redirect(`/details/${id}`);
  }
}
