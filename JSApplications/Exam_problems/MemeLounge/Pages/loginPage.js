import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from "../Services/dataService.js";
import { popupSection } from "./commonLoader.js";

const loginTemplate = (form) => html`
  <section id="login">
    <form @submit=${form.submit} id="login-form">
      <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text" />
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password" />
        <input type="submit" class="registerbtn button" value="Login" />
        <div class="container signin">
          <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
      </div>
    </form>
  </section>
  ${form.err !== undefined ? popupSection(form.err) : ""}
`;

export async function loginView(ctx) {
  let form = { submit: onSubmit };
  console.log(form);
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
      ctx.page.redirect("/meme-feed");
    } catch (err) {
      form.err = {
        message: "Pls fill all fields",
      };
      ctx.render(loginTemplate(form));
    }
  }
}
