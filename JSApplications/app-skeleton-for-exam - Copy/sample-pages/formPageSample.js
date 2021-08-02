import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
// import {
//   applyForTeam,
//   approveAplication,
//   createTeam,
//   getCurrUserId,
// } from "../Services/dataService.js";

const createTemplate = (form) => html``;

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
        return;
      }

      let theNewThing = "await reply from server";

      ctx.page.redirect(`/home`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
