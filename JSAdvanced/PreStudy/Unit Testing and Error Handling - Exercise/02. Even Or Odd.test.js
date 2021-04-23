let expect = require("chai").expect;

function isOddOrEven(string) {
  if (typeof string !== "string") {
    return undefined;
  }
  if (string.length % 2 === 0) {
    return "even";
  }

  return "odd";
}

describe("isOddOrEven func", () => {
  it("happy", () => {
    expect(isOddOrEven("1")).to.equal("odd", "works");
  });
  it("happy", () => {
    expect(isOddOrEven("11")).to.equal("even", "works");
  });
  it("happy", () => {
    expect(isOddOrEven([])).to.equal(undefined, "works");
  });
  it("happy", () => {
    expect(isOddOrEven(1)).to.equal(undefined, "works");
  });
  it("happy", () => {
    expect(isOddOrEven(11)).to.equal(undefined, "works");
  });
});
