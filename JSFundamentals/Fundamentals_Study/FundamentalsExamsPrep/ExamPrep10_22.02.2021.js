function reception(input) {
  input = input.map(Number);
  let totalQuestions = input.pop();
  let efficiency = input.reduce((acc, curr) => (acc += curr), 0);

  let time = 0;
  while (totalQuestions > 0) {
    time++;
    totalQuestions -= efficiency;
    if (time % 4 === 0) {
      time++;
    }
  }

  return `Time needed: ${time}h.`;
}

function arrayModifier(input) {
  let [baseArr, ...orders] = input;
  baseArr = baseArr.split(" ").map(Number);
  const swapper = (arr, firstIndex, secondIndex) => {
    firstIndex = Number(firstIndex);
    secondIndex = Number(secondIndex);
    let temp = arr[secondIndex];
    arr[secondIndex] = arr[firstIndex];
    arr[firstIndex] = temp;
    return arr;
  };
  const multiplyer = (arr, firstIndex, secondIndex) => {
    firstIndex = Number(firstIndex);
    secondIndex = Number(secondIndex);
    arr[firstIndex] *= arr[secondIndex];
    return arr;
  };

  for (const order of orders) {
    let [comand, first, second] = order.split(" ");
    switch (comand) {
      case "swap":
        baseArr = swapper(baseArr, first, second);
        break;
      case "multiply":
        baseArr = multiplyer(baseArr, first, second);
        break;
      case "decrease":
        baseArr = baseArr.map((el) => (el -= 1));
        break;
      case "end":
        return baseArr.join(", ");
    }
  }
}

function numbers(input) {
  input = input.split(" ").map(Number);
  let average = input.reduce((acc, e) => (acc += e), 0) / input.length;
  let result = input
    .reduce((acc, el) => {
      if (el > average) {
        acc.push(el);
      }
      return acc;
    }, [])
    .sort((a, b) => b - a)
    .slice(0, 5);

  if (result.length === 0) {
    return "No";
  } else {
    return result.join(" ");
  }
}
console.log(numbers([10, 20, 30, 40, 50]));
console.log(numbers([5, 2, 3, 4, -10, 30, 40, 50, 20, 50, 60, 60, 51]));
