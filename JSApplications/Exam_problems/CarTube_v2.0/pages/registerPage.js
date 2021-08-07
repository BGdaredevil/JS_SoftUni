import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { register } from "../services/dataService.js";
import notificationService from "../services/notificationService.js";

const registerTemplate = (form) => html` <section id="register">
  <div class="container">
    <form @submit=${form.submit} id="register-form">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
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
  const form = { submit: onSubmit, err: [] };
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

      if (Object.values(newUser).includes("")) {
        Object.entries(newUser).forEach(([k, v]) => {
          if (v == "") {
            form.err.push(`Field ${k} is mandatory`);
          }
        });
      }

      if (newUser.repass !== newUser.password) {
        form.err.push("Passwords do not match");
      }

      if (form.err.length > 0) {
        ctx.render(registerTemplate(form));
        form.err.forEach((e) => notificationService.createNotification(e));
        form.err = [];
        return;
      }

      await register(newUser);
      ctx.page.redirect("/all-listings");
      // notifications must be after the redirect
      notificationService.createNotification(`Wellcome, ${newUser.username}`, "success");
    } catch (err) {
      ctx.render(registerTemplate(form));
      notificationService.createNotification(err.message);
      form.err = [];
      console.log(err);
    }
  }
}
