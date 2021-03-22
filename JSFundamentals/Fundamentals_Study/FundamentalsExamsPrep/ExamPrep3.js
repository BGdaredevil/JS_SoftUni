function reception(input) {
  let [first, second, third, questions] = input;
  let totalSpeed = Number(first) + Number(second) + Number(third);
  questions = Number(questions);
  let result = 0;
  while (questions > 0) {
    result++;
    questions -= totalSpeed;
    if (result % 4 === 0 && result !== 0) {
      result++;
    }
  }
  console.log(`Time needed: ${result}h.`);
}
// reception(["5", "5", "10", "60"]);
// reception(["1", "2", "3", "45"]);
// reception(["3", "2", "5", "40"]);

function arrayWorker(input) {
  let testificate = input.shift().split(" ");
  let swapper = (arr, firstIndex, secondIndex) => {
    let firstItem = arr[Number(firstIndex)];
    let secondItem = arr[Number(secondIndex)];
    arr.splice(firstIndex, 1, secondItem);
    arr.splice(secondIndex, 1, firstItem);
    return arr;
  };
  let multiplier = (arr, firstIndex, secondIndex) => {
    let firstItem = Number(arr[Number(firstIndex)]);
    let secondItem = Number(arr[Number(secondIndex)]);
    arr.splice(firstIndex, 1, firstItem * secondItem);
    return arr;
  };
  let decreaser = (arr) => {
    arr = arr.map((el) => Number(el) - 1);
    return arr;
  };
  for (const line of input) {
    if (line !== "end") {
      let [comand, ind1, ind2] = line.split(" ");

      switch (comand) {
        case "swap":
          testificate = swapper(testificate, ind1, ind2);
          break;
        case "multiply":
          testificate = multiplier(testificate, ind1, ind2);
          break;
        case "decrease":
          testificate = decreaser(testificate, ind1, ind2);
          break;
      }
    } else {
      console.log(testificate.join(", "));
      break;
    }
  }
}
// arrayWorker([
//   "23 -2 321 87 42 90 -123",
//   "swap 1 3",
//   "swap 3 6",
//   "swap 1 0",
//   "multiply 1 2",
//   "multiply 2 1",
//   "decrease",
//   "end",
// ]);

function nums(input) {
  let sum = 0;
  input = input.split(" ").map((el) => Number(el));
  input.map((el) => (sum += el));
  input = input.sort((a, b) => b - a);
  let average = sum / input.length;
  let output = [];
  for (const item of input) {
    if (item > average) {
      if (output.length < 5) {
        output.push(item);
      } else {
        console.log(output.join(" "));
        break;
      }
    } else if (output.length === 0) {
      console.log("No");
      break;
    } else {
      console.log(output.join(" "));
      break;
    }
  }
}
//nums("10 20 30 40 50");
//nums("5 2 3 4 -10 30 40 50 20 50 60 60 51");
