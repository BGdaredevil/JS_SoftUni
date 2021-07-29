import { html } from "../node_modules/lit-html/lit-html.js";
// import { isLogged, logout } from "../Services/dataService.js";

const settings = {
  location,
};

const navTemplate = () => html` <section id="notifications">
  <div id="errorBox" class="notification">
    <span>MESSAGE</span>
  </div>
</section>`;

async function getView(ctx, next) {
  let currLoc = ctx.path.split("/").filter((x) => x.length > 0)[0];
  ctx.navRender(navTemplate());
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
