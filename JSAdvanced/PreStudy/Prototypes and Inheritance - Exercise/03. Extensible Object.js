function solve() {
  let obj = {
    extend(template) {
      let methods = {};
      let props = {};
      for (const key in template) {
        if (typeof template[key] === "function") {
          methods[key] = template[key];
        } else {
          props[key] = template[key];
        }
      }

      Object.assign(this, props);
      Object.assign(Object.getPrototypeOf(this), methods);
    },
  };

  return obj;
}

var template = {
  name: "",
  setName: function (newValue) {
    console.log(this);
    this.name = newValue;
  },
  getName: function () {
    return this.name;
  },
};

var testObject = solve();
testObject.extend(template);
console.log(testObject.hasOwnProperty("name"));
// expect(testObject.hasOwnProperty("name")).to.equal(
//   true,
//   "Template properties were not cloned correctly."
// );
console.log(testObject);
console.log(testObject.setName.toString());
//console.log(template.setName.toString());
testObject.setName("new name");
console.log(testObject);
template.setName("new name");
console.log(template);
console.log(testObject.getName());
// expect(testObject.getName()).to.equal(
//   "new name",
//   "Extension method didn't work with local context."
// );
