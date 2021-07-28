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
        // check validity and so on -- custom err. handling????
      }

      let theNewTeam = "await reply from server";
      let result = "await interpret server reply";

      ctx.page.redirect(`/team-home/${theNewTeam._id}`);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
