function getSued(input) {
  let [rateOne, rateTwo, rateThree, questions] = input.map((el) => Number(el));
  let rate = rateOne + rateTwo + rateThree;
  let result = 0;
  while (questions > 0) {
    result++;
    questions -= rate;
    if (result % 4 === 0) {
      result++;
    }
  }
  //console.log(result);
  return `Time needed: ${result}h.`;
}

function shopList(input) {
  let list = input.shift().split("!");
  let result = "";
  const urgent = (list, arr) => {
    let [item] = arr;
    if (!list.includes(item)) {
      list.unshift(item);
    }
    return list;
  };
  const unnecesary = (list, arr) => {
    let [item] = arr;
    if (list.includes(item)) {
      list.splice(list.indexOf(item), 1);
    }
    return list;
  };
  const correct = (list, arr) => {
    let [old, replacement] = arr;
    if (list.includes(old)) {
      list.splice(list.indexOf(old), 1, replacement);
    }
    return list;
  };
  const rearrange = (list, arr) => {
    let [item] = arr;
    if (list.includes(item)) {
      list.push(list.splice(list.indexOf(item), 1));
    }
    return list;
  };
  for (const item of input) {
    let [order, ...rest] = item.split(" ");
    switch (order) {
      case "Urgent":
        urgent(list, rest);
        break;
      case "Unnecessary":
        unnecesary(list, rest);
        break;
      case "Correct":
        correct(list, rest);
        break;
      case "Rearrange":
        rearrange(list, rest);
        break;
      case "Go":
        console.log(list.join(", "));
        break;
    }
  }
}

function delivery(input) {
  let hood = input
    .shift()
    .split("@")
    .map((el) => Number(el));

  let currentHouse = 0;

  for (const line of input) {
    let [order, distance] = line.split(" ");

    switch (order) {
      case "Jump":
        currentHouse += Number(distance);
        if (currentHouse >= hood.length) {
          currentHouse = 0;
        }
        if (hood[currentHouse] <= 0) {
          console.log(`Place ${currentHouse} already had Valentine's day.`);
        } else {
          hood[currentHouse] -= 2;
          if (hood[currentHouse] <= 0) {
            console.log(`Place ${currentHouse} has Valentine's day.`);
          }
        }
        break;
      case "Love!":
        let fail = 0;
        console.log(`Cupid's last position was ${currentHouse}.`);

        const tester = (arr) => {
          let isEvery = true;
          for (const thing of arr) {
            if (thing > 0) {
              fail++;
              isEvery = false;
            }
          }
          return isEvery;
        };
        if (tester(hood)) {
          console.log("Mission was successful.");
        } else {
          console.log(`Cupid has failed ${fail} places.`);
        }
        break;
    }
  }
}
