function solve(input) {
  let engine = {
    add(str) {
      collection.push(str);
    },
    remove(str) {
      collection = collection.filter((el) => el != str);
    },
    print() {
      console.log(collection.join(","));
    },
  };
  let collection = [];

  input.map((el) => {
    let [key, val] = el.split(" ");
    engine[key](val);
  });
}
console.log(
  solve(["add hello", "add again", "remove hello", "add again", "print"])
);
console.log(
  solve(["add pesho", "add george", "add peter", "remove peter", "print"])
);
