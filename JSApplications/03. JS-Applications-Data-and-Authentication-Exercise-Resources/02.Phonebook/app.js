function attachEvents() {
  let baseUrl = "http://localhost:3030/jsonstore/phonebook";
  let phoneBookUl = document.querySelector("#phonebook");
  let personElement = document.querySelector("#person");
  let phoneElement = document.querySelector("#phone");

  let loadBtn = document.querySelector("#btnLoad");
  loadBtn.addEventListener("click", loadBtnOnClick);

  let createBtn = document.querySelector("#btnCreate");
  createBtn.addEventListener("click", createBtnOnClick);

  function loadBtnOnClick() {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((listObj) => {
        Array.from(phoneBookUl.children).forEach((c) => c.remove());
        Object.values(listObj)
          .reduce((acc, record) => {
            let liElement = document.createElement("li");
            liElement.setAttribute("phoneId", record._id);
            liElement.innerText = `${record.person}: ${record.phone}`;

            let delBtn = document.createElement("button");
            delBtn.addEventListener("click", deleteBtnOnClick);
            delBtn.innerText = "Delete";
            liElement.appendChild(delBtn);

            acc.push(liElement);
            return acc;
          }, [])
          .forEach((l) => phoneBookUl.appendChild(l));
      })
      .catch((err) => console.error(err));
  }

  function createBtnOnClick() {
    if (personElement.value === "" || phoneElement.values === "") {
      return;
    }
    //todo data validation.....

    fetch(baseUrl, {
      method: "POST",
      "": "",
      body: JSON.stringify({
        person: personElement.value,
        phone: phoneElement.value,
      }),
    })
      .finally(() => {
        loadBtnOnClick();
      })
      .catch((err) => console.error(err));

    personElement.value = "";
    phoneElement.value = "";
  }

  function deleteBtnOnClick(ev) {
    let id = ev.target.parentElement.getAttribute("phoneid");

    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    })
      .finally(() => {
        ev.target.parentElement.remove();
      })
      .catch((err) => console.error(err));
  }
}

attachEvents();
