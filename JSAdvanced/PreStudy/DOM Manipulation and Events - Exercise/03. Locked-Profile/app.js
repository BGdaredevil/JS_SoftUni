function lockedProfile() {
  let buttons = Array.from(document.querySelectorAll(".profile input")).filter(
    (el) => el.type === "radio"
  );
  let showBtns = Array.from(document.querySelectorAll(".profile button"));
  let checked = Array.from(document.querySelectorAll(".profile input")).filter(
    (el) => el.checked === true && el.value === "lock"
  );

  checked.forEach((el) => (el.parentElement.lastElementChild.disabled = true));
  buttons.forEach((btn) => btn.addEventListener("click", btnEv));
  showBtns.forEach((btn) => btn.addEventListener("click", showEv));

  console.log(buttons);
  console.log(showBtns);

  function showEv(e) {
    if (e.target.innerText === "Show more") {
      e.target.innerText = "Hide it";
      e.target.previousElementSibling.setAttribute("style", "display: block");
    } else {
      e.target.innerText = "Show more";
      e.target.previousElementSibling.setAttribute("style", "display: none");
    }

    console.log(e.target.previousElementSibling);
  }

  function btnEv(e) {
    if (e.target.value === "lock") {
      //console.log(e.target.value);
      e.target.parentElement.lastElementChild.disabled = true;
      //console.log(e.target.parentElement.lastElementChild.disabled);
    } else {
      //console.log(e.target.value);
      e.target.parentElement.lastElementChild.disabled = false;
      //console.log(e.target.parentElement.lastElementChild.disabled);
    }
  }
}
