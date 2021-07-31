import { html } from "../node_modules/lit-html/lit-html.js";
import { getSpecificShoe, updateShoe } from "../Services/dataService.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
// import {
//   applyForTeam,
//   approveAplication,
//   editTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const editTemplate = (form) => html` <h1>Edit Offer</h1>
  ${form.err !== undefined ? html` <p class="message">${form.err.message}</p> ` : ""}

  <form @submit=${form.submit}>
    <div>
      <input type="text" placeholder="Name..." name="name" .value=${form.shoe.name} />
    </div>
    <div>
      <input type="text" placeholder="Price..." name="price" .value=${form.shoe.price} />
    </div>
    <div>
      <input type="text" placeholder="Image url..." name="imageUrl" .value=${form.shoe.imageUrl} />
    </div>
    <div>
      <textarea
        placeholder="Give us some description about this offer..."
        name="description"
        .value=${form.shoe.description}
      ></textarea>
    </div>
    <div>
      <input type="text" placeholder="Brand..." name="brand" .value=${form.shoe.brand} />
    </div>
    <div>
      <button>Edit</button>
    </div>
  </form>`;

export async function editView(ctx) {
  const info = await getSpecificShoe(ctx.params.id);
  const form = { submit: onSubmit, shoe: info };

  ctx.render(editTemplate(form));

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
      let theNewThing = await updateShoe(info._id, shoe);

      ctx.page.redirect(`/details/${info._id}`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
