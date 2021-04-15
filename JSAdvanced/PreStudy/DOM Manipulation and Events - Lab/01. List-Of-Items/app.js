function addItem() {
  let txtItem = document.querySelector("#newItemText");
  console.log(txtItem.value);

  document
    .querySelector("#items")
    .appendChild(makeElement("li", txtItem.value));

  function makeElement(eType, eContent) {
    let elem = document.createElement(eType);
    elem.innerText = eContent;
    return elem;
  }
}
