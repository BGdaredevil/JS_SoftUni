import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { register } from "../Services/dataService.js";

const registerTemplate = (form) => html` <div class="container auth">
  <form action="" method="" @submit=${form.submit}>
    <fieldset>
      <legend>
        Register
        ${form.err !== undefined ? html` <p><strong>${form.err.message}</strong></p> ` : ""}
      </legend>
      <blockquote>
        Knowledge is not simply another commodity. On the contrary. Knowledge is never used up. It
        increases by diffusion and grows by dispersion.
      </blockquote>
      <p class="field email">
        <input type="email" id="email" name="email" placeholder="maria@email.com" />
        <label for="email">Email:</label>
      </p>
      <p class="field password">
        <input type="password" name="password" id="register-pass" />
        <label for="register-pass">Password:</label>
      </p>
      <p class="field password">
        <input type="password" name="rep-pass" id="rep-pass" />
        <label for="rep-pass">Repeat password:</label>
      </p>
      <p class="field submit">
        <button class="btn submit" type="submit">Register</button>
      </p>
      <p class="field">
        <span>If you already have profile click <a href="/login">here</a></span>
      </p>
    </fieldset>
  </form>
</div>`;

export async function registerView(ctx) {
  let form = { submit: onSubmit };
  ctx.render(registerTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const newUser = {
        email: data.get("email").trim(),
        password: data.get("password").trim(),
        "rep-pass": data.get("rep-pass").trim(),
      };

      if (Object.values(newUser).includes("")) {
        form.err = {
          message: "All fields are mandatory",
        };
        ctx.render(registerTemplate(form));
        return;
      }

      if (newUser["rep-pass"] !== newUser.password) {
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
