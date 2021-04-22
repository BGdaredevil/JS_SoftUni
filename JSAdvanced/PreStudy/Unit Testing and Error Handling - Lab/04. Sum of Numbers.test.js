let expect = require("chai").expect;

function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  console.log(sum);
  return sum;
}

describe("function sum", () => {
  it("Happy path", () => {
    expect(sum([1, 1, 1])).to.equal(3, "check internal logic");
  });

  it("Has strings in input", () => {
    expect(sum(["1", 1, "1"])).to.equal(3, "Does not parse well");
  });

  it("Singular Input", () => {
    expect(sum(["1"])).to.equal(1, "Does not like [1]");
  });
});
