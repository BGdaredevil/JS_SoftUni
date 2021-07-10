(function attachEvents() {
  (function whoIsOn() {
    let addBtn = document.querySelector("#addForm > button.add");
    let greeting = document.createElement("p");
    if (sessionStorage.hasOwnProperty("loggedPerson")) {
      greeting.innerText = `Wellcome, ${JSON.parse(sessionStorage.loggedPerson).email}`;
      let btnLogIn = document.querySelector("#guest > a");
      btnLogIn.style.display = "none";
      let btn = document.createElement("a");
      btn.innerText = "Logout";
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();

        fetch("http://localhost:3030/users/logout", {
          headers: {
            "Content-Type": "application/json",
            "X-Authorization": sessionStorage.accessToken,
          },
          method: "get",
        }).then((res) => {
          sessionStorage.clear();
          btnLogIn.style.display = "block";
          btn.remove();
          greeting.innerText = "Wellcome, Guest!";
          addBtn.disabled = true;
        });
      });
      document.querySelector("#guest").appendChild(btn);
      addBtn.disabled = false;
    } else {
      greeting.innerText = "Wellcome, Guest!";
      addBtn.disabled = true;
    }

    document.querySelector("nav").appendChild(greeting);

    addBtn.addEventListener("click", addBtnOnClick);
  })();

  let baseUrl = "http://localhost:3030/data/catches";
  document.querySelectorAll("#catches > div.catch").forEach((x) => x.remove());

  let loadBtn = document.querySelector("aside > button.load");
  loadBtn.addEventListener("click", () => {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((fishArr) => {
        // console.log(fishArr);
        let person = JSON.parse(sessionStorage.loggedPerson)._id;
        document.querySelectorAll("#catches > div.catch").forEach((x) => x.remove());
        fishArr = fishArr.map((fish) => {
          return createFish(fish, person);
        });
        document.querySelector("#catches").append(...fishArr);
      });
  });

  function createFish(data, asking) {
    let del = e("button", {}, { click: fishBtn }, ["update"], "update");
    del.disabled = !(data._ownerId === asking);

    let upd = e("button", {}, { click: fishBtn }, ["delete"], "Delete");
    upd.disabled = !(data._ownerId === asking);

    let result = e(
      "div",
      {},
      {},
      ["catch"],
      e("label", {}, {}, [], "Angler"),
      e("input", { type: "text", value: data.angler }, {}, ["angler"]),
      e("hr"),
      e("label", {}, {}, [], "Weight"),
      e("input", { type: "number", value: data.weight }, {}, ["weight"]),
      e("hr"),
      e("label", {}, {}, [], "Species"),
      e("input", { type: "text", value: data.species }, {}, ["species"]),
      e("hr"),
      e("label", {}, {}, [], "Location"),
      e("input", { type: "text", value: data.location }, {}, ["location"]),
      e("hr"),
      e("label", {}, {}, [], "Bait"),
      e("input", { type: "text", value: data.bait }, {}, ["bait"]),
      e("hr"),
      e("label", {}, {}, [], "Capture Time"),
      e("input", { type: "number", value: data.captureTime }, {}, ["captureTime"]),
      e("hr"),
      del,
      upd
    );
    result.dataset.fishId = data._id;
    result.dataset.ownerId = data._ownerId;

    // console.log(data._ownerId);
    // console.log(asking);

    return result;
  }

  function fishBtn(ev) {
    let divContainer = ev.target.parentElement;
    let fishId = divContainer.dataset.fishId;

    if (ev.target.innerText === "DELETE") {
      fetch(`${baseUrl}/${fishId}`, {
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": sessionStorage.accessToken,
        },
        method: "delete",
      })
        .then((r) => {
          if (r.ok) {
            return r.json();
          }
          throw new Error("Unauthorized");
        })
        .catch((err) => alert(err))
        .finally(() => {
          divContainer.remove();
        });

      return;
    }

    let data = [...divContainer.querySelectorAll("input")].reduce((acc, e) => {
      acc[e.classList[0]] = isNaN(e.value) ? e.value : Number(e.value);
      return acc;
    }, {});

    data._ownerId = divContainer.dataset.ownerId;
    data._id = fishId;

    fetch(`${baseUrl}/${data._id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": sessionStorage.accessToken,
      },
      method: "put",
      body: JSON.stringify(data),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Unauthorized");
      })
      .catch((err) => alert(err))
      .finally(() => {
        divContainer.parentElement.appendChild(createFish(data, data._ownerId));
        divContainer.remove();
      });

    console.log(data);
    console.log([...divContainer.querySelectorAll("input")]);
    return;
  }

  function addBtnOnClick(ev) {
    let fieldSet = document.querySelector("#addForm");

    let dataFields = {
      angler: fieldSet.querySelector("input.angler"),
      weight: fieldSet.querySelector("input.weight"),
      species: fieldSet.querySelector("input.species"),
      location: fieldSet.querySelector("input.location"),
      bait: fieldSet.querySelector("input.bait"),
      captureTime: fieldSet.querySelector("input.captureTime"),
      _ownerId: JSON.parse(sessionStorage.loggedPerson)._id,
    };

    let data = {};

    for (const key in dataFields) {
      if (key !== "_ownerId") {
        if (dataFields[key].value === "") {
          return;
        }

        data[key] = isNaN(dataFields[key].value)
          ? dataFields[key].value
          : Number(dataFields[key].value);
      } else {
        data[key] = dataFields[key];
      }
    }

    fetch(baseUrl, {
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": sessionStorage.accessToken,
      },
      method: "post",
      body: JSON.stringify(data),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Invalid access token");
      })
      .then((res) => {
        document.querySelector("#catches").append(createFish(res, res._ownerId));
        console.log(res);
      })
      .catch((err) => alert(err));

    for (const key in dataFields) {
      if (key !== "_ownerId") {
        dataFields[key].value = "";
        dataFields[key].innerText = "";
      }
    }
  }

  function e(tag, attributes = {}, listener = {}, classes = [], ...content) {
    let result = document.createElement(tag);
    if (Object.keys(attributes).length > 0) {
      Object.keys(attributes).forEach((key) => result.setAttribute(key, attributes[key]));
    }

    if (Object.keys(listener).length !== 0) {
      Object.keys(listener).forEach((key) => result.addEventListener(key, listener[key]));
    }

    if (classes.length > 0) {
      classes.forEach((c) => result.classList.add(c));
    }

    content.forEach((c) => {
      if (typeof c !== "string" && typeof c !== "number") {
        result.appendChild(c);
      } else if (typeof c === "string") {
        result.innerText = c;
      } else if (typeof c === "number") {
        result.value = c;
      }
    });

    return result;
  }
})();
