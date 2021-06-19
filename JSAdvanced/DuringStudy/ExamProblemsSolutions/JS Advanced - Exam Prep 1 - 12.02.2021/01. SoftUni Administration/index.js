function solve() {
  let addBtn = document.querySelector("div.form-control button");
  addBtn.addEventListener("click", addBtnOnClick);

  let trainingsDiv = document.querySelector("div.modules");

  let fields = document.querySelectorAll("div.form-control > input");
  let [nameField, dateField] = fields;
  let dropDown = document.querySelector("div.form-control > select");

  function addBtnOnClick(e) {
    //console.log(dateField.value.toUpperCase().replace("T", " - "));
    e.preventDefault();
    if (
      nameField.value === "" ||
      dateField.value === "" ||
      dropDown.value === "Select module"
    ) {
      return;
    }

    let delBtn = el("button", "Del");
    delBtn.classList.add("red");
    delBtn.addEventListener("click", delBtnOnClick);

    let liElement = el("li");
    liElement.classList.add("flex");
    liElement.appendChild(
      el(
        "h4",
        `${nameField.value} - ${dateField.value
          .replace(/-/g, "/")
          .toUpperCase()
          .replace("T", " - ")}`
      )
    );
    liElement.appendChild(delBtn);

    let sameModule = Array.from(document.querySelectorAll("div.module")).filter(
      (d) =>
        d.children[0].textContent === `${dropDown.value.toUpperCase()}-MODULE`
    );

    if (sameModule.length !== 0) {
      sameModule[0].lastChild.appendChild(liElement);
      [].slice
        .call(sameModule[0].lastChild.children)
        .sort((a, b) => {
          let dateA = a.firstChild.innerText.split(" - ")[1];
          let dateB = b.firstChild.innerText.split(" - ")[1];
          return dateA.localeCompare(dateB);
        })
        .forEach((eee) => sameModule[0].lastChild.appendChild(eee));
    } else {
      let wrapperDiv = el(
        "div",
        el("h3", `${dropDown.value.toUpperCase()}-MODULE`),
        el("ul", liElement)
      );
      wrapperDiv.classList.add("module");
      trainingsDiv.appendChild(wrapperDiv);
    }
  }

  function delBtnOnClick(e) {
    let liElements = e.target.parentElement.parentElement.children;
    if (liElements.length === 1) {
      e.target.parentElement.parentElement.parentElement.remove();
    } else {
      e.target.parentElement.remove();
    }
  }

  function el(tag, ...content) {
    let result = document.createElement(tag);
    content.forEach((c) => {
      if (typeof c === "string") {
        result.textContent = c;
      } else {
        result.appendChild(c);
      }
    });
    return result;
  }
}
