(() => {
  let logRegUrl = "http://localhost:3030/users";

  let regForm = document.querySelector('div.card-wrapper form[action="/register"]');
  regForm.addEventListener("submit", regSubmit);

  let logForm = document.querySelector('div.card-wrapper form[action="/login"]');
  logForm.addEventListener("submit", logSubmit);

  function regSubmit(ev) {
    ev.preventDefault();
    let data = Object.fromEntries(new FormData(regForm));
    console.log(data);

    if (data.password !== data.rePass) {
      alert("Passwords do not match");
      return;
    }

    fetch(`${logRegUrl}/register`, {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({ email: data.email, password: data.password, rePass: data.rePass }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        regForm.reset();
        throw new Error("A user with the same email already exists");
      })
      .then((resp) => {
        sessionStorage.setItem("accessToken", resp.accessToken);
        alert(`Thank you for registering!\n\nPlease login to use our services`);
        logForm.querySelector('input[name="email"]').value = data.email;
        logForm.querySelector('input[name="password"]').value = data.password;
      })
      .finally(() => {
        regForm.reset();
      })
      .catch((err) => alert(err));
  }

  function logSubmit(ev) {
    ev.preventDefault();
    let data = Object.fromEntries(new FormData(logForm));

    fetch(`${logRegUrl}/login`, {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({ email: data.email, password: data.password }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Login or password don't match");
      })
      .then((resp) => {
        sessionStorage.setItem("accessToken", resp.accessToken);

        // since the folowing code is in the server:

        // const userService = new Service_1();

        // userService.post('register', onRegister);
        // userService.post('login', onLogin);
        // userService.get('logout', onLogout);
        // // TODO: get user details

        // i have to resort to saving all user info in session....

        sessionStorage.setItem("loggedPerson", JSON.stringify(resp));

        alert(`Sucess!\n\nWizzing you off to the data`);
        location.assign("./index.html");
      })
      .finally(() => {
        logForm.reset();
      })
      .catch((err) => alert(err));
  }
})();
