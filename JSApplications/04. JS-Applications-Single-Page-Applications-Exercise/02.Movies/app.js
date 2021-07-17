import addMovie from "./pages/addMovie.js";
import home from "./pages/home.js";
import nav from "./pages/nav.js";
import editMovie from "./pages/editMovie.js";
import formLogIn from "./pages/formLogIn.js";
import formRegister from "./pages/formRegister.js";
import movieDetails from "./pages/movieDetails.js";
import movieList from "./pages/movieList.js";
import navBtn from "./pages/navBtn.js";
import viewSelector from "./viewSelector.js";
import auth from "./services/auth.js";

export const allMenuItemsSelector = ".menu-item";
let root = undefined;

(() => {
  let rootSelector = "#app";
  root = document.querySelector(rootSelector);
  // auth.clearStorage();

  addMovie.startPoint(document.querySelector("#add-movie"));
  // navBtn.startPoint(document.querySelector());
  editMovie.startPoint(document.querySelector("#edit-movie"));
  // movieList.startPoint(document.querySelector("#movie"));

  //done
  movieDetails.startPoint(document.querySelector("#movie-example"));
  home.startPoint(document.querySelector("#home-page"));
  nav.startPoint(document.querySelector("nav"));
  formRegister.startPoint(document.querySelector("#form-sign-up"));
  formLogIn.startPoint(document.querySelector("#form-login"));

  viewSelector.startPoint(
    document.querySelectorAll(allMenuItemsSelector),
    allMenuItemsSelector,
    changeView
  );
  viewSelector.goToPage("home-page");
})();

async function changeView(view) {
  // if (view.value === undefined) {
  //   view = home.getView();
  // }
  view = await view;
  // console.log(view);
  [...root.children].forEach((x) => x.remove());
  root.appendChild(view);
}
