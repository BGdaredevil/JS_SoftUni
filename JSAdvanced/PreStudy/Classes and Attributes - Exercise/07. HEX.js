class Hex {
  constructor(num) {
    this.value = Number(num);
  }

  valueOf() {
    return this.value;
  }

  plus(num) {
    let temp = 0;
    if (typeof num === "number") {
      temp = this.value + num;
    } else {
      temp = this.value + num.value;
    }
    return new Hex(temp);
  }

  minus(num) {
    let temp = 0;
    if (typeof num === "number") {
      temp = this.value - num;
    } else {
      temp = this.value - num.value;
    }
    return new Hex(temp);
  }

  parse(str) {
    return parseInt(str, 16);
  }

  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
