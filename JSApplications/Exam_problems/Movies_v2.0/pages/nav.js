import { html } from "../node_modules/lit-html/lit-html.js";
import { getUser, isLogged, logout } from "../Services/dataService.js";

const settings = {
  location,
};

const navTemplate = (currLoc, user) => html`<a
    class="navbar-brand ${currLoc === "home" ? "text-light" : ""} "
    href="/home"
    >Movies</a
  >
  <ul class="navbar-nav ml-auto ">
    <li class="nav-item">
      ${user === null
        ? html` <a class="nav-link">Welcome, guest</a>`
        : html` <a class="nav-link">Welcome, ${user.email}</a>`}
    </li>

    ${user === null
      ? html`
          <li class="nav-item">
            <a class="nav-link ${currLoc === "login" ? "text-light" : ""} " href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${currLoc === "register" ? "text-light" : ""} " href="/register"
              >Register</a
            >
          </li>
        `
      : html`
          <li class="nav-item">
            <a class="nav-link ${currLoc === "logout" ? "text-light" : ""} " href="/logout"
              >Logout</a
            >
          </li>
        `}
  </ul>`;

async function getView(ctx, next) {
  let currLoc = ctx.path.split("/").filter((x) => x.length > 0)[0];
  ctx.navRender(navTemplate(currLoc, getUser()));
  next();
}

export async function signOutUser(ctx) {
  await logout();
  ctx.page.redirect("/home");
}

const nav = {
  getView,
  settings,
};

export default nav;
