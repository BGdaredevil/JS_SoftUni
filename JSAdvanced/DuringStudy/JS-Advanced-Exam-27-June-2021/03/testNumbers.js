const { assert } = require("chai");

const testNumbers = {
  sumNumbers: function (num1, num2) {
    let sum = 0;

    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    } else {
      sum = (num1 + num2).toFixed(2);
      return sum;
    }
  },
  numberChecker: function (input) {
    input = Number(input);

    if (isNaN(input)) {
      throw new Error("The input is not a number!");
    }

    if (input % 2 === 0) {
      return "The number is even!";
    } else {
      return "The number is odd!";
    }
  },
  averageSumArray: function (arr) {
    let arraySum = 0;

    for (let i = 0; i < arr.length; i++) {
      arraySum += arr[i];
    }

    return arraySum / arr.length;
  },
};

describe("Tests for Exam", () => {
  it("sum numbers returns", () => {
    assert.equal(testNumbers.sumNumbers("a", 1), undefined);
    assert.equal(testNumbers.sumNumbers(1, "a"), undefined);
    assert.equal(testNumbers.sumNumbers(1, 1), "2.00");
    assert.equal(testNumbers.sumNumbers(-1, -1), "-2.00");
    assert.equal(testNumbers.sumNumbers(1.5, 1.5), "3.00");
    assert.equal(testNumbers.sumNumbers(1.4, 1.4), "2.80");
    assert.equal(testNumbers.sumNumbers(1.41, 1.41), "2.82");
    assert.equal(testNumbers.sumNumbers(1.411, 1.411), "2.82");
    assert.equal(testNumbers.sumNumbers(1.411, 1.416), "2.83");
    assert.equal(testNumbers.sumNumbers(-1.411, -1.416), "-2.83");
  });
  it("numberChecker throws", () => {
    assert.throw(() => {
      testNumbers.numberChecker("a");
    }, "The input is not a number!");
  });
  it("numberChecker returns", () => {
    assert.equal(testNumbers.numberChecker(1), "The number is odd!");
    assert.equal(testNumbers.numberChecker(5), "The number is odd!");
    assert.equal(testNumbers.numberChecker("5"), "The number is odd!");
    assert.equal(testNumbers.numberChecker(2), "The number is even!");
    assert.equal(testNumbers.numberChecker(8), "The number is even!");
    assert.equal(testNumbers.numberChecker("8"), "The number is even!");
  });
  it("averageSumArray returns", () => {
    assert.equal(testNumbers.averageSumArray([0, 0, 0, 0]), 0);
    assert.equal(testNumbers.averageSumArray([1, 1, 1, 1]), 1);
    assert.equal(testNumbers.averageSumArray([1, 2, 3, 4]), 2.5);
  });
});
