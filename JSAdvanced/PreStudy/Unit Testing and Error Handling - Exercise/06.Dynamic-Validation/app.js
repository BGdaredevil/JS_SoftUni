function validate() {
  let mail = document.querySelector("#email");
  mail.addEventListener("change", (e) => {
    let infoStr = e.target.value;
    let test = /[a-z]+@[a-z]+\.[a-z]+/g;

    if (test.exec(infoStr) === null) {
      //e.target.setAttribute("style", "border: 3px solid red");
      e.target.classList.add("error");
      //console.log("invalid");
    } else {
      e.target.classList.remove("error");
      //e.target.setAttribute("style", "border:");
      //console.log("valid");
    }
    //console.log(e.target.value);
  });
}
