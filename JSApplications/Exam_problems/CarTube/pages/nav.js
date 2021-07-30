import { html } from "../node_modules/lit-html/lit-html.js";
import { getUser, isLogged, logout } from "../services/dataService.js";

const settings = {
  location,
};

const navTemplate = (user, currLoc) => html` <nav>
  <a class="${currLoc === "home" ? "active" : ""}" href="/home">Home</a>
  <a class="${currLoc === "car-listings" ? "active" : ""}" href="/car-listings">All Listings</a>
  <a class="${currLoc === "search" ? "active" : ""}" href="/search">By Year</a>

  ${user
    ? html` <div id="profile">
        <a>Welcome ${user.username}</a>
        <a class="${currLoc === "my-listings" ? "active" : ""}" href="/my-listings">My Listings</a>
        <a class="${currLoc === "create" ? "active" : ""}" href="/create">Create Listing</a>
        <a class="${currLoc === "logout" ? "active" : ""}" href="/logout">Logout</a>
      </div>`
    : html` <div id="guest">
        <a class="${currLoc === "login" ? "active" : ""}" href="/login">Login</a>
        <a class="${currLoc === "register" ? "active" : ""}" href="/register">Register</a>
      </div>`}
</nav>`;

async function getView(ctx, next) {
  let currLoc = ctx.path.split("/").filter((x) => x.length > 0)[0];

  ctx.navRender(navTemplate(getUser(), currLoc));
  next();
}

export async function signOutUser(ctx) {
  await logout();
  ctx.page.redirect("/");
}

const nav = {
  getView,
  settings,
};

export default nav;
