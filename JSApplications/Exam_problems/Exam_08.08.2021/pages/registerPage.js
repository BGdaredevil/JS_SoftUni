import { html } from "../node_modules/lit-html/lit-html.js";
import { register } from "../services/dataService.js";
import notificationService from "../services/notificationService.js";

const registerTemplate = (form) => html` <section id="register-page" class="register">
  <form @submit=${form.submit} id="register-form" action="" method="">
    <fieldset>
      <legend>Register Form</legend>
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
      <p class="field">
        <label for="repeat-pass">Repeat Password</label>
        <span class="input">
          <input
            type="password"
            name="confirm-pass"
            id="repeat-pass"
            placeholder="Repeat Password"
          />
        </span>
      </p>
      <input class="button submit" type="submit" value="Register" />
    </fieldset>
  </form>
</section>`;

export async function registerView(ctx) {
  const form = { submit: onSubmit, err: [] };
  ctx.render(registerTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const newUser = {
        email: data.get("email").trim(),
        password: data.get("password").trim(),
        repass: data.get("confirm-pass").trim(),
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
      ctx.page.redirect("/home");
      // notifications must be after the redirect
      notificationService.createNotification(`Wellcome, ${newUser.email}`, "success");
    } catch (err) {
      ctx.render(registerTemplate(form));
      notificationService.createNotification(err.message);
      form.err = [];
      console.log(err);
    }
  }
}
