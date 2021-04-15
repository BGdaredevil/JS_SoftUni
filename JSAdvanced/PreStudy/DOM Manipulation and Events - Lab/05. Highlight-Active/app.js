function focused() {
  let sections = document.querySelectorAll("input");
  console.log(sections);

  Array.from(sections).forEach((el) => {
    el.addEventListener("focus", isFocused);
    el.addEventListener("blur", unFocused);
  });

  function isFocused(e) {
    e.target.parentElement.classList.add("focused");
    console.log(e.target.parentElement, "focused");
  }

  function unFocused(e) {
    e.target.parentElement.classList.remove("focused");
    console.log(e.target.parentElement, "unFocused");
  }
}
