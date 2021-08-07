import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

import * as api from "./services/apiService.js";

import notificationService from "./services/notificationService.js";
import nav from "./pages/nav.js";

//debug
window.api = api;
//debug

api.clearLocalStorage();

export const baseUrl = "http://localhost:3030";

const baseTemplate = () => html``;

const root = document.querySelector("body");
render(baseTemplate(), root);

const navLoc = root.querySelector("header#titlebar");
nav.settings.location = navLoc;

const mainLoc = root.querySelector("main");

notificationService.initialize(render, document.querySelector("div.container > div.alert"));

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

// page("/home", homeView);
// page("/login", loginView);
// page("/register", registerView);
// page("/create", createView);
// page("/logout", signOutUser);

page.start();
