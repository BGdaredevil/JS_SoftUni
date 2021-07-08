(function solution() {
  let mainWorkSpace = document.querySelector("#main");
  mainWorkSpace.innerHTML = "";

  fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
    .then((r) => r.json())
    .then((res) => {
      res.map(({ _id, title }) => {
        let baseUrl =
          "http://localhost:3030/jsonstore/advanced/articles/details/";
        fetch(`${baseUrl}${_id}`)
          .then((r) => r.json())
          .then((info) => {
            mainWorkSpace.appendChild(
              e(
                "div",
                { classes: ["accordion"] },
                e(
                  "div",
                  { classes: ["head"] },
                  e("span", {}, title),
                  e(
                    "button",
                    {
                      classes: ["button"],
                      attributes: { id: _id },
                      listener: { click: moreBtn },
                    },
                    "More"
                  )
                ),
                e("div", { classes: ["extra"] }, e("p", {}, info.content))
              )
            );
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });

  function moreBtn(ev) {
    ev.target.innerText = ev.target.innerText === "MORE" ? "LESS" : "MORE";
    ev.target.parentElement.nextSibling.style.display =
      ev.target.parentElement.nextSibling.style.display === "block"
        ? "none"
        : "block";
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
})();
