import { html } from "../node_modules/lit-html/lit-html.js";
import { createMovie } from "../Services/dataService.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
// import {
//   applyForTeam,
//   approveAplication,
//   createTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const createTemplate = (form) => html` <section id="add-movie">
  <form @submit=${form.submit} class="text-center border border-light p-5" action="#" method="">
    <h1>Add Movie</h1>
    ${form.err !== undefined ? html`<p><strong>${form.err.message}</strong></p>` : ""}
    <div class="form-group">
      <label for="title">Movie Title</label>
      <input type="text" class="form-control" placeholder="Title" name="title" value="" />
    </div>
    <div class="form-group">
      <label for="description">Movie Description</label>
      <textarea class="form-control" placeholder="Description" name="description"></textarea>
    </div>
    <div class="form-group">
      <label for="imageUrl">Image url</label>
      <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</section>`;

export async function createView(ctx) {
  console.log("createView");

  const form = { submit: onSubmit };

  ctx.render(createTemplate(form));

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
        ctx.render(createTemplate(form));
        return;
      }

      let theNewThing = await createMovie(movie);
      // console.log(theNewThing);
      ctx.page.redirect(`/home`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
