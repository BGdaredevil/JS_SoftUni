function solution() {
  let newGiftName = document.querySelector("section.card input");
  let newGiftBtn = document.querySelector("section.card > div > button");
  let listOfGiftsCard = document.getElementsByClassName("card")[1];
  let sentGitftsCard = document.getElementsByClassName("card")[2];
  let discardedGitftsCard = document.getElementsByClassName("card")[3];

  newGiftBtn.addEventListener("click", buttonAdd);

  function buttonAdd(e) {
    let nameGift = newGiftName.value;
    newGiftName.value = "";

    let list = listOfGiftsCard.querySelector("ul");

    let buttonSend = el("button", "Send");
    buttonSend.id = "sendButton";
    buttonSend.addEventListener("click", moveItem);

    let buttonDiscard = el("button", "Discard");
    buttonDiscard.id = "discardButton";
    buttonDiscard.addEventListener("click", moveItem);

    let item = el("li", nameGift, buttonSend, buttonDiscard);
    item.classList.add("gift");

    list.appendChild(item);
    [].slice
      .call(list.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((e) => {
        list.appendChild(e);
      });
  }

  function moveItem(e) {
    let nameGift = e.target.parentElement.firstChild.data;
    let temp = el("li", nameGift);
    temp.classList.add("gift");

    if (e.target.textContent === "Send") {
      e.target.parentElement.remove();
      sentGitftsCard.querySelector("ul").appendChild(temp);
    } else {
      e.target.parentElement.remove();
      discardedGitftsCard.querySelector("ul").appendChild(temp);
    }
  }

  function el(tag, ...content) {
    let result = document.createElement(tag);

    for (const item of content) {
      if (typeof item === "string") {
        result.textContent = item;
      } else {
        result.appendChild(item);
      }
    }
    return result;
  }

  console.log(listOfGiftsCard, sentGitftsCard, discardedGitftsCard);
}
