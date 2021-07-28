import page from "./node_modules/page/page.mjs";
import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

import nav, { signOutUser } from "./Pages/navSample.js";
import { browseView } from "./Pages/browse.js";
import { createView } from "./Pages/create.js";
import { editView } from "./Pages/edit.js";
import { homeView } from "./Pages/home.js";
import { loginView } from "./Pages/login.js";
import { myTeamsView } from "./Pages/myTeams.js";
import { registerView } from "./Pages/register.js";
import {
  acceptRequestToJoin,
  declineRequestToJoin,
  requestToJoin,
  teamHomeView,
} from "./Pages/teamHome.js";

//debug
import * as api from "./Services/apiService.js";
window.api = api;
//debug

page(decoContext);
page(nav.getView);

page("/index.html", "/home");
page("/", "/home");

page("/browse", browseView);
page("/create", createView);
page("/edit/:id", editView);
page("/home", homeView);
page("/login", loginView);
page("/logout", signOutUser);
page("/my-teams", myTeamsView);
page("/register", registerView);
page("/team-home/:id", teamHomeView);
page("/join-team", requestToJoin);
page("/decline/:id", declineRequestToJoin);
page("/approve/:id", acceptRequestToJoin);

const baseTemplate = () => html``;

api.clearLocalStorage();

const baseUrl = "http://localhost:3030";
api.settings.baseUrl = baseUrl;

const root = document.querySelector("body");
render(baseTemplate(), root);

const navLoc = document.querySelector("header#titlebar");
const mainLoc = document.querySelector("main");

nav.settings.location = navLoc;

page.start();

async function decoContext(ctx, next) {
  ctx.navRender = (content) => render(content, navLoc);
  ctx.render = (content) => render(content, mainLoc);
  next();
}
