import { html } from "../node_modules/lit-html/lit-html.js";
import notificationService from "../services/notificationService.js";
import { createBook } from "../services/dataService.js";

const createTemplate = (form) => html` <section id="create-page" class="create">
  <form @submit=${form.submit} id="create-form" action="" method="">
    <fieldset>
      <legend>Add new Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" placeholder="Title" />
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea name="description" id="description" placeholder="Description"></textarea>
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input type="text" name="imageUrl" id="image" placeholder="Image" />
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type">
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Add Book" />
    </fieldset>
  </form>
</section>`;

export async function createView(ctx) {
  const form = { submit: onSubmit, err: [] };

  ctx.render(createTemplate(form));

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
        ctx.render(createTemplate(form));
        form.err.forEach((e) => notificationService.createNotification(e));
        form.err = [];
        return;
      }

      let theNewThing = await createBook(book);
      console.log(theNewThing);
      ctx.page.redirect(`/home`);
      // notifications must be after the redirect
      notificationService.createNotification(
        `Sucessfully added your book "${book.title}"`,
        "success"
      );
    } catch (err) {
      form.err = [];
      ctx.render(createTemplate(form));
      notificationService.createNotification(err.message);
      console.log(err);
    }
  }
}
