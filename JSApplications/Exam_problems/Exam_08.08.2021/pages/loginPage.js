import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from "../services/dataService.js";
import notificationService from "../services/notificationService.js";

const loginTemplate = (form) => html` <section id="login-page" class="login">
  <form @submit=${form.submit} id="login-form" action="" method="">
    <fieldset>
      <legend>Login Form</legend>
      <p class="field">
        <label for="email">Email</label>
        <span class="input">
          <input type="text" name="email" id="email" placeholder="Email" />
        </span>
      </p>
      <p class="field">
        <label for="password">Password</label>
        <span class="input">
          <input type="password" name="password" id="password" placeholder="Password" />
        </span>
      </p>
      <input class="button submit" type="submit" value="Login" />
    </fieldset>
  </form>
</section>`;

export async function loginView(ctx) {
  const form = { submit: onSubmit, err: [] };

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
        Object.entries(user).forEach(([k, v]) => {
          if (v == "") {
            form.err.push(`Field ${k} is mandatory`);
          }
        });
      }

      if (form.err.length > 0) {
        ctx.render(loginTemplate(form));
        form.err.forEach((e) => notificationService.createNotification(e));
        form.err = [];
        return;
      }

      await login(user);
      ctx.page.redirect("/home");
      // notifications must be after the redirect
      notificationService.createNotification(`Wellcome, ${user.email}`, "success");
    } catch (err) {
      ctx.render(loginTemplate(form));
      notificationService.createNotification(err.message);
      form.err = [];
    }
  }
}
