import { html } from "../node_modules/lit-html/lit-html.js";
import { getSpecificListing, updateListing } from "../services/dataService.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
// import {
//   applyForTeam,
//   approveAplication,
//   createTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const editTemplate = (form) => html` <section id="edit-listing">
  <div class="container">
    <form @submit=${async (e) => await form.submit(e, form.car._id)} id="edit-form">
      <h1>Edit Car Listing</h1>
      ${form.err !== undefined
        ? html` <p><strong> ${form.err.message} </strong></p> `
        : html` <p>Please fill in this form to edit an listing.</p> `}
      <hr />
      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand" .value=${form.car.brand} />

      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model" .value=${form.car.model} />

      <p>Description</p>
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        .value=${form.car.description}
      />

      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year" .value=${form.car.year} />

      <p>Car Image</p>
      <input
        type="text"
        placeholder="Enter Car Image"
        name="imageUrl"
        .value=${form.car.imageUrl}
      />

      <p>Car Price</p>
      <input type="number" placeholder="Enter Car Price" name="price" .value=${form.car.price} />

      <hr />
      <input type="submit" class="registerbtn" value="Edit Listing" />
    </form>
  </div>
</section>`;

export async function editView(ctx) {
  const form = { submit: onSubmit };

  const info = await getSpecificListing(ctx.params.id);
  console.log(info);
  form.car = info;

  ctx.render(editTemplate(form));

  async function onSubmit(e, id) {
    e.preventDefault();
    const data = new FormData(e.target);
    const car = {
      brand: data.get("brand").trim(),
      model: data.get("model").trim(),
      description: data.get("description").trim(),
      year: data.get("year").trim(),
      imageUrl: data.get("imageUrl").trim(),
      price: data.get("price").trim(),
    };
    // console.log(Object.values(car).includes(""));
    // console.log(Object.values(car));
    try {
      if (Object.values(car).includes("")) {
        form.err = {
          message: "All fields are mandatory",
        };
        ctx.render(editTemplate(form));
        return;
      }
      car.year = Number(car.year);
      car.price = Number(car.price);

      await updateListing(id, car);
      ctx.page.redirect(`/details/${id}`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
