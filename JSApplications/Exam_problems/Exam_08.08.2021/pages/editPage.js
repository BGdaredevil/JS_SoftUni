import { html } from "../node_modules/lit-html/lit-html.js";
import notificationService from "../services/notificationService.js";
import { editBook, getOneBook } from "../services/dataService.js";

const editTemplate = (form) => html` <section id="edit-page" class="edit">
  <form @submit=${form.submit} id="edit-form" action="javascript:void(0)" method="">
    <fieldset>
      <legend>Edit my Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" .value=${form.book.title} />
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea name="description" id="description" .value=${form.book.description}></textarea>
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input type="text" name="imageUrl" id="image" .value=${form.book.imageUrl} />
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type" .value=${form.book.type}>
            <option value="Fiction" selected>Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Save" />
    </fieldset>
  </form>
</section>`;

export async function editView(ctx) {
  const form = { submit: onSubmit, err: [], book: await getOneBook(ctx.params.id) };

  ctx.render(editTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const book = {
      title: data.get("title").trim(),
      description: data.get("description").trim(),
      imageUrl: data.get("imageUrl").trim(),
      type: data.get("type").trim(),
    };
    try {
      if (Object.values(book).includes("")) {
        Object.entries(book).forEach(([k, v]) => {
          if (v == "") {
            form.err.push(`Field ${k} is mandatory`);
          }
        });
      }

      if (form.err.length > 0) {
        ctx.render(editTemplate(form));
        form.err.forEach((e) => notificationService.createNotification(e));
        form.err = [];
        return;
      }

      await editBook(ctx.params.id, book);

      ctx.page.redirect(`/details/${ctx.params.id}`);
      // notifications must be after the redirect
      notificationService.createNotification(
        `Sucessfully modified your book "${book.title}"`,
        "success"
      );
    } catch (err) {
      form.err = [];
      ctx.render(editTemplate(form));
      notificationService.createNotification(err.message);
      console.log(err);
    }
  }
}
