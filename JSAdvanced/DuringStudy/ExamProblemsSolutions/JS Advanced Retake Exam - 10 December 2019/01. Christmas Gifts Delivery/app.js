function solution() {
  let [
    addCard,
    giftListCard,
    sentGiftCard,
    discardedCard,
  ] = document.querySelectorAll("section.card");
  let addBtn = addCard.querySelector("button");
  addBtn.addEventListener("click", addBtnOnClick);
  let addField = addCard.querySelector("input");
  //console.log(addBtn, addFirld);

  function addBtnOnClick(e) {
    let giftName = addField.value;
    if (addField.value === "") {
      return;
    }
    addField.value = "";
    let lsitUl = giftListCard.querySelector("ul");

    let sendBtn = el("button", undefined, "Send");
    sendBtn.addEventListener("click", btnOnClick);
    sendBtn.id = "sendButton";

    let delBtn = el("button", undefined, "Discard");
    delBtn.addEventListener("click", btnOnClick);
    delBtn.id = "discardButton";

    let liElement = el("li", ["gift"], giftName, sendBtn, delBtn);
    lsitUl.appendChild(liElement);

    [].slice
      .call(lsitUl.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((it) => {
        lsitUl.appendChild(it);
      });
  }

  function btnOnClick(e) {
    let theEvent = {
      Send: function () {
        let send = sentGiftCard.querySelector("ul");
        send.appendChild(
          el(
            "li",
            ["gift"],
            e.target.parentElement.textContent.replace("SendDiscard", "")
          )
        );
        e.target.parentElement.remove();
      },
      Discard: function () {
        let send = discardedCard.querySelector("ul");
        send.appendChild(
          el(
            "li",
            ["gift"],
            e.target.parentElement.textContent.replace("SendDiscard", "")
          )
        );
        e.target.parentElement.remove();
      },
    };
    theEvent[e.target.textContent]();
  }

  function el(tag, classesArr, ...content) {
    let result = document.createElement(tag);
    if (Array.isArray(classesArr)) {
      classesArr.forEach((cl) => result.classList.add(cl));
    }
    content.forEach((co) => {
      if (typeof co === "string") {
        result.textContent = co;
      } else {
        result.appendChild(co);
      }
    });
    return result;
  }
}
