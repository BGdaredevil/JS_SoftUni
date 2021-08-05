import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { register } from "../Services/dataService.js";
import notificationService from "../services/notificationService.js";

const registerTemplate = (form) => html` <section id="form-sign-up">
  <form @submit=${form.submit} class="text-center border border-light p-5" action="#" method="post">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" placeholder="Email" name="email" value="" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" placeholder="Password" name="password" value="" />
    </div>

    <div class="form-group">
      <label for="repeatPassword">Repeat Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Repeat-Password"
        name="repeatPassword"
        value=""
      />
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
  </form>
</section>`;

export async function registerView(ctx) {
  let form = { submit: onSubmit, err: [] };
  ctx.render(registerTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const newUser = {
        email: data.get("email").trim(),
        password: data.get("password").trim(),
        repass: data.get("repeatPassword").trim(),
      };

      if (Object.values(newUser).includes("")) {
        form.err.push("All fields are mandatory");
      }

      if (newUser.password.length < 6) {
        form.err.push("Password length must be at least 6 characters");
      }

      if (newUser.repass !== newUser.password) {
        form.err.push("passwords do not match");
      }

      if (form.err.length > 0) {
        form.err.forEach((e) => notificationService.createNotification(e));
        form.err = [];
        ctx.render(registerTemplate(form));
        return;
      }

      await register(newUser);
      ctx.page.redirect("/home");
      notificationService.createNotification(`Wellcome, ${user.email}`, "success");
    } catch (err) {
      notificationService.createNotification(err.message);
      console.log(err);
    }
  }
}
