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
  it("initialization", function () {
    expect(() => {
      new PaymentPackage("pesho");
    }).to.throw(Error);
    expect(() => {
      new PaymentPackage("", 5);
    }).to.throw(Error);
    expect(() => {
      new PaymentPackage("pesho", {});
    }).to.throw(Error);
    expect(() => {
      new PaymentPackage("pesho", -1);
    }).to.throw(Error);
    expect(() => {
      new PaymentPackage(10, 10);
    }).to.throw(Error);
    expect(() => {
      new PaymentPackage(10);
    }).to.throw(Error);
    expect(() => {
      new PaymentPackage("gosho", 12, 15);
    }).to.not.throw(Error);
  });
  it("value has validation", function () {
    let temp = new PaymentPackage("ivan", 4);
    expect(temp["_value"] === temp["value"]).to.equal(true);
    expect(temp["_name"] === temp["name"]).to.equal(true);
    expect(typeof temp.value).to.equal("number");
    expect(temp.hasOwnProperty("_value")).to.equal(true);
    expect(temp.hasOwnProperty("value")).to.equal(false);
    expect(temp.value).to.equal(4);
    temp.value = 5;
    expect(temp.value).to.equal(5);
    expect(() => {
      temp.value = -5;
    }).to.throw(Error);
    expect(() => {
      temp.value = 0;
    }).to.not.throw(Error);
    expect(() => {
      temp.value = "2";
    }).to.throw(Error);
  });
  it("VAT has validation", function () {
    let temp = new PaymentPackage("ivan", 10);
    expect(temp["_VAT"] === temp["VAT"]).to.equal(true);
    expect(typeof temp.VAT).to.equal("number");
    expect(temp.hasOwnProperty("_VAT")).to.equal(true);
    expect(temp.hasOwnProperty("VAT")).to.equal(false);
    expect(temp.VAT).to.equal(20);
    expect(() => {
      temp.VAT = "";
    }).to.throw(Error);
    expect(() => {
      temp.VAT = -5;
    }).to.throw(Error);
    expect(() => {
      temp.VAT = NaN;
      temp.toString();
    }).to.not.throw(Error);
  });
  it("active has validation", function () {
    let temp = new PaymentPackage("ivan", 10);
    expect(temp["_active"] === temp["active"]).to.equal(true);
    expect(typeof temp.active).to.equal("boolean");
    expect(temp.hasOwnProperty("_active")).to.equal(true);
    expect(temp.hasOwnProperty("active")).to.equal(false);
    expect(() => {
      temp.active = null;
    }).to.throw(Error);
    expect(() => {
      temp.active = NaN;
    }).to.throw(Error);
  });
  it("toString test", function () {
    let temp = new PaymentPackage("HR Services", 1500);
    expect(typeof temp.name).to.equal("string");
    expect(typeof temp.toString()).to.equal("string");
    expect(typeof temp.toString).to.equal("function");
    expect(temp.hasOwnProperty("_name")).to.equal(true);
    expect(temp.hasOwnProperty("name")).to.equal(false);
    expect(temp.toString()).to.equal(
      "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
    );
    temp.active = false;
    expect(temp.toString()).to.equal(
      "Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800"
    );
    expect(() => {
      let testArr = [
        new PaymentPackage("string", 1000),
        new PaymentPackage("string", 1000),
        new PaymentPackage("string", 1000),
      ];
      testArr.join("\n");
    }).to.not.throw(Error);
  });
});
