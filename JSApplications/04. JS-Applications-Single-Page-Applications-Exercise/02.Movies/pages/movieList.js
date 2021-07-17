let location = undefined;

export function startPoint(ref) {
  location = ref;
  location.dataset.viewKey = "movie-list";
}

export function getView() {
  return location;
}

let movieList = { startPoint, getView };

export default movieList;
