function addItem() {
  let menu = document.getElementById("menu");
  let text = document.getElementById("newItemText");
  let val = document.getElementById("newItemValue");
  let newest = document.createElement("option");

  newest.textContent = text.value;
  text.value = "";
  newest.value = val.value;
  val.value = "";

  menu.appendChild(newest);
}
