//again with the fibonacci...

let fib = getFibonator();

function getFibonator() {
  let fibonacci = [0];

  let calc = () => {
    let next;
    if (fibonacci.length === 1) {
      next = 1;
    } else {
      next = fibonacci[0] + fibonacci[1];
    }
    fibonacci.push(next);
    if (fibonacci.length >= 3) {
      fibonacci.shift();
    }
    return next;
  };

  return calc;
}

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
