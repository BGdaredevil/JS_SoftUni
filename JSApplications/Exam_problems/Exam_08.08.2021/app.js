import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

// import * as api from "./services/apiService.js";

import notificationService from "./services/notificationService.js";
import nav from "./pages/navPage.js";
import { dashboardView, myBooksView } from "./pages/dashboardPage.js";
import { loginView } from "./pages/loginPage.js";
import { registerView } from "./pages/registerPage.js";
import { createView } from "./pages/createPage.js";
import { detailsView } from "./pages/detailsPage.js";
import { editView } from "./pages/editPage.js";

//debug
// window.api = api;
//debug

// api.clearLocalStorage(); ----- has issues with the tests for some reason....

export const baseUrl = "http://localhost:3030";

const baseTemplate = () => html` <div id="container">
  <header id="site-header"></header>
  <div id="my-alert"></div>
  <main id="site-content"></main>
  <footer id="site-footer">
    <p>@OnlineBooksLibrary</p>
  </footer>
</div>`;

const root = document.querySelector("body > div#container");
render(baseTemplate(), root);

const navLoc = root.querySelector("header#site-header");
nav.settings.location = navLoc;

const mainLoc = root.querySelector("main#site-content");

notificationService.initialize(render, document.querySelector("div#my-alert"));

async function decoContext(ctx, next) {
  ctx.navRender = (content) => render(content, navLoc);
  ctx.render = (content) => render(content, mainLoc);
  next();
}

page(decoContext);
page(nav.getView);

page("/index.html", "/home");
page("/", "/home");
page("/home", "/dashboard");

page("/dashboard", dashboardView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/details/:id", detailsView);
page("/edit/:id", editView);
page("/my-books", myBooksView);

page.start();
