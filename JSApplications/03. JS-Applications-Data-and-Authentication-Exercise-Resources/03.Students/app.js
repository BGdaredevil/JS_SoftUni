(() => {
  populateTable();

  let form = document.getElementById("form");

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let data = new FormData(form);
    data = Object.fromEntries(data);
    for (const key in data) {
      if (data[key] === "") {
        return;
      }
    }
    fetch("http://localhost:3030/jsonstore/collections/students", {
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
    fetch("http://localhost:3030/jsonstore/collections/students")
      .then((r) => r.json())
      .then((studentList) => {
        let tbody = document.querySelector("table#results tbody");
        tbody.innerHTML = "";
        let headings = [
          ...document.querySelectorAll("div.inputs > input"),
        ].map((x) => x.getAttribute("name"));
        Object.values(studentList).map((student) => {
          let tr = document.createElement("tr");
          headings.forEach((h) => {
            let cell = document.createElement("td");
            cell.innerText = student[h];
            tr.appendChild(cell);
          });
          tbody.appendChild(tr);
        });
      })
      .catch((err) => console.error(err));
  }
})();
