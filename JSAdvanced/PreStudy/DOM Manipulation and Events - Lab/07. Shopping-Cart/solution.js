function solve() {
  let addButtons = Array.from(document.getElementsByClassName("add-product"));
  let checkOutBtn = document.querySelector(".checkout");
  let textArea = document.querySelector("textarea");
  let cart = { list: [], total: 0 };

  addButtons.forEach((el) => el.addEventListener("click", addBtnEv));
  checkOutBtn.addEventListener("click", checkOutBtnEv);

  function addBtnEv(e) {
    let info = decript(e.target.parentElement.parentElement);
    if (!cart.list.includes(info.itemName)) {
      cart.list.push(info.itemName);
    }
    cart.total += info.itemPrice;
    textArea.textContent += `Added ${
      info.itemName
    } for ${info.itemPrice.toFixed(2)} to the cart.\n`;
  }

  function checkOutBtnEv(e) {
    e.target.disabled = true;
    addButtons.forEach((btn) => (btn.disabled = true));
    textArea.textContent += `You bought ${cart.list.join(
      ", "
    )} for ${cart.total.toFixed(2)}.`;
  }

  function decript(element) {
    return {
      itemName: element.children[1].children[0].innerText,
      itemPrice: Number(element.children[3].innerText),
    };
  }
}
