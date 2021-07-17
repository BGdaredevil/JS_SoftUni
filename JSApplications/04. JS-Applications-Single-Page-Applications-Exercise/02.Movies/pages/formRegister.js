import auth from "../services/auth.js";
import viewSelector from "../viewSelector.js";
import nav from "./nav.js";

let location = undefined;

export function startPoint(ref) {
  location = ref;
  location.dataset.viewKey = "form-register";

  let form = location.querySelector("form");
  form.addEventListener("submit", requestRegistration);
}

export function getView() {
  return location;
}

async function requestRegistration(e) {
  e.preventDefault();
  try {
    let data = new FormData(e.target);
    let dataObj = {
      email: data.get("email"),
      password: data.get("password"),
      repeatPassword: data.get("repeatPassword"),
    };

    if (
      dataObj.email.trim() === "" ||
      dataObj.password.trim() === "" ||
      dataObj.repeatPassword.trim() === ""
    ) {
      alert("Fields cannot be empty");
    }

    if (dataObj.password.length < 6) {
      alert("Password must be at least 6 characters");
    }

    if (dataObj.password !== dataObj.repeatPassword) {
      alert("Passwords don't match");
    }

    await auth.register(dataObj);
    e.target.reset();
    nav.loginUser();
    viewSelector.goToPage("home-page");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

let formRegister = { startPoint, getView };

export default formRegister;
