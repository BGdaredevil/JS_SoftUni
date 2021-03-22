function phoneBook(input) {
  let row = "";
  Object.entries(
    input.reduce((acc, e) => {
      let [name, num] = e.split(" ");
      acc[name] = num;
      return acc;
    }, {})
  ).forEach((e) => {
    row += `${e[0]} -> ${e[1]}\n`;
  });
  return row;
}

function meetings(input) {
  let result = "";
  let schedule = input.reduce((acc, el) => {
    let [day, person] = el.split(" ");
    if (!acc.hasOwnProperty(day)) {
      acc[day] = person;
      result += `Scheduled for ${day}\n`;
    } else {
      result += `Conflict on ${day}!\n`;
    }
    return acc;
  }, {});
  Object.entries(schedule).forEach((el) => {
    result += `${el[0]} -> ${el[1]}\n`;
  });
  return result;
}

function addressBook(input) {
  let result = "";
  let book = input.reduce((acc, line) => {
    let [name, loc] = line.split(":");
    acc[name] = loc;
    return acc;
  }, {});
  Object.entries(book)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((el) => {
      result += `${el[0]} -> ${el[1]}\n`;
    });
  return result;
}

function storage(input) {
  let result = "";
  let inventory = input.reduce((acc, el) => {
    let [item, qty] = el.split(" ");
    acc.hasOwnProperty(item)
      ? (acc[item] += Number(qty))
      : (acc[item] = Number(qty));
    return acc;
  }, {});
  Object.entries(inventory).forEach((el) => {
    result += `${el[0]} -> ${el[1]}\n`;
  });

  return result;
}

function grades(input) {
  let result = "";
  let dnevnik = input.reduce((acc, el) => {
    let [name, ...info] = el.split(" ");

    if (acc.hasOwnProperty(name)) {
      acc[name].grades.push(...info.map(Number));
      acc[name].avGrade =
        acc[name].grades.reduce((a, el) => (a += el), 0) /
        acc[name].grades.length;
    } else {
      acc[name] = {};
      acc[name].grades = [];
      acc[name].grades.push(...info.map(Number));
      acc[name].avGrade =
        acc[name].grades.reduce((a, el) => (a += el), 0) /
        acc[name].grades.length;
    }
    return acc;
  }, {});
  Object.entries(dnevnik)
    .sort((a, b) => a[1].avGrade - b[1].avGrade)
    .forEach((el) => {
      result += `${el[0]}: ${el[1].grades.join(", ")}\n`;
    });
  return result;
}

function wordCount(input) {
  let result = "";
  let theList = input.reduce((acc, el) => {
    if (acc.hasOwnProperty(el)) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  Object.entries(theList)
    .sort((a, b) => b[1] - a[1])
    .forEach((el) => {
      result += `${el[0]} -> ${el[1]} times\n`;
    });
  return result;
}

function neighborhoods(input) {
  let result = "";
  let hoods = input
    .shift()
    .split(", ")
    .reduce((acc, line) => {
      acc[line] = {
        count: 0,
        inhabitants: [],
      };
      return acc;
    }, {});
  input.map((el) => {
    let [loc, name] = el.split(" - ");
    if (hoods.hasOwnProperty(loc)) {
      hoods[loc].count += 1;
      hoods[loc].inhabitants.push(name);
    }
  });
  Object.entries(hoods)
    .sort((a, b) => b[1].count - a[1].count)
    .forEach((el) => {
      result += `${el[0]}: ${el[1].count}\n`;
      if (el[1].inhabitants.length !== 0) {
        el[1].inhabitants.forEach((per) => (result += `--${per}\n`));
      }
    });
  return result;
}
console.log(
  neighborhoods([
    "Abbey Street, Herald Street, Bright Mews",
    "Bright Mews - Garry",
    "Bright Mews - Andrea",
    "Invalid Street - Tommy",
    "Abbey Street - Billy",
  ])
);
//asd test
