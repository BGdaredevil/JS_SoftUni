function solve() {
  let [nameInput, ageInput, kindInput, ownerInput] = document.querySelectorAll(
    "div#container > input"
  );
  let adoptionUl = document.querySelector("section#adoption > ul");
  let adoptedUl = document.querySelector("section#adopted > ul");
  let addBtn = document.querySelector("div#container > button");
  addBtn.addEventListener("click", addBtnOnClick);

  function addBtnOnClick(ev) {
    ev.preventDefault();

    if (
      nameInput.value === "" ||
      ageInput.value === "" ||
      kindInput.value === "" ||
      ownerInput.value === ""
    ) {
      return;
    }

    if (isNaN(Number(ageInput.value))) {
      return;
    }

    let nameStrong = e("strong", nameInput.value);
    let ageStrong = e("strong", Number(ageInput.value));
    let kindStrong = e("strong", kindInput.value);

    let theP = document.createElement("p");
    theP.appendChild(nameStrong);
    theP.appendChild(document.createTextNode(" is a "));
    theP.appendChild(ageStrong);
    theP.appendChild(document.createTextNode(" year old "));
    theP.appendChild(kindStrong);

    let contactOwnerBtn = e("button", "Contact with owner");
    contactOwnerBtn.addEventListener("click", contactOwnerOnClick);

    let newLiElement = e(
      "li",
      theP,
      e("span", `Owner: ${ownerInput.value}`),
      contactOwnerBtn
    );

    adoptionUl.appendChild(newLiElement);

    //remember to clear the fields
    nameInput.value = "";
    ageInput.value = "";
    kindInput.value = "";
    ownerInput.value = "";
  }

  function contactOwnerOnClick(ev) {
    let btn = ev.target;
    let input = e("input");
    input.setAttribute("placeholder", "Enter your names");
    let confirmBtn = e("button", "Yes! I take it!");
    confirmBtn.addEventListener("click", confirmBtnOnClick);

    let divContainer = e("div", input, confirmBtn);
    btn.parentElement.appendChild(divContainer);
    btn.remove();
  }

  function confirmBtnOnClick(ev) {
    let input = ev.target.parentElement.querySelector("input");
    if (input.value === "") {
      return;
    }

    let checked = e("button", "Checked");
    checked.addEventListener("click", (eev) => {
      eev.target.parentElement.remove();
    });

    input.parentElement.parentElement.querySelector(
      "span"
    ).innerText = `New Owner: ${input.value}`;

    adoptedUl.appendChild(ev.target.parentElement.parentElement);
    ev.target.parentElement.parentElement.appendChild(checked);
    ev.target.parentElement.remove();
  }

  function e(tag, ...content) {
    let result = document.createElement(tag);
    content.forEach((c) => {
      if (typeof c === "string" || typeof c === "number") {
        result.textContent = c;
      } else {
        result.appendChild(c);
      }
    });
    return result;
  }
}
