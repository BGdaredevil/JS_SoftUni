function attachEvents() {
  let txtArea = document.querySelector("#messages");
  let authorTxt = document.querySelector('input[name="author"]');
  let messageTxt = document.querySelector('input[name="content"]');

  let submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", submitBtnOnClick);

  let refreshBtn = document.querySelector("#refresh");
  refreshBtn.addEventListener("click", refreshBtnOnClick);

  let baseUrl = "http://localhost:3030/jsonstore/messenger";

  function submitBtnOnClick(ev) {
    txtArea.value = "";
    if (authorTxt.value === "" || messageTxt.value === "") {
      txtArea.value = "Please enter a valid name and message";
      return;
    }
    fetch(baseUrl, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({
        author: authorTxt.value,
        content: messageTxt.value,
      }),
    })
      .then((r) => r.json())
      .then((res) => {
        txtArea.value = `Sucess!\nMessage id is: ${res._id}`;
      })
      .catch((err) => console.error(err));
    authorTxt.value = "";
    messageTxt.value = "";
  }

  function refreshBtnOnClick(ev) {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((messagesObj) => {
        let rows = Object.values(messagesObj).reduce((acc, message) => {
          acc.push(`${message.author}: ${message.content}`);
          return acc;
        }, []);
        txtArea.value = "";
        txtArea.value = rows.join("\n");
      })
      .catch((err) => console.error(err));
  }
}

attachEvents();
