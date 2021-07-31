import { html } from "../node_modules/lit-html/lit-html.js";
import { createNewShoe, getUser } from "../Services/dataService.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
// import {
//   applyForTeam,
//   approveAplication,
//   createTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const createTemplate = (form) => html` <h1>Create New Offer</h1>
  ${form.err !== undefined ? html` <p class="message">${form.err.message}</p> ` : ""}
  <form @submit=${form.submit}>
    <div>
      <input type="text" placeholder="Name..." name="name" />
    </div>
    <div>
      <input type="text" placeholder="Price..." name="price" />
    </div>
    <div>
      <input type="text" placeholder="Image url..." name="imageUrl" />
    </div>
    <div>
      <textarea
        placeholder="Give us some description about this offer..."
        name="description"
      ></textarea>
    </div>
    <div>
      <input type="text" placeholder="Brand..." name="brand" />
    </div>
    <div>
      <button>Create</button>
    </div>
  </form>`;

export async function createView(ctx) {
  console.log("createView");

  const form = { submit: onSubmit };

  ctx.render(createTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const shoe = {
      brand: data.get("brand").trim(),
      name: data.get("name").trim(),
      description: data.get("description").trim(),
      imageUrl: data.get("imageUrl").trim(),
      price: data.get("price").trim(),
    };
    try {
      if (Object.values(shoe).includes("")) {
        form.err = {
          message: "All fields are mandatory",
        };
        ctx.render(createTemplate(form));
        return;
      }
      shoe.price = Number(shoe.price);
      let theNewThing = await createNewShoe(shoe);
      console.log(theNewThing);
      ctx.page.redirect(`/home`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
