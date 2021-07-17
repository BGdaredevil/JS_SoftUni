import viewSelector from "../viewSelector.js";

let location = undefined;
let form = undefined;

export function startPoint(ref) {
  location = ref;
  location.dataset.viewKey = "add-movie";

  form = location.querySelector("form");
  form.addEventListener("submit", viewSelector.handler);
}

export function getView() {
  console.log("hello");
  return location;
}

let addMovie = { startPoint, getView };

export default addMovie;
