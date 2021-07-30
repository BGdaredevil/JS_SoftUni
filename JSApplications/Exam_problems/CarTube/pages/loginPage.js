import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { login } from "../Services/dataService.js";

const loginTemplate = (form) => html` <section id="login">
  <div class="container">
    <form @submit=${form.submit} id="login-form" action="#" method="post">
      <h1>Login</h1>
      ${form.err !== undefined
        ? html`<p><strong>${form.err.message}</strong></p>`
        : html`<p>Please enter your credentials.</p>`}
      <hr />
      <p>Username</p>
      <input placeholder="Enter Username" name="username" type="text" />
      <p>Password</p>
      <input type="password" placeholder="Enter Password" name="password" />
      <input type="submit" class="registerbtn" value="Login" />
    </form>
    <div class="signin">
      <p>Dont have an account? <a href="/register">Sign up</a>.</p>
    </div>
  </div>
</section>`;

export async function loginView(ctx) {
  console.log("login");
  let form = { submit: onSubmit };

  ctx.render(loginTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const username = data.get("username").trim();
      const password = data.get("password").trim();

      if (username == "" || password == "") {
        form.err = {
          message: "Pls fill all fields",
        };
        ctx.render(loginTemplate(form));
        return;
      }

      await login(username, password);
      ctx.page.redirect("/home");
    } catch (err) {
      form.err = {
        message: `${err.message}`,
      };
      ctx.render(loginTemplate(form));
    }
  }
}
