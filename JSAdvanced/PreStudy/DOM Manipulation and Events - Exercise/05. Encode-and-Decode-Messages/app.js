function encodeAndDecodeMessages() {
  const btns = Array.from(document.querySelectorAll("div button"));
  const fields = Array.from(document.querySelectorAll("div textarea"));

  btns.forEach((btn) => btn.addEventListener("click", sendEncoded));

  function sendEncoded(e) {
    let operation = e.target.innerText.split(" ").shift();
    switch (operation) {
      case "Encode":
        fields[1].value = fields[0].value
          .split("")
          .map((char) => {
            return String.fromCharCode(char.charCodeAt(0) + 1);
          })
          .join("");
        fields[0].value = "";
        break;
      case "Decode":
        fields[1].value = fields[1].value
          .split("")
          .map((char) => {
            return String.fromCharCode(char.charCodeAt(0) - 1);
          })
          .join("");
        break;
    }
  }
}
