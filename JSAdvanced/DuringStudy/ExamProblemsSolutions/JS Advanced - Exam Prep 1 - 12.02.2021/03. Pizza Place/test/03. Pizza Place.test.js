const pizzUni = require("../03. Pizza Place.js");
const { expect, assert } = require("chai");

describe("Tests", () => {
  it("makeAnOrder", () => {
    let temp = pizzUni.makeAnOrder;
    assert.equal(temp({ orderedPizza: "pesho" }), "You just ordered pesho");
    assert.equal(
      temp({ orderedPizza: "pesho", orderedDrink: "kolio" }),
      "You just ordered pesho and kolio."
    );
    assert.throw(() => {
      temp({});
    }, "You must order at least 1 Pizza to finish the order.");
  });

  it("getRemainingWork", () => {
    let temp = pizzUni.getRemainingWork;
    assert.equal(temp([]), "All orders are complete!");
    assert.equal(
      temp([{ pizzaName: "a" }]),
      "The following pizzas are still preparing: a."
    );
    assert.equal(
      temp([{ pizzaName: "a" }, { pizzaName: "b" }]),
      "The following pizzas are still preparing: a, b."
    );
  });

  it("orderType", () => {
    let temp = pizzUni.orderType;
    assert.equal(temp(100, "Carry Out"), 90);
    assert.equal(temp(100, "Delivery"), 100);
  });
});
