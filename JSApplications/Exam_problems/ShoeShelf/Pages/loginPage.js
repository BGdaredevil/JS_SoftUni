import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { login } from "../Services/dataService.js";

const loginTemplate = (form) => html` <h1>Login</h1>
  <p class="form-info">Don't have account? <a href="/register">Register now</a> and fix that!</p>
  <form @submit=${form.submit} action="">
    <div>
      <input type="email" placeholder="Email..." name="email" />
    </div>

    <div>
      <input type="password" placeholder="Password..." name="password" />
    </div>
    <div>
      ${form.err !== undefined ? html` <p class="message">${form.err.message}</p> ` : ""}
      <button>Login</button>
    </div>
  </form>`;

export async function loginView(ctx) {
  let form = { submit: onSubmit };

  ctx.render(loginTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      // mind the fields -- username or email or whatever?
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
