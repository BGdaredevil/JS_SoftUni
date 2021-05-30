function createSortedList() {
  return {
    list: [],
    add(el) {
      this.list.push(el);
      this.sort();
    },
    remove(loc) {
      if (loc >= 0 && loc < this.size) {
        this.list.splice(loc, 1);
      }
    },
    get(loc) {
      if (loc >= 0 && loc < this.size) {
        return this.list[loc];
      }
    },
    get size() {
      return this.list.length;
    },
    sort() {
      this.list.sort((a, b) => a - b);
    },
  };
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
