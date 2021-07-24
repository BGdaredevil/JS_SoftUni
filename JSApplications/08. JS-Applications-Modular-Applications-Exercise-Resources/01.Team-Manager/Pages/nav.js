import { html } from "../node_modules/lit-html/lit-html.js";
import { isLogged, logout } from "../Services/dataService.js";

const settings = {
  location,
};

const navTemplate = (isUser) => html`<a href="/home" class="site-logo">Team Manager</a>
  <nav>
    <a href="/browse" class="action">Browse Teams</a>
    ${isUser ? "" : html`<a href="/login" class="action">Login</a>`}
    ${isUser ? "" : html`<a href="/register" class="action">Register</a>`}
    ${isUser ? html`<a href="/my-teams" class="action">My Teams</a>` : ""}
    ${isUser ? html`<a href="/logout" class="action">Logout</a>` : ""}
  </nav>`;

async function getView(ctx, next) {
  ctx.navRender(navTemplate(isLogged()));
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
