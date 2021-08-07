import { html } from "../node_modules/lit-html/lit-html.js";
import { login } from "../services/dataService.js";
import notificationService from "../services/notificationService.js";

const loginTemplate = (form) => html` <section id="login">
  <div class="container">
    <form @submit=${form.submit} id="login-form" action="#" method="post">
      <h1>Login</h1>
      <p>Please enter your credentials.</p>
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
  const form = { submit: onSubmit, err: [] };

  ctx.render(loginTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      // mind the fields -- username or email or whatever?
      const data = new FormData(e.target);
      const user = {
        password: data.get("password").trim(),
        username: data.get("username").trim(),
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
      ctx.page.redirect("/all-listings");
      // notifications must be after the redirect
      notificationService.createNotification(`Wellcome, ${user.username}`, "success");
    } catch (err) {
      ctx.render(loginTemplate(form));
      notificationService.createNotification(err.message);
      form.err = [];
    }
  }
}
