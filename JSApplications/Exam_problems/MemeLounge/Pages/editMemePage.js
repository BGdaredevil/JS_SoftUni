import { html } from "../node_modules/lit-html/lit-html.js";
import { getOneMeme, updateMeme } from "../Services/dataService.js";
import { popupSection } from "./commonLoader.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
// import {
//   applyForTeam,
//   approveAplication,
//   createTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const editTemplate = (form) => html`
  ${form.err !== undefined ? popupSection(form.err) : ""}
  <section id="edit-meme">
    <form @submit=${form.submit} id="edit-form">
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter Title"
          name="title"
          .value=${form.meme.title}
        />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
          .value=${form.meme.description}
        >
        </textarea>
        <label for="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter Meme ImageUrl"
          name="imageUrl"
          .value=${form.meme.imageUrl}
        />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>
`;

export async function editView(ctx) {
  const form = { submit: onSubmit };
  const data = await getOneMeme(ctx.params.id);
  console.log(data);
  form.meme = data;

  ctx.render(editTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("title").trim();
    const description = data.get("description").trim();
    const imageUrl = data.get("imageUrl").trim();
    try {
      if (title === "" || description === "" || imageUrl === "") {
        form.err = {
          message: "Pls fill all fields",
        };
        ctx.render(editTemplate(form));
        return;
      }

      let res = await updateMeme(ctx.params.id, { title, description, imageUrl });

      ctx.page.redirect(`/details/${res._id}`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
