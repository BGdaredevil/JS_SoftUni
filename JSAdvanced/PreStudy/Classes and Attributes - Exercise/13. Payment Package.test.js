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
  let paymentInstance = new PaymentPackage("ivan", 10);
  it("name has validation", function () {
    expect(paymentInstance.name).to.equal("ivan");
    expect(() => {
      paymentInstance.name = "";
    }).to.throw(Error);
  });
  it("value has validation", function () {
    expect(paymentInstance.value).to.equal(10);
    expect(() => {
      paymentInstance.value = "";
    }).to.throw(Error);
  });
  it("has validation", function () {
    expect(() => {
      paymentInstance.value = -5;
    }).to.throw(Error);
  });
});
