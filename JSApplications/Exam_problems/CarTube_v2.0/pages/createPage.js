import { html } from "../node_modules/lit-html/lit-html.js";
import { createListing } from "../services/dataService.js";
import notificationService from "../services/notificationService.js";

const createTemplate = (form) => html` <section id="create-listing">
  <div class="container">
    <form @submit=${form.submit} id="create-form">
      <h1>Create Car Listing</h1>
      <p>Please fill in this form to create an listing.</p>
      <hr />

      <p>Car Brand</p>
      <input type="text" placeholder="Enter Car Brand" name="brand" />

      <p>Car Model</p>
      <input type="text" placeholder="Enter Car Model" name="model" />

      <p>Description</p>
      <input type="text" placeholder="Enter Description" name="description" />

      <p>Car Year</p>
      <input type="number" placeholder="Enter Car Year" name="year" />

      <p>Car Image</p>
      <input type="text" placeholder="Enter Car Image" name="imageUrl" />

      <p>Car Price</p>
      <input type="number" placeholder="Enter Car Price" name="price" />

      <hr />
      <input type="submit" class="registerbtn" value="Create Listing" />
    </form>
  </div>
</section>`;

export async function createView(ctx) {
  console.log("createView");

  const form = { submit: onSubmit, err: [] };

  ctx.render(createTemplate(form));

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
        ctx.render(createTemplate(form));
        form.err.forEach((e) => notificationService.createNotification(e));
        form.err = [];
        return;
      }

      let theNewThing = await createListing(car);

      ctx.page.redirect(`/all-listings`);
      // notifications must be after the redirect
      notificationService.createNotification(
        `Sucessfully created listing for "${theNewThing.brand} ${theNewThing.model}"`,
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
