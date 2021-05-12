class Textbox {
  constructor(selector, regEks) {
    //this.value = value;
    this._elements = Array.from(document.querySelectorAll(selector));
    //this._value = this._elements[0].value;
    this._value = "this peset internal value";

    this._invalidSymbols = regEks;
    let s = 1;
    this._elements.forEach((el) => {
      el.value = `this is ${s++} plus ${this.value}`;
      el.addEventListener("input", (e) => {
        console.log(el.value, "fromEvent");
        this._value = e.target.value;
        this._elements.forEach((item) => {
          item.value = this._value;
        });
      });
    });
  }

  get elements() {
    return this._elements;
  }

  get value() {
    //return this._elements[0].value;
    return this._value;
  }

  set value(txt) {
    console.log("from setter");
    this._value = txt;
    this._elements.forEach((el) => {
      el.value = txt;
    });
  }

  isValid() {
    if (this._invalidSymbols.exec(this.value) === null) {
      return true;
    } else {
      return false;
    }
  }
}

document.body.innerHTML = `<div id="wrapper">
     <input type="text" class="textbox"/>
     <input type="text" class="textbox"/>
 </div>`;

// let Textbox = result;

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.querySelectorAll(".textbox");

//inputs[0].value = "Random";
//inputs[0].dispatchEvent(new Event("input"));
// setTimeout(() => {
//   console.log("time");
//   inputs[0].value = "changed";
//   inputs[0].dispatchEvent(new Event("input"));
// }, 1000);
