import { html } from "../node_modules/lit-html/lit-html.js";
import { getSingleArticle, updateSpecificArticle } from "../services/dataService.js";

const editTemplate = (form) => html` <div class="container">
  <form action="#" method="" @submit=${form.submit}>
    <fieldset>
      <legend>
        Edit article
        ${form.err !== undefined ? html` <p><strong>${form.err.message}</strong></p> ` : ""}
      </legend>
      <p class="field title">
        <input type="text" name="title" id="title" placeholder="Arrays" .value=${form.data.title} />
        <label for="title">Title:</label>
      </p>

      <p class="field category">
        <input
          type="text"
          name="category"
          id="category"
          placeholder="JavaScript"
          .value=${form.data.category}
        />
        <label for="category">Category:</label>
      </p>
      <p class="field content">
        <textarea name="content" id="content" .value=${form.data.content}></textarea>
        <label for="content">Content:</label>
      </p>

      <p class="field submit">
        <button class="btn submit" type="submit">Edit</button>
      </p>
    </fieldset>
  </form>
</div>`;

export async function editView(ctx) {
  console.log("editView");
  const article = await getSingleArticle(ctx.params.id);

  const form = { submit: onSubmit, data: article };

  ctx.render(editTemplate(form));

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

      await updateSpecificArticle(ctx.params.id, article);

      ctx.page.redirect(`/home`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
