function editElement(ref, toFind, toReplace) {
  let el = ref.innerText;
  let reg = new RegExp(toFind, "g");
  ref.innerText = el.replace(reg, toReplace);
  //console.log(ref.innerText);
}
