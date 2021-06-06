function solve() {
  class Figure {
    constructor(un = "cm") {
      this.units = un;
    }

    get area() {
      return this.units;
    }

    get units() {
      return this._units;
    }

    set units(str) {
      let selector = {
        m: () => {
          this._units = "m";
        },
        cm: () => {
          this._units = "cm";
        },
        mm: () => {
          this._units = "mm";
        },
      };
      selector[str]();
    }

    changeUnits(str) {
      let selector = {
        m: () => {
          this.units = "m";
        },
        cm: () => {
          this.units = "cm";
        },
        mm: () => {
          this.units = "mm";
        },
      };
      selector[str]();
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(rad, un) {
      super(un);
      this.radius = rad;
    }

    get radius() {
      let selector = {
        m: (x) => {
          return x / 1000;
        },
        cm: (x) => {
          return x;
        },
        mm: (x) => {
          return x * 10;
        },
      };
      return selector[this.units](this._radius);
    }

    set radius(num) {
      this._radius = num;
    }

    get area() {
      return Math.PI * this.radius ** 2;
    }

    toString() {
      return [
        super.toString(),
        `Area: ${this.area} - radius: ${this.radius}`,
      ].join(" ");
    }
  }

  class Rectangle extends Figure {
    constructor(w, h, un) {
      super(un);
      this.width = w;
      this.height = h;
    }

    get width() {
      let selector = {
        m: (x) => {
          return x / 1000;
        },
        cm: (x) => {
          return x;
        },
        mm: (x) => {
          return x * 10;
        },
      };
      return selector[this.units](this._width);
    }

    set width(num) {
      this._width = num;
    }

    get height() {
      let selector = {
        m: (x) => {
          return x / 1000;
        },
        cm: (x) => {
          return x;
        },
        mm: (x) => {
          return x * 10;
        },
      };
      return selector[this.units](this._height);
    }

    set height(num) {
      this._height = num;
    }

    get area() {
      return this.width * this.height;
    }

    toString() {
      let prev = super.toString();
      return [
        prev,
        `Area: ${this.area} - width: ${this.width}, height: ${this.height}`,
      ].join(" ");
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}

let classes = solve();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.units);
console.log(c.area); //78.53981633974483, "1");
console.log(c.toString()); //"Figures units: cm Area: 78.53981633974483 - radius: 5",   "2"
let r = new Rectangle(3, 4, "mm");
console.log(r.area); //, 1200, "3");
console.log(r.toString()); //  "Figures units: mm Area: 1200 - width: 30, height: 40",   "4"
r.changeUnits("cm");
console.log(r.area); //, 12, "5");
console.log(r.toString()); //  "Figures units: cm Area: 12 - width: 3, height: 4",   "5"

c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
