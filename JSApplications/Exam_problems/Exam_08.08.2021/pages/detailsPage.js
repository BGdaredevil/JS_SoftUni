import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import {
  getOneBook,
  getUser,
  delBookFromDB,
  getLikes,
  isLikedByUser,
  likeBook,
} from "../services/dataService.js";

const detailsTemplate = (data, userId, delBook) => html` <section id="details-page" class="details">
  <div class="book-information">
    <h3>${data.title}</h3>
    <p class="type">Type: ${data.type}</p>
    <p class="img"><img src=${data.imageUrl} /></p>
    <div class="actions">
      ${userId !== undefined
        ? html`
            ${userId === data._ownerId
              ? html`
                  <a class="button" href="/edit/${data._id}">Edit</a>
                  <a class="button" href="javascript:void(0)" @click=${() => delBook(data._id)}
                    >Delete</a
                  >
                `
              : html`
                  ${data.myLikes > 0
                    ? ""
                    : html`
                        <a
                          class="button"
                          href="javascript:void(0)"
                          @click=${() => {
                            data.handleLike(data._id);
                          }}
                          >Like</a
                        >
                      `}
                `}
          `
        : ""}
      <div class="likes">
        <img class="hearts" src="/images/heart.png" />
        <span id="total-likes">Likes: ${data.totalLikes}</span>
      </div>
    </div>
  </div>
  <div class="book-description">
    <h3>Description:</h3>
    <p>${data.description}</p>
  </div>
</section>`;

export async function detailsView(ctx) {
  const populator = async () => {
    const user = getUser();
    let myLikes;
    if (user) {
      myLikes = await isLikedByUser(ctx.params.id, user._id);
    }
    const [data, totalLikes] = await Promise.all([
      getOneBook(ctx.params.id),
      getLikes(ctx.params.id),
    ]);
    data["myLikes"] = myLikes;
    data["totalLikes"] = totalLikes;
    data["handleLike"] = likeTheBook;

    return detailsTemplate(data, user?._id, delBook);
  };

  ctx.render(until(populator(), loaderTemplate()));

  async function likeTheBook(id) {
    await likeBook({ bookId: id });
    ctx.page.redirect(`/details/${id}`);
  }

  async function delBook(id) {
    if (confirm("Are you sure about that? There is no going back...")) {
      await delBookFromDB(id);
      ctx.page.redirect("/home");
    }
  }
}
