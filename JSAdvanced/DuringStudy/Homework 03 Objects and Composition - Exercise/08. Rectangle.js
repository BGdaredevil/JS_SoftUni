function rectangle(width, height, color) {
  let rect = {
    width,
    height,
    _color: "",
    get color() {
      return this._color;
    },
    set color(str) {
      str = str.split("");
      str[0] = str[0].toUpperCase();
      this._color = str.join("");
    },
    calcArea() {
      return this.height * this.width;
    },
  };
  rect.color = color;
  return rect;
}
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
