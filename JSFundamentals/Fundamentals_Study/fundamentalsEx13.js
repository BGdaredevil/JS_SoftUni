function first(input) {
  let sum = Number(input.shift()) + Number(input.pop());
  console.log(sum);
}

function rearrange(input) {
  let result = [];
  input.forEach((element) => {
    element = Number(element);
    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  });

  result.forEach((element) => {
    console.log(element);
  });
}

function firstLastNumbers(input) {
  let k = Number(input.shift());
  let firstK = input.slice(0, k);
  console.log(firstK.join(" "));
  let lastK = input.slice(input.length - k, input.length);
  console.log(lastK.join(" "));
}

function numSequance() {
  let input = arguments;
  let index = 0;
  let n = Number(input[index++]);
  let k = Number(input[index++]);
  let result = [1];

  while (result.length < n) {
    let numToPush = 0;
    let lastK;

    if (result.length - k < 0) {
      lastK = result.slice(0, result.length);
    } else {
      lastK = result.slice(result.length - k, result.length);
    }

    lastK.forEach((element) => {
      if (!isNaN(element)) {
        numToPush += element;
      }
    });

    result.push(numToPush);
  }
  console.log(result.join(" "));
}

function processOdd(input) {
  let result = [];

  input.forEach((element) => {
    if (input.indexOf(element) % 2 === 1) {
      result.unshift((element *= 2));
    }
  });

  console.log(result.join(" "));
}

function smallestTwo(input) {
  let result = [];
  let findSmallest = (arr) => {
    let smallest = Infinity;
    arr.forEach((element) => {
      if (smallest > Number(element)) {
        smallest = Number(element);
      }
    });
    return smallest;
  };
  result.push(findSmallest(input));
  input.splice(input.indexOf(findSmallest(input)), 1);
  result.push(findSmallest(input));
  console.log(result.join(" "));
}

function smallestTwoAlternative(input) {
  input.sort((a, b) => {
    return a - b;
  });
  let result = input.slice(0, 2);
  console.log(result.join(" "));
}

function productList(input) {
  let addNumbers = (arr) => {
    arr.forEach((element) => {
      let num = arr.indexOf(element) + 1;
      let newElement = "";
      newElement += num;
      newElement += ".";
      newElement += element;
      arr.splice(arr.indexOf(element), 1, newElement);
    });
    return arr;
  };
  input = addNumbers(input.sort());
  input.forEach((element) => {
    console.log(element);
  });
}

function arrManipulate(input) {
  let addFunc = (arr, item) => {
    arr.push(item);
    return arr;
  };
  let removeFunc = (arr, item) => {
    arr = arr.filter((currEl) => currEl !== item);
    return arr;
  };
  let removeAtFunc = (arr, loc) => {
    arr.splice(loc, 1);
    return arr;
  };
  let insertFunc = (arr, item, loc) => {
    arr.splice(loc, 0, item);
    return arr;
  };
  let arrToManipulate = input.shift().split(" ");

  input.forEach((element) => {
    let instruction = element.split(" ");
    let number;
    let index;

    switch (instruction[0]) {
      case "Add":
        number = instruction[1];
        arrToManipulate = addFunc(arrToManipulate, number);
        break;
      case "Remove":
        number = instruction[1];
        arrToManipulate = removeFunc(arrToManipulate, number);
        break;
      case "RemoveAt":
        index = Number(instruction[1]);
        arrToManipulate = removeAtFunc(arrToManipulate, index);
        break;
      case "Insert":
        number = instruction[1];
        index = Number(instruction[2]);
        arrToManipulate = insertFunc(arrToManipulate, number, index);
        break;
    }
  });

  console.log(arrToManipulate.join(" "));
}
