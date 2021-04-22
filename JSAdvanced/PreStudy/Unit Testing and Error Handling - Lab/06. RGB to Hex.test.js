let expect = require("chai").expect;

function rgbToHexColor(red, green, blue) {
  if (!Number.isInteger(red) || red < 0 || red > 255) {
    return undefined; // Red value is invalid
  }
  if (!Number.isInteger(green) || green < 0 || green > 255) {
    return undefined; // Green value is invalid
  }
  if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
    return undefined; // Blue value is invalid
  }
  return (
    "#" +
    ("0" + red.toString(16).toUpperCase()).slice(-2) +
    ("0" + green.toString(16).toUpperCase()).slice(-2) +
    ("0" + blue.toString(16).toUpperCase()).slice(-2)
  );
}

describe("rgbToHexColor func", () => {
  it("happy", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000", "works");
  });
  it("happy1", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF", "works");
  });
  it("happy2", () => {
    expect(rgbToHexColor(256, 256, 256)).to.equal(undefined, "works");
  });
  it("happy3", () => {
    expect(rgbToHexColor(-0, -1, -2)).to.equal(undefined, "works");
  });
  it("happy4", () => {
    expect(rgbToHexColor("0", "1", "2")).to.equal(undefined, "works");
  });
  it("happy5", () => {
    expect(rgbToHexColor(-0, 2)).to.equal(undefined, "works");
  });
});
