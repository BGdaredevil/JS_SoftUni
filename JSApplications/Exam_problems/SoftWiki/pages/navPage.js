import { html } from "../node_modules/lit-html/lit-html.js";
import { getUser, isLogged, logout } from "../services/dataService.js";

const settings = {
  location,
};

const navTemplate = (isUser, currLoc) => html` <h1>
    ${isUser
      ? html` <a class="home" href="/home">SoftWiki</a> `
      : html` <a class="home" href="/login">SoftWiki</a> `}
  </h1>
  <nav class="nav-buttons">
    ${isUser
      ? html`
          <a href="/create">Create</a>
          <a href="/logout">Logout</a>
        `
      : html` <a href="/register">Register</a> `}
  </nav>`;

async function getView(ctx, next) {
  let currLoc = ctx.path.split("/").filter((x) => x.length > 0)[0];
  ctx.navRender(navTemplate(isLogged(), currLoc));
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
