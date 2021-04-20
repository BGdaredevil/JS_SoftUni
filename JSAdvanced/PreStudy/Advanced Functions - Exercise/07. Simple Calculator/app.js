function calculator() {
  let numOne;
  let numTwo;
  let result;
  let operations = {
    init(num1, num2, res) {
      numOne = document.querySelector(num1);
      numTwo = document.querySelector(num2);
      result = document.querySelector(res);
    },
    add() {
      result.value = Number(numOne.value) + Number(numTwo.value);
    },
    subtract() {
      result.value = Number(numOne.value) - Number(numTwo.value);
    },
  };
  return operations;
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
