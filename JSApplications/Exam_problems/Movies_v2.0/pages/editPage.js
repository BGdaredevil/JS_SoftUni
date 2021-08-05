import { html } from "../node_modules/lit-html/lit-html.js";
import { getSpecificMovie, updateMovie } from "../services/dataService.js";
import notificationService from "../services/notificationService.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";

const editTemplate = (form) => html` <section id="edit-movie">
  <form @submit=${form.submit} class="text-center border border-light p-5" action="#" method="">
    <h1>Edit Movie</h1>
    ${form.err !== undefined ? html`<p><strong>${form.err.message}</strong></p>` : ""}
    <div class="form-group">
      <label for="title">Movie Title</label>
      <input
        type="text"
        class="form-control"
        placeholder="Movie Title"
        name="title"
        .value=${form.data.title}
      />
    </div>
    <div class="form-group">
      <label for="description">Movie Description</label>
      <textarea
        class="form-control"
        placeholder="Movie Description..."
        name="description"
        .value=${form.data.description}
      ></textarea>
    </div>
    <div class="form-group">
      <label for="imageUrl">Image url</label>
      <input
        type="text"
        class="form-control"
        placeholder="Image Url"
        name="imageUrl"
        .value=${form.data.img}
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</section>`;

export async function editView(ctx) {
  const form = { submit: onSubmit };
  form.data = await getSpecificMovie(ctx.params.id);

  ctx.render(editTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const movie = {
      title: data.get("title").trim(),
      img: data.get("imageUrl").trim(),
      description: data.get("description").trim(),
    };
    try {
      if (Object.values(movie).includes("")) {
        form.err = {
          message: "All fields are mandatory",
        };
        ctx.render(editTemplate(form));
        notificationService.createNotification(form.err.message);
        return;
      }

      await updateMovie(form.data._id, movie);

      ctx.page.redirect(`/details/${form.data._id}`);
    } catch (err) {
      notificationService.createNotification(err.message);
      console.log(err);
    }
  }
}
