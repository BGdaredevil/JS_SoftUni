class Textbox {
  constructor(selector, regEks) {
    this.selector = document.querySelector(selector);
    this._value = "";
    this._elements = document.querySelectorAll(selector);
    this._invalidSymbols = regEks;

    Array.from(this.elements).forEach(
      (el) => (el.oninput = this.onInput.bind(this))
    );
  }

  onInput(e) {
    this.value = e.target.value;
  }

  get elements() {
    return this._elements;
  }

  get value() {
    return this._value;
  }

  set value(txt) {
    this._value = txt;
    Array.from(this.elements).forEach((e) => (e.value = txt));
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
