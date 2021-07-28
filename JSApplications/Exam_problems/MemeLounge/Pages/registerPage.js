import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { register } from "../Services/dataService.js";
import { popupSection } from "./commonLoader.js";

const registerTemplate = (form) => html` ${form.err !== undefined ? popupSection(form.err) : ""}
  <section id="register">
    <form @submit=${form.submit} id="register-form">
      <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter Username" name="username" />
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email" />
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password" />
        <label for="repeatPass">Repeat Password</label>
        <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass" />
        <div class="gender">
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register" />
        <div class="container signin">
          <p>Already have an account?<a href="/login">Sign in</a>.</p>
        </div>
      </div>
    </form>
  </section>`;

export async function registerView(ctx) {
  let form = { submit: onSubmit };
  ctx.render(registerTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const newUser = {
        email: data.get("email").trim(),
        username: data.get("username").trim(),
        password: data.get("password").trim(),
        repass: data.get("repeatPass").trim(),
        gender: data.get("gender").trim(),
      };

      if (
        newUser.email == "" ||
        newUser.password == "" ||
        newUser.username == "" ||
        newUser.repass == "" ||
        newUser.gender == ""
      ) {
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
      ctx.page.redirect("/meme-feed");
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
}
