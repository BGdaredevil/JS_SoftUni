import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { login } from "../Services/dataService.js";

const loginTemplate = (form) => html``;

export async function loginView(ctx) {
  const form = { submit: onSubmit, err: [] };

  ctx.render(loginTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      // mind the fields -- username or email or whatever?
      const data = new FormData(e.target);
      const user = {
        email: data.get("email").trim(),
        password: data.get("password").trim(),
        username: data.get("username").trim(),
      };

      if (Object.values(user).includes("")) {
        Object.entries(user).forEach(([k, v]) => {
          if (v == "") {
            form.err.push(`Field ${k} is mandatory`);
          }
        });
      }

      if (form.err.length > 0) {
        ctx.render(loginTemplate(form));
        return;
      }

      await login(user);
      ctx.page.redirect("/home");
    } catch (err) {
      form.err = [`${err.message}`];
      ctx.render(loginTemplate(form));
    }
  }
}
