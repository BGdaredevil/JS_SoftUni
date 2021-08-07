import { html } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "./commonLoader.js";
import notificationService from "../services/notificationService.js";
import { getOneListing, updateListing } from "../services/dataService.js";

const editTemplate = (form) => html` <section id="edit-listing">
  <div class="container">
    <form @submit=${form.submit} id="edit-form">
      <h1>Edit Car Listing</h1>
      <p>Please fill in this form to edit an listing.</p>
      <hr />

      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand" .value="${form.data.brand}" />

      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model" .value="${form.data.model}" />

      <p>Description</p>
      <input
        type="text"
        placeholder="Enter Description"
        name="description"
        .value="${form.data.description}"
      />

      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year" .value="${form.data.year}" />

      <p>Car Image</p>
      <input
        type="text"
        placeholder="Enter Car Image"
        name="imageUrl"
        .value="${form.data.imageUrl}"
      />

      <p>Car Price</p>
      <input type="number" placeholder="Enter Car Price" name="price" .value="${form.data.price}" />

      <hr />
      <input type="submit" class="registerbtn" value="Edit Listing" />
    </form>
  </div>
</section>`;

export async function editView(ctx) {
  console.log("editView", ctx.params.id);

  const form = { submit: onSubmit, err: [] };

  const populator = async (id) => {
    form.data = await getOneListing(id);
    return editTemplate(form);
  };

  ctx.render(until(populator(ctx.params.id), loaderTemplate()));

  async function onSubmit(e) {
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
    try {
      if (Object.values(car).includes("")) {
        Object.entries(car).forEach(([k, v]) => {
          if (v == "") {
            form.err.push(`Field ${k} is mandatory`);
          }
        });
      }
      car.year = Number(car.year);
      car.price = Number(car.price);

      if (form.err.length > 0) {
        ctx.render(editTemplate(form));
        form.err.forEach((e) => notificationService.createNotification(e));
        form.err = [];
        return;
      }

      await updateListing(form.data._id, car);

      ctx.page.redirect(`/details/${form.data._id}`);
      // notifications must be after the redirect
      notificationService.createNotification(`Sucessfully changed your car listing!`, "success");
    } catch (err) {
      form.err = [];
      ctx.render(editTemplate(form));
      notificationService.createNotification(err.message);
      console.log(err);
    }
  }
}
