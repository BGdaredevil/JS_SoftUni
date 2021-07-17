let location = undefined;

export function startPoint(ref) {
  location = ref;
}

export function getView() {
  return location;
}

let navBtn = { startPoint, getView };

export default navBtn;
