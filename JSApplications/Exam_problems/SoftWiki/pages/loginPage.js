import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { login } from "../Services/dataService.js";

const loginTemplate = (form) => html` <div class="container auth">
  <form action="" method="" @submit=${form.submit}>
    <fieldset>
      <legend>
        Login ${form.err !== undefined ? html` <p><strong>${form.err.message}</strong></p> ` : ""}
      </legend>

      <blockquote>
        Knowledge is like money: to be of value it must circulate, and in circulating it can
        increase in quantity and, hopefully, in value
      </blockquote>
      <p class="field email">
        <input type="email" id="email" name="email" placeholder="maria@email.com" />
        <label for="email">Email:</label>
      </p>
      <p class="field password">
        <input type="password" id="login-pass" name="password" />
        <label for="login-pass">Password:</label>
      </p>
      <p class="field submit">
        <button class="btn submit" type="submit">Log In</button>
      </p>
      <p class="field">
        <span>If you don't have profile click <a href="/register">here</a></span>
      </p>
    </fieldset>
  </form>
</div>`;

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
