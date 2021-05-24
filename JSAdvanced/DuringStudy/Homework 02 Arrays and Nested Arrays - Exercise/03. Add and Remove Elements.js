function solve(input) {
  let operations = {
    initial: 1,
    result: [],
    get add() {
      this.result.push(this.initial);
      this.initial++;
    },
    get remove() {
      this.result.pop();
      this.initial++;
    },
    toString() {
      if (this.length === 0) {
        return "Empty";
      } else {
        return this.result.join("\n");
      }
    },
  };
  input.map((el) => operations[el]);
  return operations.toString();
}
console.log(solve(["add", "add", "add", "add"]));
