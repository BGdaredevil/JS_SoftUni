function solve(input) {
  input = input.map(Number);
  let number = input[0];
  let binaryNumber = input[1];
  let count = 0;

  while (number > 0) {
    if (number % 2 === binaryNumber) {
      count++;
    }
    number = Math.floor(number / 2);
  }
  console.log(count);
}

function solve2(input) {}
solve2();
