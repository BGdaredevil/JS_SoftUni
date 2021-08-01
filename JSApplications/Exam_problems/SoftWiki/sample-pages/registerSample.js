import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { register } from "../services/dataService.js";

const registerTemplate = (form) => html``;

export async function registerView(ctx) {
  let form = { submit: onSubmit };
  ctx.render(registerTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const newUser = {
        email: data.get("email").trim(),
        username: data.get("username").trim(),
        password: data.get("password").trim(),
        repass: data.get("repeatPass").trim(),
        gender: data.get("gender").trim(),
      };

      if (Object.values(newUser).includes("")) {
        form.err = {
          message: "All fields are mandatory",
        };
        ctx.render(registerTemplate(form));
        return;
      }

      if (newUser.repass !== newUser.password) {
        form.err = {
          message: "passwords do not match",
        };
        ctx.render(registerTemplate(form));
        return;
      }

      await register(username, email, password);
      ctx.page.redirect("/home");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
