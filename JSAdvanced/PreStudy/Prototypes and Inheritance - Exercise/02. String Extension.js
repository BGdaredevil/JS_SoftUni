(function () {
  String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : str + this;
  };
  String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.toString() : this + str;
  };
  String.prototype.isEmpty = function () {
    return this.length === 0;
  };
  String.prototype.truncate = function (n) {
    if (n < 4) {
      return ".".repeat(n);
    }
    if (this.length < n) {
      return this.toString();
    } else if (this.includes(" ")) {
      let val = this.slice(0, n - 2);
      return val.slice(0, val.lastIndexOf(" ")) + "...";
    } else {
      return this.slice(0, n - 2) + "...";
    }
  };
  String.format = function (str, ...params) {
    params.map((el, loc) => {
      loc = "{" + loc;
      let reg = new RegExp(loc);
      // let reg = /\{`${loc}`\}/
      str = str.replace(reg, el);
      let fix = new RegExp("}");
      str = str.replace(fix, "");
    });
    return str;
  };
})();

var testString = "the {0} brown {1} jumps over the {2} dog";

console.log(String.format(testString, "quick", "fox", "lazy", "bananas")); //.to.equal(
//   "the quick brown fox jumps over the lazy dog",
//   "Incorrect format() functionality"
// );
