import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

import * as api from "./services/apiService.js";

import nav, { signOutUser } from "./pages/nav.js";
import { homeView } from "./Pages/homePage.js";
import { loginView } from "./Pages/loginPage.js";
import { registerView } from "./Pages/registerPage.js";
import { createView } from "./Pages/createPage.js";
import { detailsView } from "./Pages/detailsPage.js";
import { editView } from "./Pages/editPage.js";
// import { homeView } from "./Pages/browse.js";

//debug
window.api = api;
//debug

// api.clearLocalStorage();

export const baseUrl = "http://localhost:3030";

const baseTemplate = () => html` <header></header>
  <main id="root"></main>
  <footer>
    <p><a href="https://softuni.bg">Software University</a> - JS Applications @ 2020</p>
  </footer>`;

const root = document.querySelector("body");
render(baseTemplate(), root);

const navLoc = document.querySelector("header");
nav.settings.location = navLoc;

const mainLoc = document.querySelector("main#root");

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
