(function () {
  String.prototype.ensureStart = function (str) {
    return this.toString().startsWith(str)
      ? this.toString()
      : str + this.toString();
  };
  String.prototype.ensureEnd = function (str) {
    return this.toString().endsWith(str)
      ? this.toString()
      : this.toString() + str;
  };
  String.prototype.isEmpty = function () {
    return this.length === 0 ? true : false;
  };
  String.prototype.truncate = function (n) {
    let str = this.toString();

    if (str.length < 4) {
      return ".".repeat(n);
    }
    if (str.length <= n) {
      return str;
    }

    if (str.length > n) {
      str = str.substring(0, n);
    }

    str = str.substring(0, n - 2);

    if (!str.includes(" ")) {
      return str + "...";
    } else {
      return str.substring(0, str.lastIndexOf(" ")) + "...";
    }

    // let info = this.slice(0, n);
    // if (!info.includes(" ")) {
    //   return info.slice(0, n - 3) + "...";
    // }
    // let val = info.slice(0, n);
    // let loc = val.lastIndexOf(" ");
    // return loc === -1
    //   ? info.slice(0, n - 3) + "..."
    //   : val.slice(0, val.lastIndexOf(" ")) + "...";
  };
  String.format = function (str, ...params) {
    str = str.toString();
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

//onsole.log(String.hasownProperty("format"));
let str = "1234567890";
// str = str.ensureStart("hello ");
// console.log(str);
str = str.truncate(11);
console.log(str);
str = str.truncate(10);
console.log(str);
str = str.truncate(9);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(7);
console.log(str);
