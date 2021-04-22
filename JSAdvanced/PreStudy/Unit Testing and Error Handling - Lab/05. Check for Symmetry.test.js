let expect = require("chai").expect;

function isSymmetric(arr) {
  if (!Array.isArray(arr)) {
    return false; // Non-arrays are non-symmetric
  }
  let reversed = arr.slice(0).reverse(); // Clone and reverse
  let equal = JSON.stringify(arr) == JSON.stringify(reversed);
  return equal;
}

describe("symetric func", () => {
  it("takes an array", () => {
    expect(isSymmetric([])).to.equal(true, "likes arrays");
  });
  it("works as intended", () => {
    expect(isSymmetric(["a", "b", "b", "a"])).to.equal(true);
  });
  it("hates booleans", () => {
    expect(isSymmetric(true)).to.equal(false);
  });
  it("hates str", () => {
    expect(isSymmetric("")).to.equal(false, "does not like strings");
  });
  it("hates nums", () => {
    expect(isSymmetric(1)).to.equal(false, "does not like numbers");
  });
  it("hates obj", () => {
    expect(isSymmetric({})).to.equal(false, "does not like objects");
  });
  it("odd sim", () => {
    expect(isSymmetric(["a", "b", "c", "b", "a"])).to.equal(true);
  });
  it("heven not sim", () => {
    expect(isSymmetric(["a", "b", "b", "s"])).to.equal(false);
  });
  it("odd not sim", () => {
    expect(isSymmetric(["a", "b", "c", "s", "a"])).to.equal(false);
  });
  it("odd sim nums", () => {
    expect(isSymmetric([1, 1, 1, 1, 1])).to.equal(true);
  });
  it("odd sim objects", () => {
    expect(isSymmetric([1, { a: "a" }, [1], { a: "a" }, 1])).to.equal(true);
  });
  it("odd sim objects", () => {
    expect(isSymmetric([1, ["a"], { a: "a" }, 1])).to.equal(false);
  });
});
