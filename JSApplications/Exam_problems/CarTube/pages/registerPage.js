import { html } from "../node_modules/lit-html/lit-html.js";
import { register } from "../Services/dataService.js";

const registerTemplate = (form) => html` <section id="register">
  <div class="container">
    <form @submit=${form.submit} id="register-form">
      <h1>Register</h1>
      ${form.err !== undefined
        ? html` <p><strong>${form.err.message}</strong></p>`
        : html` <p>Please fill in this form to create an account.</p>`}
      <hr />
      <p>Username</p>
      <input type="text" placeholder="Enter Username" name="username" required />

      <p>Password</p>
      <input type="password" placeholder="Enter Password" name="password" required />

      <p>Repeat Password</p>
      <input type="password" placeholder="Repeat Password" name="repeatPass" required />
      <hr />

      <input type="submit" class="registerbtn" value="Register" />
    </form>
    <div class="signin">
      <p>Already have an account? <a href="/login">Sign in</a>.</p>
    </div>
  </div>
</section>`;

export async function registerView(ctx) {
  let form = { submit: onSubmit };
  ctx.render(registerTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const newUser = {
        username: data.get("username").trim(),
        password: data.get("password").trim(),
        repass: data.get("repeatPass").trim(),
      };

      if (newUser.password == "" || newUser.username == "" || newUser.repass == "") {
        form.err = {
          message: "Pls fill all fields",
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

      await register(newUser);
      ctx.page.redirect("/home");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
