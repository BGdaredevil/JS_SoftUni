import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

import * as api from "./services/apiService.js";

import nav, { signOutUser } from "./pages/navPage.js";
import { homeView } from "./pages/homePage.js";
import { loginView } from "./pages/loginPage.js";
import { registerView } from "./pages/registerPage.js";
import { createView } from "./pages/createPage.js";
import { dashboardView } from "./pages/dashboardPage.js";
import { detailsView } from "./pages/detailsPage.js";

//debug
window.api = api;
//debug

api.clearLocalStorage();

export const baseUrl = "http://localhost:3030";

const baseTemplate = () => html` <nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>
  <main id="main-content"></main>
  <footer class="footer">
    <div class="container-footer">
      <span>© We cherish your ideas! Share them with others!</span>
    </div>
  </footer>`;

const root = document.querySelector("body#root");
render(baseTemplate(), root);

const navLoc = document.querySelector("body#root > nav");
nav.settings.location = navLoc;

const mainLoc = document.querySelector("main#main-content");

async function decoContext(ctx, next) {
  ctx.navRender = (content) => render(content, navLoc);
  ctx.render = (content) => render(content, mainLoc);
  //notifications are added here and you make a nav-like page...
  //todo make better init function...
  //todo make better notification service...
  next();
}

page(decoContext);
page(nav.getView);

page("/index.html", "/home");
page("/", "/home");

page("/home", homeView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/logout", signOutUser);
page("/dashboard", dashboardView);
page("/details/:id", detailsView);
// page("/edit/:id", dashboardView);

page.start();
