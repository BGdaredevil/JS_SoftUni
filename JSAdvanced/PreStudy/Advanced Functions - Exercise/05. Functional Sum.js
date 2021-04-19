function solve(num) {
  let inner = 0;
  inner += num;

  function sum(n) {
    inner += n;
    return sum;
  }
  console.log(inner);

  sum.toString = () => inner;
  return sum;
}
//console.log("" + solve(1));
console.log("" + solve(1)(6)(-3));
