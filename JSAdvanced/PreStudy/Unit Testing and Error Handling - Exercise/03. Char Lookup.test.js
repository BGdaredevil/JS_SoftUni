let expect = require("chai").expect;

function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

describe("lookupChar func", () => {
  it("happy", () => {
    expect(lookupChar("123", 1)).to.equal("2", "works");
  });
  it("happy", () => {
    expect(lookupChar("123", "1")).to.equal(undefined, "works");
  });
  it("happy", () => {
    expect(lookupChar({}, 1)).to.equal(undefined, "works");
  });
  it("happy", () => {
    expect(lookupChar("123", -1)).to.equal("Incorrect index", "works");
  });
  it("happy", () => {
    expect(lookupChar("123", 2)).to.equal("3", "works");
  });
  it("happy", () => {
    expect(lookupChar("123", 3)).to.equal("Incorrect index", "works");
  });
  it("happy", () => {
    expect(lookupChar("123", 4)).to.equal("Incorrect index", "works");
  });
  it("happy", () => {
    expect(lookupChar(123, "4")).to.equal(undefined, "works");
  });
  it("happy", () => {
    expect(lookupChar("123", 1.1)).to.equal(undefined, "works");
  });
  it("happya", () => {
    expect(lookupChar("", 0)).to.equal("Incorrect index", "worksa");
  });
});
