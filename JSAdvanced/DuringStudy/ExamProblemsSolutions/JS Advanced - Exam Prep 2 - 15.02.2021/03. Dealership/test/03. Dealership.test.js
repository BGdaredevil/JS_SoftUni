const dealership = require("../03. Dealership");
const { expect, assert } = require("chai");

describe("Tests wraper", function () {
  it("all old models are present", function () {
    let item = dealership.newCarCost;
    assert.equal(item("", 20000), 20000 - 0);
    assert.equal(item("Audi A4 B8", 20000), 20000 - 15000);
    assert.equal(item("Audi A6 4K", 20000), 20000 - 20000);
    assert.equal(item("Audi A8 D5", 20000), 20000 - 25000);
    assert.equal(item("Audi TT 8J", 20000), 20000 - 14000);
  });

  it("selects extras properly", function () {
    let item = dealership.carEquipment;
    let extras = ["a", "b", "c", "d", "e"];
    assert.deepEqual(item(extras, [0, 2, 4]), ["a", "c", "e"]);
    assert.deepEqual(item(extras, [2, 4]), ["c", "e"]);
    assert.deepEqual(item(extras, [2]), ["c"]);
    assert.deepEqual(item(extras, [0]), ["a"]);
  });

  it("selects discounts properly", function () {
    let item = dealership.euroCategory.bind(dealership);
    assert.equal(
      item(-1),
      "Your euro category is low, so there is no discount from the final price!"
    );
    assert.equal(
      item(3),
      "Your euro category is low, so there is no discount from the final price!"
    );
    assert.equal(
      item(4),
      `We have added 5% discount to the final price: ${15000 - 15000 * 0.05}.`
    );
    assert.equal(
      item(5),
      `We have added 5% discount to the final price: ${15000 - 15000 * 0.05}.`
    );
  });
});
