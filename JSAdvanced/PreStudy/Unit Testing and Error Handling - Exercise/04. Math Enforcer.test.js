let expect = require("chai").expect;

let mathEnforcer = {
  addFive: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num + 5;
  },
  subtractTen: function (num) {
    if (typeof num !== "number") {
      return undefined;
    }
    return num - 10;
  },
  sum: function (num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return undefined;
    }
    return num1 + num2;
  },
};

describe("math obj tests", () => {
  it("Math add Five ", () => {
    expect(mathEnforcer.addFive(0)).to.equal(5, "add Five Test");
  });
  it("Math add Five ", () => {
    expect(mathEnforcer.addFive("0")).to.equal(undefined, "add Five Test");
  });
  it("Math add Five ", () => {
    expect(mathEnforcer.addFive(1.1)).to.equal(6.1, "add Five Test");
  });
  it("Math add Five ", () => {
    expect(mathEnforcer.addFive(-1.1)).to.equal(3.9, "add Five Test");
  });
  it("Math subtract ten ", () => {
    expect(mathEnforcer.subtractTen(1)).to.equal(-9, "subtract ten Test");
  });
  it("Math subtract ten ", () => {
    expect(mathEnforcer.subtractTen(-10)).to.equal(-20, "subtract ten Test");
  });
  it("Math subtract ten ", () => {
    expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5, "subtract ten Test");
  });
  it("Math subtract ten ", () => {
    expect(mathEnforcer.subtractTen("1")).to.equal(
      undefined,
      "subtract ten Test"
    );
  });
  it("Math Sum ", () => {
    expect(mathEnforcer.sum(1, 1)).to.equal(2, "Sum Test");
  });
  it("Math Sum ", () => {
    expect(mathEnforcer.sum(1, -1)).to.equal(0, "Sum Test");
  });
  it("Math Sum ", () => {
    expect(mathEnforcer.sum(-1, -1)).to.equal(-2, "Sum Test");
  });
  it("Math Sum ", () => {
    expect(mathEnforcer.sum(1.1, 1.1)).to.equal(2.2, "Sum Test");
  });
  it("Math Sum ", () => {
    expect(mathEnforcer.sum("1", 1)).to.equal(undefined, "Sum Test");
  });
  it("Math Sum ", () => {
    expect(mathEnforcer.sum(1, "1")).to.equal(undefined, "Sum Test");
  });
});
