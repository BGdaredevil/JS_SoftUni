let secondZeroTest = solution();

secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

function solution() {
  let innerStr = "";

  let list = {
    append(str) {
      innerStr += str;
    },
    removeStart(count) {
      innerStr = innerStr.slice(count);
    },
    removeEnd(count) {
      innerStr = innerStr.slice(0, -count);
    },
    print() {
      console.log(innerStr);
    },
  };
  return list;
}
