import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

import * as api from "./services/apiService.js";

import nav, { signOutUser } from "./pages/nav.js";
import { homeView } from "./pages/homePage.js";
import { loginView } from "./pages/loginPage.js";
import { registerView } from "./pages/registerPage.js";
import { myListingsView } from "./pages/myListingsPage.js";
import { createView } from "./pages/createPage.js";
import { carListingsView } from "./pages/carListingsPage.js";
import { detailsView } from "./pages/detailsPage.js";
import { editView } from "./pages/editPage.js";
import { searchView } from "./pages/searchPage.js";

//debug
window.api = api;
//debug

api.clearLocalStorage();

export const baseUrl = "http://localhost:3030";
// settings.baseUrl = baseUrl;
// console.log(settings);

const baseTemplate = () => html` <header></header>
  <main id="site-content"></main>
  <footer>
    <p>&copy; All rights reserved</p>
  </footer>`;

const root = document.querySelector("#container");
render(baseTemplate(), root);

const navLoc = root.querySelector("header");
nav.settings.location = navLoc;

const mainLoc = root.querySelector("main#site-content");

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
page("/my-listings", myListingsView);
page("/car-listings", carListingsView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/search", searchView);
page("/logout", signOutUser);

page.start();
