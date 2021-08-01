import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { login } from "../Services/dataService.js";

const loginTemplate = (form) => html` <section id="form-login">
  <form @submit=${form.submit} class="text-center border border-light p-5" action="" method="">
    ${form.err !== undefined
      ? html`<p id="errorBox" class="notification-message">${form.err.message}</p>`
      : ""}
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" placeholder="Email" name="email" value="" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Password" name="password" value="" />
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</section>`;

export async function loginView(ctx) {
  let form = { submit: onSubmit };

  ctx.render(loginTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();

      const data = new FormData(e.target);
      const user = {
        email: data.get("email").trim(),
        password: data.get("password").trim(),
      };

      if (Object.values(user).includes("")) {
        form.err = {
          message: "All fields are mandatory",
        };
        ctx.render(loginTemplate(form));
        return;
      }

      await login(user);
      ctx.page.redirect("/home");
    } catch (err) {
      form.err = {
        message: `${err.message}`,
      };
      ctx.render(loginTemplate(form));
    }
  }
}
