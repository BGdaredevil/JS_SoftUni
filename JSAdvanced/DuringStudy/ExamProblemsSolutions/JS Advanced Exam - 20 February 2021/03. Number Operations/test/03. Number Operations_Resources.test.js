const numberOperations = require("../03. Number Operations_Resources.js");
let { expect, assert } = require("chai");

// let info = numberOperations.numberChecker;
// info("asdasd");

describe("tests", () => {
  describe("powNumber works", () => {
    it("works Fine", () => {
      assert.equal(numberOperations.powNumber(3), 9);
      assert.equal(numberOperations.powNumber(2), 4);
      assert.equal(numberOperations.powNumber(1), 1);
      assert.equal(numberOperations.powNumber(0), 0);
    });
  });
  describe("numberChecker works", () => {
    it("works Fine", () => {
      assert.equal(
        numberOperations.numberChecker("2"),
        "The number is lower than 100!"
      );
      assert.equal(
        numberOperations.numberChecker(" "),
        "The number is lower than 100!"
      );
      assert.equal(
        numberOperations.numberChecker(99),
        "The number is lower than 100!"
      );
      assert.equal(
        numberOperations.numberChecker(100),
        "The number is greater or equal to 100!"
      );
      assert.equal(
        numberOperations.numberChecker(101),
        "The number is greater or equal to 100!"
      );
      assert.throws(() => {
        numberOperations.numberChecker("asd");
      }, "The input is not a number!");
    });
  });
  describe("sumArrays works", () => {
    it("works Fine with nums", () => {
      let a1 = [1, 2, 3];
      let a2 = [4, 5, 6];
      assert.deepEqual(numberOperations.sumArrays(a1, a2), [5, 7, 9]);
    });
    it("works Fine with str", () => {
      let a1 = ["1", "2", "3"];
      let a2 = ["4", "5", "6"];
      assert.deepEqual(numberOperations.sumArrays(a1, a2), ["14", "25", "36"]);
    });
    it("works Fine with str, longer", () => {
      let a1 = ["1", "2", "3"];
      let a2 = ["4", "5", "6", "7"];
      assert.deepEqual(numberOperations.sumArrays(a1, a2), [
        "14",
        "25",
        "36",
        "7",
      ]);
    });
    it("works Fine with str, shorter", () => {
      let a1 = ["1", "2", "3", "7"];
      let a2 = ["4", "5", "6"];
      assert.deepEqual(numberOperations.sumArrays(a1, a2), [
        "14",
        "25",
        "36",
        "7",
      ]);
    });
  });
});
