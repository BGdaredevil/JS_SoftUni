import { html } from "../node_modules/lit-html/lit-html.js";
import { getUser, isLogged, logout } from "../services/dataService.js";

const settings = {
  location,
};

const loggedInTemplate = (user, signOutUser) => html`
  <div id="user">
    <span>Welcome, ${user.email}</span>
    <a class="button" href="/my-books">My Books</a>
    <a class="button" href="/create">Add Book</a>
    <a class="button" href="javascript:void(0)" @click=${signOutUser}>Logout</a>
  </div>
`;

const guestTemplate = () => html`
  <div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
  </div>
`;

const navTemplate = (isUser, user, signOutUser) => html` <nav class="navbar">
  <section class="navbar-dashboard">
    <a href="/dashboard">Dashboard</a>
    ${isUser ? html` ${loggedInTemplate(user, signOutUser)} ` : html` ${guestTemplate()} `}
  </section>
</nav>`;

async function getView(ctx, next) {
  ctx.navRender(navTemplate(isLogged(), getUser(), signOutUser));
  async function signOutUser() {
    await logout();
    ctx.page.redirect("/home");
  }
  next();
}

const nav = {
  getView,
  settings,
};

export default nav;
