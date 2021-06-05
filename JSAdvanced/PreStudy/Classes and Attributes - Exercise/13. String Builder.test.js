const { expect, assert } = require("chai");

class StringBuilder {
  constructor(string) {
    if (string !== undefined) {
      StringBuilder._vrfyParam(string);
      this._stringArray = Array.from(string);
    } else {
      this._stringArray = [];
    }
  }

  append(string) {
    StringBuilder._vrfyParam(string);
    for (let i = 0; i < string.length; i++) {
      this._stringArray.push(string[i]);
    }
  }

  prepend(string) {
    StringBuilder._vrfyParam(string);
    for (let i = string.length - 1; i >= 0; i--) {
      this._stringArray.unshift(string[i]);
    }
  }

  insertAt(string, startIndex) {
    StringBuilder._vrfyParam(string);
    this._stringArray.splice(startIndex, 0, ...string);
  }

  remove(startIndex, length) {
    this._stringArray.splice(startIndex, length);
  }

  static _vrfyParam(param) {
    if (typeof param !== "string")
      throw new TypeError("Argument must be а string");
  }

  toString() {
    return this._stringArray.join("");
  }
}

describe("Unit Tests", function () {
  it("append", () => {
    let temp = new StringBuilder("123456789");
    let arr = [..."123456789"];
    let testAppend = (str) => {
      str = [...arr].concat(str);
      arr = str;
      return str;
    };
    let testStr = "abc";
    temp.append(testStr);
    assert.equal(temp._stringArray.join(""), testAppend(testStr).join(""));

    testStr = "";
    temp.append(testStr);
    assert.equal(temp._stringArray.join(""), testAppend(testStr).join(""));

    testStr = "a";
    temp.append(testStr);
    assert.equal(temp._stringArray.join(""), testAppend(testStr).join(""));
  });
  it("prepend", () => {
    let temp = new StringBuilder("123456789");
    let arr = [..."123456789"];
    let testPrepend = (str) => {
      str = [...str].concat(arr);
      arr = str;
      return str;
    };

    let testStr = "abc";
    temp.prepend(testStr);
    assert.equal(temp._stringArray.join(""), testPrepend(testStr).join(""));

    testStr = "";
    temp.prepend(testStr);
    assert.equal(temp._stringArray.join(""), testPrepend(testStr).join(""));

    testStr = "a";
    temp.prepend(testStr);
    assert.equal(temp._stringArray.join(""), testPrepend(testStr).join(""));
  });
  it("insertAt", () => {
    let temp = new StringBuilder("1");
    let arr = [..."1"];
    let testInsertAt = (str, start) => {
      let first = arr.slice(0, start);
      let second = arr.slice(start);
      str = [...first, ...str, ...second];
      arr = str;
      return str;
    };

    let testStr = "aa";

    temp.insertAt(testStr, 0);
    assert.equal(temp._stringArray.join(""), testInsertAt(testStr, 0).join(""));

    testStr = "bb";
    temp.insertAt(testStr, 1);
    assert.equal(temp._stringArray.join(""), testInsertAt(testStr, 1).join(""));

    testStr = "cc";
    temp.insertAt(testStr, temp._stringArray.length - 1);
    assert.equal(
      temp._stringArray.join(""),
      testInsertAt(testStr, arr.length - 1).join("")
    );
  });
  it("remove", () => {
    let temp = new StringBuilder("123456789");
    let arr = [..."123456789"];
    let testRemove = (start, length) => {
      let first = arr.slice(0, start);
      let second = arr.slice(start + length);
      str = [...first, ...second];
      arr = str;
      return str;
    };

    let start = 0;
    let count = 1;

    temp.remove(start, count);
    assert.equal(temp._stringArray.join(""), testRemove(start, count).join(""));

    start = arr.length - 1;
    count = 1;
    temp.remove(start, count);
    assert.equal(temp._stringArray.join(""), testRemove(start, count).join(""));

    start = 2;
    count = 2;
    temp.remove(start, count);
    assert.equal(temp._stringArray.join(""), testRemove(start, count).join(""));
  });
  it("toString", () => {
    let temp = new StringBuilder("123456789");
    assert.equal(temp.toString(), "123456789");
    temp.remove(0, 5);
    assert.equal(temp.toString(), "6789");
  });
  it("has all methods", () => {
    let temp = new StringBuilder();
    expect(Object.getPrototypeOf(temp).hasOwnProperty("append")).to.equal(true);
    expect(Object.getPrototypeOf(temp).hasOwnProperty("prepend")).to.equal(
      true
    );
    expect(Object.getPrototypeOf(temp).hasOwnProperty("insertAt")).to.equal(
      true
    );
    expect(Object.getPrototypeOf(temp).hasOwnProperty("toString")).to.equal(
      true
    );
    expect(Object.getPrototypeOf(temp).hasOwnProperty("remove")).to.equal(true);
    expect(StringBuilder.hasOwnProperty("_vrfyParam")).to.equal(true);
    expect(temp.hasOwnProperty("_stringArray")).to.equal(true);
  });
});
