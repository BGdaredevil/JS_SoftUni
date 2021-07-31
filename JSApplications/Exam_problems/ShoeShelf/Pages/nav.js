import { html } from "../node_modules/lit-html/lit-html.js";
import { getUser, isLogged, logout } from "../Services/dataService.js";

const settings = {
  location,
};

const navTemplate = (user, currLoc) => html` <nav>
  <ul>
    ${user
      ? html` <li>
          <a href="/create">Create new offer</a>
        </li>`
      : ""}
    ${user
      ? html` <li>
          <a href="/home">
            <img src="../public/sneakers.png" alt="" />
          </a>
        </li>`
      : html` <li class="site-logo">Shoe</li>
          <li>
            <a href="/home">
              <img src="../public/sneakers.png" alt="" />
            </a>
          </li>
          <li class="site-logo">Shelf</li>`}
    ${user
      ? html` <li>
          Welcome, ${user.email} |
          <a href="/logout">Logout</a>
        </li>`
      : ""}
  </ul>
</nav>`;

async function getView(ctx, next) {
  let currLoc = ctx.path.split("/").filter((x) => x.length > 0)[0];
  ctx.navRender(navTemplate(getUser(), currLoc));
  next();
}

export async function signOutUser(ctx) {
  await logout();
  ctx.page.redirect("/login");
}

const nav = {
  getView,
  settings,
};

export default nav;
