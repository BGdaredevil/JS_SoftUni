import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

import * as api from "./services/apiService.js";

import nav, { signOutUser } from "./pages/nav.js";
import { homeView } from "./pages/homePage.js";
import { loginView } from "./pages/loginPage.js";
import { registerView } from "./pages/registerPage.js";
import { createView } from "./pages/createPage.js";
import { detailsView } from "./pages/detailsPage.js";
import { editView } from "./pages/editPage.js";
import notificationService from "./services/notificationService.js";

//debug
window.api = api;
//debug

api.clearLocalStorage();

export const baseUrl = "http://localhost:3030";

const baseTemplate = () => html` <div class="container" id="container">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark"></nav>
  <div class="alert"></div>
  <main></main>
  <footer class="page-footer font-small">
    <div class="footer-copyright text-center py-3">
      © 2020
      <a href="#" class="text-dark">JS Applications</a>
    </div>
  </footer>
</div>`;

const root = document.querySelector("body");
render(baseTemplate(), root);

const navLoc = document.querySelector(".container nav");
nav.settings.location = navLoc;

const mainLoc = document.querySelector("main");

notificationService.initialize(render, document.querySelector("div.container > div.alert"));

async function decoContext(ctx, next) {
  ctx.navRender = (content) => render(content, navLoc);
  ctx.render = (content) => render(content, mainLoc);
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
page("/details/:id", detailsView);
page("/edit/:id", editView);

page.start();
