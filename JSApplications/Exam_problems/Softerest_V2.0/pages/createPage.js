import { html } from "../node_modules/lit-html/lit-html.js";
import { createIdea } from "../services/dataService.js";

const createTemplate = (form) => html` <div class="container home wrapper my-md-5 pl-md-5">
  <div class="d-md-flex flex-mb-equal">
    <div class="col-md-6">
      <img class="responsive-ideas create" src="./images/creativity_painted_face.jpg" alt="" />
    </div>
    <form @submit=${form.submit} class="form-idea col-md-5" action="#/create" method="post">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Share Your Idea</h1>
        ${form.err.length > 0
          ? html`${form.err.map((e) => html`<h1 class="h3 mb-3 font-weight-normal">${e}</h1>`)}`
          : ""}
      </div>
      <div class="form-label-group">
        <label for="ideaTitle">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          class="form-control"
          placeholder="What is your idea?"
          required=""
          autofocus=""
        />
      </div>
      <div class="form-label-group">
        <label for="ideaDescription">Description</label>
        <textarea
          type="text"
          name="description"
          class="form-control"
          placeholder="Description"
          required=""
        ></textarea>
      </div>
      <div class="form-label-group">
        <label for="inputURL">Add Image</label>
        <input
          type="text"
          id="imageURl"
          name="imageURL"
          class="form-control"
          placeholder="Image URL"
          required=""
        />
      </div>
      <button class="btn btn-lg btn-dark btn-block" type="submit">Create</button>

      <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
    </form>
  </div>
</div>`;

export async function createView(ctx) {
  console.log("createView");

  const form = { submit: onSubmit, err: [] };

  ctx.render(createTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const idea = {
      title: data.get("title").trim(),
      description: data.get("description").trim(),
      img: data.get("imageURL").trim(),
    };
    try {
      if (Object.values(idea).includes("")) {
        Object.entries(idea).forEach(([k, v]) => {
          if (v == "") {
            form.err.push(`Field ${k} is mandatory`);
          }
        });
      }

      if (form.err.length > 0) {
        ctx.render(createTemplate(form));
        form.err = [];
        return;
      }

      let theNewThing = await createIdea(idea);
      ctx.page.redirect(`/dashboard`);
    } catch (err) {
      form.err = [`${err.message}`];
      ctx.render(createTemplate(form));
      form.err = [];
      // alert(err);
      // console.log(err);
    }
  }
}
