let location = undefined;

export function startPoint(ref) {
  location = ref;
  location.dataset.viewKey = "edit-movie";
}

export function getView() {
  return location;
}

let editMovie = { startPoint, getView };

export default editMovie;
