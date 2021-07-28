import { html } from "../node_modules/lit-html/lit-html.js";
import { createMeme } from "../Services/dataService.js";
import { popupSection } from "./commonLoader.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
// import {
//   applyForTeam,
//   approveAplication,
//   createTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const createTemplate = (form) => html` ${form.err !== undefined ? popupSection(form.err) : ""}
  <section id="create-meme">
    <form @submit=${form.submit} id="create-form">
      <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" />
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
        <label for="imageUrl">Meme Image</label>
        <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
        <input type="submit" class="registerbtn button" value="Create Meme" />
      </div>
    </form>
  </section>`;

export async function createView(ctx) {
  const form = { submit: onSubmit };

  ctx.render(createTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("title").trim();
    const description = data.get("description").trim();
    const imageUrl = data.get("imageUrl").trim();
    try {
      if (title === "" || description === "" || imageUrl === "") {
        form.err = {
          message: "All fields are mandatory",
        };
        ctx.render(createTemplate(form));
        return;
      }

      await createMeme({ title, description, imageUrl });

      ctx.page.redirect(`/meme-feed`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
