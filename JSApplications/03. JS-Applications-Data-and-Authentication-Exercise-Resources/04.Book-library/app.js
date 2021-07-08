(() => {
  populateTable();

  document.querySelector("#loadBooks").addEventListener("click", populateTable);

  let form = document.querySelector("form");

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let data = new FormData(form);
    data = Object.fromEntries(data);
    for (const key in data) {
      if (data[key] === "") {
        return;
      }
    }

    fetch("http://localhost:3030/jsonstore/collections/books", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .finally(() => {
        populateTable();
        form.reset();
      })
      .catch((err) => console.error(err));
  });

  function populateTable() {
    fetch("http://localhost:3030/jsonstore/collections/books")
      .then((r) => r.json())
      .then((bookList) => {
        let tbody = document.querySelector("table > tbody");
        tbody.innerHTML = "";

        Object.entries(bookList).forEach(([id, book]) => {
          let tr = document.createElement("tr");

          let tdTitle = document.createElement("td");
          tdTitle.innerText = book.title;

          let tdAuth = document.createElement("td");
          tdAuth.innerText = book.author;

          let delBtn = document.createElement("button");
          delBtn.addEventListener("click", entryBtnOnClick);
          delBtn.innerText = "Delete";

          let editBtn = document.createElement("button");
          editBtn.addEventListener("click", entryBtnOnClick);
          editBtn.innerText = "Edit";

          let btnTd = document.createElement("td");
          btnTd.appendChild(editBtn);
          btnTd.appendChild(delBtn);

          tr.appendChild(tdTitle);
          tr.appendChild(tdAuth);
          tr.appendChild(btnTd);
          tr.setAttribute("bookId", id);

          tbody.appendChild(tr);
        });
      })
      .catch((err) => console.error(err));
  }

  function entryBtnOnClick(ev) {
    let options = {
      Edit: (e) => {
        let [ti, auth] = e.target.parentElement.parentElement.children;
        if (document.querySelector("#editForm")) {
          document.querySelector("#editForm").remove();
        }

        let editForm = ele(
          "form",
          { id: "editForm" },
          { submit: editEvent },

          ele(
            "h3",
            { id: e.target.parentElement.parentElement.getAttribute("bookid") },
            {},
            "EDIT FORM"
          ),
          ele("label", {}, {}, "TITLE"),
          ele(
            "input",
            { type: "text", name: "title", id: "title", value: ti.innerText },
            {}
          ),
          ele("label", {}, {}, "AUTHOR"),
          ele(
            "input",
            {
              type: "text",
              name: "author",
              id: "author",
              value: auth.innerText,
            },
            {}
          ),
          ele("button", {}, {}, "Save")
        );

        form.style.display = "none";
        document.querySelector("body").appendChild(editForm);
      },
      Delete: (e) => {
        let id = e.target.parentElement.parentElement.getAttribute("bookid");
        fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
          method: "DELETE",
        })
          .finally(() => {
            populateTable();
          })
          .catch((err) => console.error(err));
      },
    };
    options[ev.target.innerText](ev);
  }

  function editEvent(ev) {
    ev.preventDefault();
    let editForm = document.querySelector("#editForm");
    let data = new FormData(editForm);
    data = Object.fromEntries(data);
    let id = editForm.getAttribute("id");

    fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
      method: "PUT",
      body: JSON.stringify({ author: data.author, title: data.title }),
    })
      .finally(() => {
        populateTable();
        editForm.remove();
        form.style.display = "block";
      })
      .catch((err) => console.error(err));
  }

  function ele(tag, attrObj, listenerObj, ...content) {
    let result = document.createElement(tag);

    if (Object.entries(attrObj).length > 0) {
      Object.entries(attrObj).forEach(([attr, val]) => {
        result.setAttribute(attr, val);
      });
    }

    if (Object.entries(listenerObj).length > 0) {
      Object.entries(listenerObj).forEach(([eve, lis]) => {
        result.addEventListener(eve, lis);
      });
    }

    content.forEach((c) => {
      if (typeof c === "string") {
        result.innerText = c;
      } else {
        result.appendChild(c);
      }
    });

    return result;
  }
})();
