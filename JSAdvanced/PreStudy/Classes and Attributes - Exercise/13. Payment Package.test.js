const { expect } = require("chai");

class PaymentPackage {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.VAT = 20; // Default value
    this.active = true; // Default value
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue !== "string") {
      throw new Error("Name must be a non-empty string");
    }
    if (newValue.length === 0) {
      throw new Error("Name must be a non-empty string");
    }
    this._name = newValue;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    if (typeof newValue !== "number") {
      throw new Error("Value must be a non-negative number");
    }
    if (newValue < 0) {
      throw new Error("Value must be a non-negative number");
    }
    this._value = newValue;
  }

  get VAT() {
    return this._VAT;
  }

  set VAT(newValue) {
    if (typeof newValue !== "number") {
      throw new Error("VAT must be a non-negative number");
    }
    if (newValue < 0) {
      throw new Error("VAT must be a non-negative number");
    }
    this._VAT = newValue;
  }

  get active() {
    return this._active;
  }

  set active(newValue) {
    if (typeof newValue !== "boolean") {
      throw new Error("Active status must be a boolean");
    }
    this._active = newValue;
  }

  toString() {
    const output = [
      `Package: ${this.name}` + (this.active === false ? " (inactive)" : ""),
      `- Value (excl. VAT): ${this.value}`,
      `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`,
    ];
    return output.join("\n");
  }
}

describe("Class Payment Tests", function () {
  // it("initialization", function () {
  //   expect(() => {
  //     new PaymentPackage("pesho");
  //   }).to.throw(Error);
  //   expect(() => {
  //     new PaymentPackage("pesho", {});
  //   }).to.throw(Error);
  //   expect(() => {
  //     new PaymentPackage(10, 10);
  //   }).to.throw(Error);
  // });
  it("name has validation", function () {
    let paymentInstance = new PaymentPackage("ivan", 10);
    expect(() => {
      paymentInstance.name = "";
    }).to.throw(Error);
    expect(() => {
      paymentInstance.name = {};
    }).to.throw(Error);
    expect(paymentInstance.name).to.equal("ivan");
    paymentInstance.name = "pesho";
    expect(paymentInstance.name).to.equal("pesho");
  });
  it("value has validation", function () {
    let paymentInstance = new PaymentPackage("ivan", 10);
    expect(() => {
      paymentInstance.value = "";
    }).to.throw(Error);
    expect(() => {
      paymentInstance.value = -5;
    }).to.throw(Error);
    expect(paymentInstance.value).to.equal(10);
    paymentInstance.value = 5;
    expect(paymentInstance.value).to.equal(5);
  });
  it("VAT has validation", function () {
    let paymentInstance = new PaymentPackage("ivan", 10);
    expect(paymentInstance.VAT).to.equal(20);
    expect(() => {
      paymentInstance.VAT = "";
    }).to.throw(Error);
    expect(() => {
      paymentInstance.VAT = -5;
    }).to.throw(Error);
    expect(paymentInstance.VAT).to.equal(20);
    paymentInstance.VAT = 10;
    expect(paymentInstance.VAT).to.equal(10);
  });
  it("active has validation", function () {
    let paymentInstance = new PaymentPackage("ivan", 10);
    //expect(typeof paymentInstance.active).to.equal("boolean");
    expect(paymentInstance.active).to.equal(true);
    //expect(paymentInstance.active).to.equal(false);
    // expect(() => {
    //   paymentInstance.active = "";
    // }).to.throw(Error);
    expect(() => {
      paymentInstance.active = {};
    }).to.throw(Error);
    expect(() => {
      paymentInstance.active = "true";
    }).to.throw(Error);
  });
  it("toString test", function () {
    let paymentInstance = new PaymentPackage("ivan", 10);
    expect(typeof paymentInstance.toString()).to.equal("string");
    paymentInstance.active = false;
    expect(
      paymentInstance.toString().split(/\s/).includes("(inactive)")
    ).to.equal(true);
    paymentInstance.active = true;
    expect(
      paymentInstance.toString().split(/\s/).includes("(inactive)")
    ).to.equal(false);
    let temp = new PaymentPackage("HR Services", 1500);
    expect(temp.toString()).to.equal(
      "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
    );
  });
});
