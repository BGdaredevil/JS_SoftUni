import { html } from "../node_modules/lit-html/lit-html.js";
import { getUser, isLogged, logout } from "../services/dataService.js";

const settings = {
  location,
};

const navTemplate = (isUser, currLoc, burgerEvent) => html` <div class="container">
  <a class="navbar-brand" href="/">
    <img src="./images/idea.png" alt="" />
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarResponsive"
    aria-controls="navbarResponsive"
    aria-expanded="false"
    aria-label="Toggle navigation"
    @click=${burgerEvent}
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div
    class="collapse navbar-collapse"
    id="navbarResponsive"
    @click=${(e) => e.currentTarget.classList.remove("show")}
  >
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ${currLoc === "dashboard" ? "active" : ""}">
        <a class="nav-link" href="/dashboard">Dashboard</a>
      </li>
      ${isUser
        ? html` <li class="nav-item ${currLoc === "create" ? "active" : ""}">
              <a class="nav-link" href="/create">Create</a>
            </li>
            <li class="nav-item ${currLoc === "logout" ? "active" : ""}">
              <a class="nav-link" href="/logout">Logout</a>
            </li>`
        : html` <li class="nav-item ${currLoc === "login" ? "active" : ""}">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item ${currLoc === "register" ? "active" : ""}">
              <a class="nav-link" href="/register">Register</a>
            </li>`}
    </ul>
  </div>
</div>`;

async function getView(ctx, next) {
  let currLoc = ctx.path.split("/").filter((x) => x.length > 0)[0];
  ctx.navRender(navTemplate(isLogged(), currLoc, bE));
  next();
}

function bE(e) {
  let menuList = e.currentTarget.parentElement.querySelector("div");
  let menuListClasses = [...menuList.classList];
  menuListClasses.includes("show")
    ? menuList.classList.remove("show")
    : menuList.classList.add("show");

  console.log(e.currentTarget.parentElement.querySelector("div"));
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
