function validate() {
  let emailField = document.getElementById("email");
  emailField.addEventListener("change", valid);

  function valid(e) {
    let test = /[a-z]+@[a-z]+\.[a-z]+/g;
    if (e.target.value.match(test)) {
      e.target.classList.remove("error");
    } else {
      e.target.classList.add("error");
    }
    //console.log(e.target.value);
  }
}
