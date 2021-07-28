import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { register } from "../Services/dataService.js";

const registerTemplate = (form) => html``;

export async function registerView(ctx) {
  let form = { submit: onSubmit };
  ctx.render(registerTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const email = data.get("email").trim();
      // const username = data.get("username");
      const password = data.get("password").trim();
      const repass = data.get("repass").trim();

      if (email == "" || password == "" || username == "" || repass == "") {
        // figure a good way to handle verifications
      }

      if (repass !== password) {
        // figure a good way to handle verifications
      }

      await register(username, email, password);
      ctx.page.redirect("/home");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
