import { html } from "../node_modules/lit-html/lit-html.js";
import { getUser, isLogged, logout } from "../services/dataService.js";

const settings = {
  location,
};

const loggedInTemplate = (currLoc, user, signOutUser) => html` <div id="profile">
  <a>Welcome ${user.username}</a>
  <a class="${currLoc === "my-listings" ? "active" : ""}" href="/my-listings">My Listings</a>
  <a class="${currLoc === "create" ? "active" : ""}" href="/create">Create Listing</a>
  <a href="javascript:void(0)" @click=${() => signOutUser()}>Logout</a>
</div>`;

const guestTemplate = (currLoc) => html`
  <div id="guest">
    <a class="${currLoc === "login" ? "active" : ""}" href="/login">Login</a>
    <a class="${currLoc === "register" ? "active" : ""}" href="/register">Register</a>
  </div>
`;

const navTemplate = (isUser, currLoc, user, signOutUser) => html` <nav>
  <a class="${currLoc === "home" ? "active" : ""}" href="/home">Home</a>
  <a class="${currLoc === "all-listings" ? "active" : ""}" href="/all-listings">All Listings</a>
  <a class="${currLoc === "search" ? "active" : ""}" href="/search">By Year</a>
  ${isUser
    ? html`${loggedInTemplate(currLoc, user, signOutUser)}`
    : html`${guestTemplate(currLoc)}`}
</nav>`;

async function getView(ctx, next) {
  let currLoc = ctx.path.split("/").filter((x) => x.length > 0)[0];
  ctx.navRender(navTemplate(isLogged(), currLoc, getUser(), signOutUser));

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
