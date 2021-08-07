import { html } from "../node_modules/lit-html/lit-html.js";
import notificationService from "../services/notificationService.js";

const searchTemplate = (form) => html` <section id="search-cars">
  <h1>Filter by year</h1>

  <div class="container">
    <input
      id="search-input"
      type="text"
      name="search"
      placeholder="Enter desired production year"
    />
    <button class="button-list">Search</button>
  </div>

  <h2>Results:</h2>
  <div class="listings">
    <!-- Display all records -->
    <div class="listing">
      <div class="preview">
        <img src="/images/audia3.jpg" />
      </div>
      <h2>Audi A3</h2>
      <div class="info">
        <div class="data-info">
          <h3>Year: 2018</h3>
          <h3>Price: 25000 $</h3>
        </div>
        <div class="data-buttons">
          <a href="#" class="button-carDetails">Details</a>
        </div>
      </div>
    </div>

    <!-- Display if there are no matches -->
    <p class="no-cars">No results.</p>
  </div>
</section>`;

export async function searchView(ctx) {
  console.log("createView");

  const form = { submit: onSubmit, err: [] };

  ctx.render(searchTemplate(form));

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
        ctx.render(searchTemplate(form));
        form.err.forEach((e) => notificationService.createNotification(e));
        form.err = [];
        return;
      }

      let theNewThing = "await reply from server";

      ctx.page.redirect(`/home`);
      // notifications must be after the redirect
      // notificationService.createNotification(
      //   `Sucessfully changed your movie "${newMovie.title}"`,
      //   "success"
      // );
    } catch (err) {
      form.err = [];
      ctx.render(searchTemplate(form));
      notificationService.createNotification(err.message);
      console.log(err);
    }
  }
}
