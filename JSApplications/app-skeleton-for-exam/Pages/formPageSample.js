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

  const form = { submit: onSubmit };

  ctx.render(createTemplate(form));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const teamName = data.get("name").trim();
    const teamLogoUrl = data.get("logoUrl").trim();
    const teamDescription = data.get("description").trim();
    try {
      if (teamName === "" || teamLogoUrl === "" || teamDescription === "") {
        form.err = {
          message: "All fields are mandatory",
        };
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
