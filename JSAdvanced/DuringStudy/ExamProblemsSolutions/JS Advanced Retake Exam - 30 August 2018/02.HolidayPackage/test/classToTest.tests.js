const { assert } = require("chai");
const HolidayPackage = require("../classToTest.js");

describe("Tests in progress", () => {
  let instance;
  let p1;
  let p2;
  let p3;

  beforeEach(() => {
    instance = new HolidayPackage("ravda", "Summer");
    p1 = "pesho1 pesho1";
    p2 = "pesho2 pesho2";
    p3 = "pesho3 pesho3";
  });

  it("constructor", () => {
    assert.deepEqual(instance.vacationers, []);
    assert.equal(instance.destination, "ravda");
    assert.equal(instance.season, "Summer");
    assert.equal(instance.insuranceIncluded, false);
  });
  it("showVacationers works", () => {
    assert.equal(instance.showVacationers(), `No vacationers are added yet`);
    instance.addVacationer(p1);
    instance.addVacationer(p2);
    instance.addVacationer(p3);
    assert.deepEqual(instance.vacationers, [p1, p2, p3]);
    assert.equal(
      instance.showVacationers(),
      `Vacationers:\n${[p1, p2, p3].join("\n")}`
    );
  });
  it("addVacationer works", () => {
    assert.deepEqual(instance.vacationers, []);
    instance.addVacationer(p1);
    instance.addVacationer(p2);
    instance.addVacationer(p3);
    assert.deepEqual(instance.vacationers, [p1, p2, p3]);
  });
  it("addVacationer throws", () => {
    assert.throw(() => {
      instance.addVacationer(" ");
    }, "Vacationer name must be a non-empty string");
    assert.throw(() => {
      instance.addVacationer("Gosho");
    }, "Name must consist of first name and last name");
    assert.throw(() => {
      instance.addVacationer("");
    }, "Name must consist of first name and last name");
  });
  it("get insuranceIncluded works", () => {
    assert.equal(instance.insuranceIncluded, false);
  });
  it("set insuranceIncluded works", () => {
    instance.insuranceIncluded = true;
    assert.equal(instance.insuranceIncluded, true);
  });
  it("set insuranceIncluded throws", () => {
    assert.throw(() => {
      instance.insuranceIncluded = "true";
    }, "Insurance status must be a boolean");
  });
  it("generateHolidayPackage works", () => {
    let winterInstance = new HolidayPackage("bansko", "Winter");
    let nonPremInstance = new HolidayPackage("VT", "nonPremSeason");
    instance.addVacationer(p1);
    assert.equal(
      instance.generateHolidayPackage(),
      "Holiday Package Generated\nDestination: ravda\nVacationers:\npesho1 pesho1\nPrice: 600"
    );
    instance.addVacationer(p2);
    instance.addVacationer(p3);
    assert.equal(
      instance.generateHolidayPackage(),
      "Holiday Package Generated\nDestination: ravda\nVacationers:\npesho1 pesho1\npesho2 pesho2\npesho3 pesho3\nPrice: 1400"
    );
    instance.insuranceIncluded = true;
    assert.equal(
      instance.generateHolidayPackage(),
      "Holiday Package Generated\nDestination: ravda\nVacationers:\npesho1 pesho1\npesho2 pesho2\npesho3 pesho3\nPrice: 1500"
    );

    winterInstance.addVacationer(p1);
    winterInstance.addVacationer(p2);
    winterInstance.addVacationer(p3);
    assert.equal(
      winterInstance.generateHolidayPackage(),
      "Holiday Package Generated\nDestination: bansko\nVacationers:\npesho1 pesho1\npesho2 pesho2\npesho3 pesho3\nPrice: 1400"
    );

    nonPremInstance.addVacationer(p1);
    nonPremInstance.addVacationer(p2);
    nonPremInstance.addVacationer(p3);
    assert.equal(
      nonPremInstance.generateHolidayPackage(),
      "Holiday Package Generated\nDestination: VT\nVacationers:\npesho1 pesho1\npesho2 pesho2\npesho3 pesho3\nPrice: 1200"
    );
  });
  it("generateHolidayPackage throws", () => {
    assert.throw(() => {
      instance.generateHolidayPackage();
    }, "There must be at least 1 vacationer added");
  });
});
