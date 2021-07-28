import { html } from "../node_modules/lit-html/lit-html.js";
import { getUser, isLogged, logout } from "../Services/dataService.js";

const settings = {
  location,
};

const navTemplate = (isUser, loc, user) => html`
  <a href="/meme-feed" class=${loc === "meme-feed" ? "active" : ""}>All Memes</a>
  ${isUser
    ? html` <div class="user">
        <a href="/create" class=${loc === "create" ? "active" : ""}>Create Meme</a>
        <div class="profile">
          <span>Welcome, ${user.email}</span>
          <a href="/profile/${user._id}" class=${loc === "profile" ? "active" : ""}>My Profile</a>
          <a href="/logout">Logout</a>
        </div>
      </div>`
    : html` <div class="guest">
        <div class="profile">
          <a href="/login" class=${loc === "login" ? "active" : ""}>Login</a>
          <a href="/register" class=${loc === "register" ? "active" : ""}>Register</a>
        </div>
        <a href="/home" class=${loc === "home" ? "active" : ""}>Home Page</a>
      </div>`}
`;

async function getView(ctx, next) {
  let currLoc = ctx.path.split("/").filter((x) => x.length > 0)[0];
  ctx.navRender(navTemplate(isLogged(), currLoc, getUser()));
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
