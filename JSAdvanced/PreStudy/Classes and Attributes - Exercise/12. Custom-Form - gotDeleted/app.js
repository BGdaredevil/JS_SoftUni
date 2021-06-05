let result = (function () {
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

  class Form {
    constructor(...boxElements) {
      this._element = document.createElement("div");
      this._element.classList.add("form");
      this._textboxes = [];
      boxElements.forEach((element) => {
        if (!(element instanceof Textbox)) {
          throw new Error("Invalid Parameter - not instance of TextBox");
        } else {
          Array.from(element.elements).forEach((item) => {
            this._element.appendChild(item);
          });
          this._textboxes.push(element);
        }
      });
    }

    submit() {
      let output = true;
      this._textboxes.forEach((box) => {
        if (box.isValid()) {
          Array.from(box.elements).forEach((el) => {
            el.style.border = "2px solid green";
          });
        } else {
          Array.from(box.elements).forEach((el) => {
            el.style.border = "2px solid red";
          });
          output = false;
        }
      });
      return output;
    }

    attach(selector) {
      document.querySelector(selector).appendChild(this._element);
    }
  }

  return {
    Textbox: Textbox,
    Form: Form,
  };
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "pasword2";
let form = new Form(username, password);
