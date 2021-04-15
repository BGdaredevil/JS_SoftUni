function extractText() {
  // TODO
  let all = document.querySelectorAll("li");
  let text = [...all].map((el) => (el = el.innerText)).join("\n");
  document.getElementById("result").value = text;
}
