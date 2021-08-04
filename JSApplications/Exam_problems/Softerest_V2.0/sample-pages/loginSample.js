import { html } from "../node_modules/lit-html/lit-html.js";
// import { ifDefined } from "../node_modules/lit-html/directives/if-defined.js";
import { login } from "../Services/dataService.js";

const loginTemplate = (form) => html` <div class="container home wrapper my-md-5 pl-md-5">
  <div class="row-form d-md-flex flex-mb-equal">
    <div class="col-md-4">
      <img class="responsive" src="./images/idea.png" alt="" />
    </div>
    <form class="form-user col-md-7" action="" method="">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
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
      <div class="text-center mb-4 text-center">
        <button class="btn btn-lg btn-dark btn-block" type="submit">Sign In</button>
        <p class="alreadyUser">Don't have account? Then just <a href="">Sign-Up</a>!</p>
      </div>
      <p class="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
    </form>
  </div>
</div>`;

export async function loginView(ctx) {
  const form = { submit: onSubmit, err: [] };

  ctx.render(loginTemplate(form));

  async function onSubmit(e) {
    try {
      e.preventDefault();
      // mind the fields -- username or email or whatever?
      const data = new FormData(e.target);
      const user = {
        email: data.get("email").trim(),
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
