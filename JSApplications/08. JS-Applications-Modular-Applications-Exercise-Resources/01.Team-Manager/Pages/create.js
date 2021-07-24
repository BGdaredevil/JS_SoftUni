import { html } from "../node_modules/lit-html/lit-html.js";
import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import {
  applyForTeam,
  approveAplication,
  createTeam,
  getCurrUserId,
} from "../Services/dataService.js";

const createTemplate = (form) => html`<section id="create">
  <article class="narrow">
    <header class="pad-med">
      <h1>New Team</h1>
    </header>
    <form @submit=${form.submit} id="create-form" class="main-form pad-large">
      ${ifDefined(form.err) ? html`<div class="error">${form.err}</div>` : ""}
      <label>Team name: <input type="text" name="name" /></label>
      <label>Logo URL: <input type="text" name="logoUrl" /></label>
      <label>Description: <textarea name="description"></textarea></label>
      <input class="action cta" type="submit" value="Create Team" />
    </form>
  </article>
</section>`;

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
        throw new Error("All fields are mandatory!");
      }

      if (teamName.length < 4) {
        throw new Error("Team name must be at least 4 characters long!");
      }

      if (teamDescription.length < 10) {
        throw new Error("Team description must be at least 10 characters long!");
      }

      let theNewTeam = await createTeam(teamName, teamLogoUrl, teamDescription);
      let result = await applyForTeam(theNewTeam._id);
      await approveAplication(result._id);

      ctx.page.redirect(`/team-home/${theNewTeam._id}`);
    } catch (err) {
      form.err = err.message;
      ctx.render(createTemplate(form));
    }
  }
}
