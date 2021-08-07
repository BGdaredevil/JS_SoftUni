import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

import * as api from "./services/apiService.js";

import notificationService from "./services/notificationService.js";
import nav from "./pages/navPage.js";
import { homeView } from "./pages/homePage.js";
import { allListingsView, myListingsView, searchView } from "./pages/allListingsPage.js";
import { loginView } from "./pages/loginPage.js";
import { registerView } from "./pages/registerPage.js";
import { createView } from "./pages/createPage.js";
import { detailsView } from "./pages/detailsPage.js";
import { editView } from "./pages/editPage.js";

//debug
// window.api = api;
//debug

api.clearLocalStorage();

export const baseUrl = "http://localhost:3030";

const baseTemplate = () => html` <div id="container">
  <header></header>
  <div class="alert"></div>
  <main id="site-content"></main>
  <footer>
    <p>&copy; All rights reserved</p>
  </footer>
</div>`;

const root = document.querySelector("body");
render(baseTemplate(), root);

const navLoc = root.querySelector("header");
nav.settings.location = navLoc;

const mainLoc = root.querySelector("main#site-content");

notificationService.initialize(render, document.querySelector("div#container > div.alert"));

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
page("/all-listings", allListingsView);
page("/search", searchView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/my-listings", myListingsView);
page("/details/:id", detailsView);
page("/edit/:id", editView);

page.start();
