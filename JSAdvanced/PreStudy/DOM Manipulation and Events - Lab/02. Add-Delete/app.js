function addItem() {
  let txtItem = document.querySelector("#newText");
  let listItemNew = makeElement("li", txtItem.value);
  let delItem = makeElement("a", "[Delete]");
  delItem.setAttribute("href", "#");
  delItem.addEventListener("click", (e) => {
    e.currentTarget.parentNode.parentNode.removeChild(
      e.currentTarget.parentNode
    );
  });
  //console.log(delItem)
  listItemNew.appendChild(delItem);
  console.log(delItem);
  document.querySelector("#items").appendChild(listItemNew);

  function makeElement(eType, eContent) {
    let elem = document.createElement(eType);
    elem.innerText = eContent;
    return elem;
  }
}
