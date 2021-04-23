function notify(message) {
  let output = document.querySelector("#notification");
  output.innerText = message;
  output.style.display = "block";
  output.addEventListener("click", (e) => {
    e.target.style.display = "none";
  });
}
