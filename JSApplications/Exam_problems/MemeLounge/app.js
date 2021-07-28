import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

import * as api from "./Services/apiService.js";

import nav, { signOutUser } from "./Pages/nav.js";
import { wellcomeView } from "./Pages/homePage.js";
import { loginView } from "./Pages/loginPage.js";
import { registerView } from "./Pages/registerPage.js";
import { memeView } from "./Pages/allMemesPage.js";
import { createView } from "./Pages/createPage.js";
import { editView } from "./Pages/editMemePage.js";
import { detailsView } from "./Pages/detailsPage.js";
import { profileView } from "./Pages/profilePage.js";

//debug
window.api = api;
//debug

page(decoContext);
page(nav.getView);

page("/index.html", "/home");
page("/", "/home");

page("/home", wellcomeView);
page("/login", loginView);
page("/register", registerView);
page("/meme-feed", memeView);
page("/create", createView);
page("/edit/:id", editView);
page("/details/:id", detailsView);
page("/profile/:id", profileView);
page("/logout", signOutUser);

export const globalErr = {};

const baseTemplate = (err) => html` <nav></nav>
  <main></main>
  <footer class="footer">
    <p>Created by SoftUni Delivery Team</p>
  </footer>`;

api.clearLocalStorage();

const baseUrl = "http://localhost:3030";
api.settings.baseUrl = baseUrl;

const root = document.querySelector("#container");
render(baseTemplate(), root);

const navLoc = document.querySelector("#container nav");
const mainLoc = document.querySelector("#container main");

nav.settings.location = navLoc;

page.start();

async function decoContext(ctx, next) {
  ctx.navRender = (content) => render(content, navLoc);
  ctx.render = (content) => render(content, mainLoc);
  next();
}
