function solve() {
  let btns = Array.from(document.querySelectorAll("#container button"));
  let output = document.querySelector("table.table tbody");
  let firsttButton = document.querySelector("table.table tbody tr td input");
  firsttButton.disabled = false;

  btns[0].addEventListener("click", gen);
  btns[1].addEventListener("click", purchase);

  function purchase() {
    let inputBtns = Array.from(document.querySelectorAll("tbody input")).filter(
      (btn) => btn.checked === true
    );
    let cart = inputBtns.reduce(
      (acc, row) => {
        acc.items.push(
          row.parentElement.previousElementSibling.previousElementSibling
            .previousElementSibling.innerText
        );
        acc.totalCost += Number(
          row.parentElement.previousElementSibling.previousElementSibling
            .innerText
        );
        acc.decoSum += Number(
          row.parentElement.previousElementSibling.innerText
        );

        return acc;
      },
      {
        items: [],
        decoSum: 0,
        totalCost: 0,
      }
    );
    document.querySelectorAll(
      "textarea"
    )[1].value = `Bought furniture: ${cart.items.join(
      ", "
    )}\nTotal price: ${cart.totalCost.toFixed(2)}\nAverage decoration factor: ${
      cart.decoSum / cart.items.length
    }`;
  }

  function gen() {
    let input = JSON.parse(
      document.querySelector("#container textarea").value.trim()
    );
    input.forEach((f) => output.appendChild(makeTableRow(f)));
  }

  function makeTableRow(data) {
    let img = makeElements("img");
    img.src = data.img;

    let check = makeElements("input");
    check.type = "checkbox";

    return makeElements(
      "tr",
      makeElements("td", img),
      makeElements("td", data.name),
      makeElements("td", data.price.toString()),
      makeElements("td", data.decFactor.toString()),
      makeElements("td", check)
    );
  }

  function makeElements(tagName, ...content) {
    const result = document.createElement(tagName);

    content.forEach((e) => {
      if (typeof e === "string") {
        result.textContent = e;
      } else {
        result.appendChild(e);
      }
    });
    return result;
  }
}
