let expect = require("chai").expect;

function createCalculator() {
  let value = 0;
  return {
    add: function (num) {
      value += Number(num);
    },
    subtract: function (num) {
      value -= Number(num);
    },
    get: function () {
      return value;
    },
  };
}

describe("createCalculator func", () => {
  it("happy", () => {
    let info = createCalculator();
    expect(info.get()).to.equal(0, "works");
  });
  it("happy", () => {
    let info = createCalculator();
    info.add(5);
    expect(info.get()).to.equal(5, "works");
  });
  it("happy", () => {
    let info = createCalculator();
    info.subtract(5);
    expect(info.get()).to.equal(-5, "works");
  });
  it("happy", () => {
    let info = createCalculator();
    info.subtract("5");
    info.add("5");
    expect(info.get()).to.equal(0, "works");
  });
  it("happy", () => {
    let info = createCalculator();
    info.value = 200;
    expect(info.get()).to.not.equal(info.value, "works");
  });
});
