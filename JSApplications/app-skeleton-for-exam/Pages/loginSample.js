import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { login } from "../Services/dataService.js";

const loginTemplate = (form) => html``;

export async function loginView(ctx) {
  let form = { submit: onSubmit };

  ctx.render(loginTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const email = data.get("email").trim();
      const password = data.get("password").trim();

      if (email == "" || password == "") {
        form.err = {
          message: "Pls fill all fields",
        };
        ctx.render(loginTemplate(form));
        return;
      }

      await login(email, password);
      ctx.page.redirect("/home");
    } catch (err) {
      form.err = {
        message: "Pls fill all fields",
      };
      ctx.render(loginTemplate(form));
    }
  }
}
