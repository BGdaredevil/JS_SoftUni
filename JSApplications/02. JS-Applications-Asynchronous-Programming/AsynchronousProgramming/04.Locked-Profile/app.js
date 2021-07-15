function lockedProfile() {
  let url = "http://localhost:3030/jsonstore/advanced/profiles";
  let mainElement = document.querySelector("#main");
  mainElement.innerHTML = "";

  fetch(url)
    .then((r) => r.json())
    .then((usersObj) => {
      Object.values(usersObj).forEach((user, loc) => {
        mainElement.appendChild(
          e(
            "div",
            { classes: ["profile"] },
            e("img", {
              attributes: { src: "./iconProfile2.png" },
              classes: ["userIcon"],
            }),
            e("label", {}, "Lock"),
            e(
              "input",
              {
                attributes: {
                  type: "radio",
                  name: `user${loc + 1}Locked`,
                  value: "lock",
                  checked: true,
                },
              },
              "Lock"
            ),
            e("label", {}, "Unlock"),
            e(
              "input",
              {
                attributes: {
                  type: "radio",
                  name: `user${loc + 1}Locked`,
                  value: "unlock",
                  checked: false,
                },
              },
              "Lock"
            ),
            e("br", {}, ""),
            e("hr", {}, ""),
            e("label", {}, "Username"),
            e(
              "input",
              {
                attributes: {
                  type: "text",
                  name: `user${loc + 1}Username`,
                  value: `${user.username}`,
                  disabled: true,
                  readOnly: true,
                },
              },
              ""
            ),
            e(
              "div",
              { attributes: { id: "user1HiddenFields", hidden: true } },
              e("hr", {}, ""),
              e("label", {}, "Email:"),
              e(
                "input",
                {
                  attributes: {
                    type: "email",
                    name: `user${loc + 1}Email`,
                    value: `${user.email}`,
                    disabled: true,
                    readOnly: true,
                  },
                },
                ""
              ),
              e("label", {}, "Age:"),
              e(
                "input",
                {
                  attributes: {
                    type: "email",
                    name: `user${loc + 1}Age`,
                    value: `${user.age}`,
                    disabled: true,
                    readonly: true,
                  },
                },
                ""
              )
            ),
            e("button", { listener: { click: btnOnClick } }, "Show more")
          )
        );
      });
    });

  function btnOnClick(ev) {
    let radio = ev.target.parentElement.querySelector('input[type="radio"]:checked');

    if (radio.value !== "unlock") {
      return;
    }
    ev.target.innerText = ev.target.innerText === "Show More" ? "Hide it" : "Show More";
    ev.target.previousSibling.style.display =
      ev.target.previousSibling.style.display === "block" ? "none" : "block";
    console.log(ev.target.parentElement);
  }

  function e(tag, obj, ...content) {
    let result = document.createElement(tag);

    if (obj.hasOwnProperty("listener")) {
      Object.entries(obj.listener).forEach(([ev, han]) => {
        result.addEventListener(ev, han);
      });
    }

    if (obj.hasOwnProperty("attributes")) {
      Object.entries(obj.attributes).forEach(([attr, val]) => {
        result[attr] = val;
      });
    }

    if (obj.hasOwnProperty("classes")) {
      obj.classes.forEach((c) => {
        result.classList.add(c);
      });
    }

    content.forEach((c) => {
      if (typeof c === "number" || typeof c === "string") {
        result.innerText = c;
      } else {
        result.appendChild(c);
      }
    });

    return result;
  }
}
