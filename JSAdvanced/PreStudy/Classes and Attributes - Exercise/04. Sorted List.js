class List {
  constructor() {
    this.list = [];
    this.size = this.list.length;
  }

  add(num) {
    this.list.push(num);
    this.list.sort((a, b) => a - b);
    this.size = this.list.length;
  }

  remove(index) {
    if (index >= 0 && index < this.list.length) {
      this.list.splice(index, 1);
      this.list.sort((a, b) => a - b);
      this.size = this.list.length;
    } else {
      throw new Error("Invalid Index");
    }
  }

  get(index) {
    if (index >= 0 && index < this.list.length) {
      return this.list[index];
    } else {
      throw new Error("Invalid Index");
    }
  }

  //   get size() {
  //     return this.list.length;
  //   }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(-1);
console.log(list.get(0));
