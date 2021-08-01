import { html } from "../node_modules/lit-html/lit-html.js";
import { createArticle } from "../services/dataService.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
// import {
//   applyForTeam,
//   approveAplication,
//   createTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const createTemplate = (form) => html` <div class="container">
  <form action="#" method="" @submit=${form.submit}>
    <fieldset>
      <legend>
        Create article
        ${form.err !== undefined ? html` <p><strong>${form.err.message}</strong></p> ` : ""}
      </legend>
      <p class="field title">
        <input type="text" id="title" name="title" placeholder="Arrays" />
        <label for="title">Title:</label>
      </p>

      <p class="field category">
        <input type="text" id="category" name="category" placeholder="JavaScript" />
        <label for="category">Category:</label>
      </p>
      <p class="field content">
        <textarea name="content" id="content"></textarea>
        <label for="content">Content:</label>
      </p>

      <p class="field submit">
        <button class="btn submit" type="submit">Create</button>
      </p>
    </fieldset>
  </form>
</div>`;

export async function createView(ctx) {
  console.log("createView");

  const form = { submit: onSubmit };

  ctx.render(createTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const article = {
      title: data.get("title").trim(),
      category: data.get("category").trim(),
      content: data.get("content").trim(),
    };
    try {
      if (Object.values(article).includes("")) {
        form.err = {
          message: "All fields are mandatory",
        };
        ctx.render(createTemplate(form));
        return;
      }

      await createArticle(article);

      ctx.page.redirect(`/home`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
