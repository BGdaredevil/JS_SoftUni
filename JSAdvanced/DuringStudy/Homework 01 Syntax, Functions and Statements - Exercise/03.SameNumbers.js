function solve(num) {
  num = num.toString().split("").map(Number);
  let expected = num[0] * num.length;
  let sum = num.reduce((acc, el) => (acc += el), 0);
  return `${expected === sum ? true : false}\n${sum}`;
}
console.log(solve(1234));
