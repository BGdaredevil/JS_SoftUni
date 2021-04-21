function solve() {
  let buttonAdd = document.querySelector("div#container > button");
  buttonAdd.type = "button";
  buttonAdd.addEventListener("click", addToScreen);

  let movList = document.querySelector("section#movies > ul");
  movList.addEventListener("click", addToArchive);

  let archiveSection = document.querySelector("section#archive > ul");
  archiveSection.addEventListener("click", del);

  document
    .querySelector("section#archive > button")
    .addEventListener("click", () => {
      Array.from(
        document.querySelector("section#archive ul").children
      ).forEach((ch) => ch.parentElement.removeChild(ch));
    });

  function del(e) {
    if (e.target.tagName === "BUTTON") {
      //console.log(e.target);
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
  }

  function addToArchive(e) {
    let total;
    if (e.target.tagName === "BUTTON") {
      let ticketCount = e.target.previousElementSibling;
      let tCount = ticketCount.value;
      if (tCount === null || tCount === undefined || isNaN(tCount) || !tCount) {
        return;
      }
      let price = Math.ceil(
        Number(ticketCount.previousElementSibling.innerText)
      );
      total = tCount * price;

      let name =
        ticketCount.parentElement.previousElementSibling.previousElementSibling
          .innerText;
      console.log(name);

      let archiveRow = makeElements(
        "li",
        makeElements("span", name),
        makeElements("strong", `Total amount: ${total.toFixed(2)}`),
        makeElements("button", "Delete")
      );
      ticketCount.parentElement.parentElement.parentElement.removeChild(
        ticketCount.parentElement.parentElement
      );

      archiveSection.appendChild(archiveRow);
    }
  }

  function addToScreen(e) {
    e.preventDefault();
    let [mName, mHall, mPrice] = document.getElementsByTagName("input");
    let validInput = getAndValidate(mName, mHall, mPrice);
    if (!validInput) {
      return;
    }
    let input = makeElements("input", "");
    input.placeholder = "Tickets Sold";
    let result = makeElements(
      "li",
      makeElements("span", mName.value),
      makeElements("strong", `Hall: ${mHall.value}`),
      makeElements(
        "div",
        makeElements("strong", Number(mPrice.value).toFixed(2)),
        input,
        makeElements("button", "Archive")
      )
    );

    document.querySelector("section#movies > ul").appendChild(result);
    mName.value = "";
    mHall.value = "";
    mPrice.value = "";
  }

  function getAndValidate(str1, str2, num) {
    if (str1.value != "" && str2.value != "" && Number(num.value)) {
      return true;
    } else {
      return false;
    }
  }

  function makeElements(tagName, ...content) {
    const result = document.createElement(tagName);
    content.forEach((e) => {
      if (typeof e === "string") {
        result.textContent = e;
      } else {
        result.appendChild(e);
      }
    });
    return result;
  }
}
