let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

function solution(num) {
  let five = num;
  let inner = (a) => {
    return a + five;
  };

  return inner;
}
