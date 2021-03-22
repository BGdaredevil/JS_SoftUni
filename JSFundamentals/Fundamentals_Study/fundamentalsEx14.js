function train(input) {
  let wagons = input.shift().split(" ").map(Number);
  let maxCap = Number(input.shift());
  let findAndFill = (wagons, num) => {
    for (let j = 0; 0 < num; j++) {
      let wagon = wagons[j];
      if (wagon + num <= maxCap) {
        wagons.splice(j, 1, wagon + num);
        num = 0;
      }
    }
    return wagons;
  };

  for (let i = 0; i < input.length; i++) {
    let instruction = input[i].split(" ");

    if (instruction[0] === "Add") {
      wagons.push(Number(instruction[1]));
    } else {
      wagons = findAndFill(wagons, Number(instruction[0]));
    }
  }
  console.log(wagons.join(" "));
}

function distinct(input) {
  input.map(Number);
  let result = [];
  let isPresent = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (element === item) {
        return true;
      }
    }
    return false;
  };
  input.forEach((element) => {
    if (isPresent(result, element)) {
      return;
    } else {
      result.push(element);
    }
  });
  console.log(result.join(" "));
}

function house(input) {
  let getName = (str) => {
    str = str.split(" ");
    return str[0];
  };
  let isGoing = (str) => {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
      let word = str[i];
      if (word === "not") {
        return false;
      }
    }
    return true;
  };
  let isPresent = (arr, person) => {
    for (let j = 0; j < arr.length; j++) {
      let personName = arr[j];
      if (personName === person) {
        return true;
      }
    }
    return false;
  };
  let listRemove = (arr, person) => {
    for (let k = 0; k < arr.length; k++) {
      let personName = arr[k];
      if (personName === person) {
        arr.splice(k, 1);
      }
    }
    return arr;
  };
  let list = [];

  input.forEach((statement) => {
    let name = getName(statement);
    if (isGoing(statement)) {
      if (isPresent(list, name)) {
        console.log(`${name} is already in the list!`);
      } else {
        list.push(name);
      }
    } else {
      if (isPresent(list, name)) {
        list = listRemove(list, name);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  });
  list.forEach((element) => {
    console.log(element);
  });
}

function sorting(input) {
  let getBiggest = (arr) => {
    let biggest = -Infinity;
    arr.forEach((element) => {
      if (biggest < element) {
        biggest = element;
      }
    });
    return biggest;
  };
  let getSmallest = (arr) => {
    let smallest = Infinity;
    arr.forEach((element) => {
      if (smallest > element) {
        smallest = element;
      }
    });
    return smallest;
  };
  let removeItems = (arr, item1) => {
    arr.splice(arr.indexOf(item1), 1);

    /*     arr = arr.filter((el) => el != item1);
    arr = arr.filter((el) => el != item2); */

    return arr;
  };
  let result = [];
  while (input.length > 1) {
    let currentBuggest = getBiggest(input);
    let currentSmallest = getSmallest(input);
    result.push(currentBuggest);
    result.push(currentSmallest);
    input = removeItems(input, currentBuggest);
    input = removeItems(input, currentSmallest);
  }
  result.push(input[0]);
  console.log(result.join(" "));
}

function doubleSort(input) {
  let result = [];
  result = input.sort().sort((a, b) => a.length - b.length);

  result.forEach((element) => {
    console.log(element);
  });
}

function bombNum() {
  let index = 0;
  let input = arguments;
  let currentArray = input[index++];
  let bombNum = Number(input[index][0]);
  let bombPow = Number(input[index][1]);
  let result = 0;
  let bombAOE = (arr, bombNum, bombPow) => {
    let midPoint = arr.indexOf(bombNum);
    let start;
    let end;
    if (midPoint - bombPow < 0) {
      start = 0;
    } else {
      start = midPoint - bombPow;
    }
    if (midPoint + bombPow >= arr.length) {
      end = arr.length - 1;
    } else {
      end = midPoint + bombPow;
    }
    arr.splice(start, end - start + 1);
    return arr;
  };

  while (currentArray.indexOf(bombNum) != -1) {
    currentArray = bombAOE(currentArray, bombNum, bombPow);
  }
  currentArray.forEach((element) => {
    result += element;
  });
  console.log(result);
}

function searchNum() {
  let index = 0;
  let secondIndex = 0;
  let input = arguments;
  let firstArr = input[index++];
  let takeCount = Number(input[index][secondIndex++]);
  let removeCount = Number(input[index][secondIndex++]);
  let searchInTheRest = Number(input[index][secondIndex++]);
  let foundCount = 0;
  let testArray = [];

  while (takeCount > 0) {
    testArray.push(firstArr.shift());
    takeCount--;
  }

  while (removeCount > 0) {
    testArray.shift();
    removeCount--;
  }

  testArray.forEach((element) => {
    if (element === searchInTheRest) {
      foundCount++;
    }
  });

  console.log(`Number ${searchInTheRest} occurs ${foundCount} times.`);
}

function arrayManipulator() {
  let index = 0;
  let input = arguments;
  let testificate = input[index++];
  let operations = input[index++];
  let addItem = (arr, str) => {
    let a = str.split(" ");
    let loc = Number(a[1]);
    if (loc < 0) {
      loc = 0;
    }
    let item = Number(a[2]);
    arr.splice(loc, 0, item);
    return arr;
  };
  let addfew = (arr, str) => {
    let b = str.split(" ");
    b.shift();
    let spot = Number(b.shift());
    b.reverse();
    b.forEach((element) => {
      arr.splice(spot, 0, Number(element));
    });
    return arr;
  };
  let isFoundAt = (arr, str) => {
    str = str.split(" ");
    let item = Number(str[1]);
    console.log(arr.indexOf(item));
  };
  let removeItem = (arr, str) => {
    str = str.split(" ");
    let loc = Number(str[1]);
    arr.splice(loc, 1);
    return arr;
  };
  let shift = (arr, str) => {
    str = str.split(" ");
    let pos = Number(str[1]);
    while (pos > 0) {
      arr.push(arr.shift());
      pos--;
    }
    return arr;
  };
  let sumThePairs = (arr) => {
    let result = [];
    for (let j = 0; j < arr.length; j++) {
      let item1 = arr[j++];
      let item2 = arr[j];
      if (!isNaN(item2)) {
        result.push(item1 + item2);
      } else {
        result.push(item1);
      }
    }
    return result;
  };

  operations.forEach((operation) => {
    operation = operation.split(" ");
    if (operation[0] === "print") {
      let row = "[ ";
      row += testificate.join(", ");
      row += " ]";
      console.log(row);
    } else {
      switch (operation[0]) {
        case "add":
          operation = operation.join(" ");
          testificate = addItem(testificate, operation);
          break;
        case "addMany":
          operation = operation.join(" ");
          testificate = addfew(testificate, operation);
          break;
        case "contains":
          operation = operation.join(" ");
          isFoundAt(testificate, operation);
          break;
        case "remove":
          operation = operation.join(" ");
          testificate = removeItem(testificate, operation);
          break;
        case "shift":
          operation = operation.join(" ");
          testificate = shift(testificate, operation);
          break;
        case "sumPairs":
          operation = operation.join(" ");
          testificate = sumThePairs(testificate);
          break;
      }
    }
  });
}

function gladiator(input) {
  let inventory = input.shift().split(" ");

  let buy = (arr, item) => {
    if (arr.indexOf(item) === -1) {
      arr.push(item);
    }
    return arr;
  };
  let trash = (arr, item) => {
    if (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  };
  let repair = (arr, item) => {
    if (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
      arr.push(item);
    }
    return arr;
  };
  let upgrade = (arr, item) => {
    item = item.split("-");
    gem = item[1];
    item = item[0];
    if (arr.indexOf(item) !== -1) {
      gem = `${item}:${gem}`;
      arr.splice(arr.indexOf(item) + 1, 0, gem);
    }
    return arr;
  };

  inventory.forEach((element) => {
    element = element.trim();
  });

  input.forEach((element) => {
    element = element.trim().split(" ");
    let operation = element[0].trim();
    let item = element[1].trim();

    switch (operation) {
      case "Buy":
        inventory = buy(inventory, item);
        break;
      case "Trash":
        inventory = trash(inventory, item);
        break;
      case "Repair":
        inventory = repair(inventory, item);
        break;
      case "Upgrade":
        inventory = upgrade(inventory, item);
        break;
    }
  });
  console.log(inventory.join(" "));
}

function aWallIsBorn(input) {
  input = input.map(Number);
  let consumedConcrete = 0;
  let dailyConsumedConcrete = [];
  let remainingToFinish = (arr) => {
    let returnArr = [];
    arr.forEach((element) => {
      if (element < 30) {
        returnArr.push(element);
      }
    });
    return returnArr;
  };
  let dailyCalc = (arr) => {
    let count = 0;
    for (j = 0; j < arr.length; j++) {
      let element = arr[j];
      arr.splice(arr.indexOf(element), 1, ++element);
      count++;
    }
    dailyConsumedConcrete.push(count * 195);
    return arr;
  };
  function solve(input) {
    if (input.length > 0) {
      input = remainingToFinish(input);
      if (isNaN(input[0])) {
        return;
      }
      input = dailyCalc(input);
      return solve(input);
    } else {
      return;
    }
  }
  solve(input);

  dailyConsumedConcrete.forEach((element) => {
    consumedConcrete = consumedConcrete + element * 1900;
  });
  console.log(dailyConsumedConcrete.join(", "));
  console.log(`${consumedConcrete} pesos`);
}

aWallIsBorn(["21", "25", "28", "30"]);
