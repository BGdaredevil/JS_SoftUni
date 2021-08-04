import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { register } from "../Services/dataService.js";

const registerTemplate = (form) => html` <div class="container home wrapper my-md-5 pl-md-5">
  <div class="row-form d-md-flex flex-mb-equal">
    <div class="col-md-4">
      <img class="responsive" src="./images/idea.png" alt="" />
    </div>
    <form @submit=${form.submit} class="form-user col-md-7" action="" method="">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        ${form.err.length > 0
          ? html`${form.err.map((e) => html`<h1 class="h3 mb-3 font-weight-normal">${e}</h1>`)}`
          : ""}
      </div>
      <div class="form-label-group">
        <label for="inputEmail">Email</label>
        <input
          type="text"
          id="inputEmail"
          name="email"
          class="form-control"
          placeholder="Email"
          required=""
          autofocus=""
        />
      </div>
      <div class="form-label-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          class="form-control"
          placeholder="Password"
          required=""
        />
      </div>
      <div class="form-label-group">
        <label for="inputRepeatPassword">Repeat Password</label>
        <input
          type="password"
          id="inputRepeatPassword"
          name="repeatPassword"
          class="form-control"
          placeholder="Repeat Password"
          required=""
        />
      </div>
      <button class="btn btn-lg btn-dark btn-block" type="submit">Sign Up</button>
      <div class="text-center mb-4">
        <p class="alreadyUser">Don't have account? Then just <a href="/login">Sign-In</a>!</p>
      </div>
      <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
    </form>
  </div>
</div>`;

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
        repeatPassword: data.get("repeatPassword").trim(),
      };

      if (Object.values(newUser).includes("")) {
        Object.entries(newUser).forEach(([k, v]) => {
          if (v == "") {
            form.err.push(`Field ${k} is mandatory`);
          }
        });
      }

      if (newUser.repeatPassword !== newUser.password) {
        form.err.push("Passwords do not match");
      }

      if (form.err.length > 0) {
        ctx.render(registerTemplate(form));
        form.err = [];
        return;
      }

      await register(newUser);
      ctx.page.redirect("/home");
    } catch (err) {
      form.err = [`${err.message}`];
      ctx.render(registerTemplate(form));
      form.err = [];
      // alert(err);
      // console.log(err);
    }
  }
}
