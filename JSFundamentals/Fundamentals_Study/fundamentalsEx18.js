function classLaptop() {
  class Laptop {
    constructor(info, quality) {
      this.info = info;
      this.quality = quality;
      this.isOn = false;
    }

    turnOn() {
      this.isOn = true;
      this.quality -= 1;
    }

    turnOff() {
      this.isOn = false;
      this.quality -= 1;
    }

    showInfo() {
      return JSON.stringify(this.info);
    }

    get price() {
      let result = 800 - this.info.age * 2 + this.quality * 0.5;
      return result;
    }
  }

  let info = { producer: "Dell", age: 2, brand: "XPS" };
  let laptop = new Laptop(info, 10);
  laptop.turnOn();
  console.log(laptop.showInfo());
  laptop.turnOff();
  console.log(laptop.quality);
  laptop.turnOn();
  console.log(laptop.isOn);
  console.log(laptop.price);
}

function flightSchedule(input) {
  class Flight {
    constructor(code, dest) {
      this.code = code;
      this.Destination = dest;
      this.Status = "Ready to fly";
    }

    setStatus(newStatus) {
      this.Status = newStatus;
    }
  }
  let flights = [];
  let index = 0;
  let inTheAir = input[index++];
  let newStatus = input[index++];
  let filterStatus = input[index++];

  for (let line of inTheAir) {
    let code = line.slice(0, 6).trim();
    let dest = line.split(" ");
    dest.shift();
    flights.push(new Flight(code, dest.join(" ")));
  }

  for (let line of newStatus) {
    let info = line.split(" ");
    for (let Flight of flights) {
      if (Flight.code === info[0]) {
        Flight.setStatus(info[1]);
      }
    }
  }

  for (const Flight of flights) {
    let row = "";
    if (Flight.Status === filterStatus[0]) {
      row += `{ Destination: '${Flight.Destination}', Status: '${Flight.Status}' }`;
      console.log(row);
    }
  }
}

function school(input) {
  let students = {};
  for (let line of input) {
    let studentInfo = [];
    let info = line.split(", ");
    for (let i = 0; i < info.length; i++) {
      let element = info[i].split(": ");
      studentInfo.push(element[1]);
    }
    let [name, grade, average] = [
      studentInfo[0],
      Number(studentInfo[1]),
      Number(studentInfo[2]),
    ];
    if (Number(studentInfo[2]) >= 3) {
      grade += 1;
      if (!students.hasOwnProperty(grade)) {
        students[grade] = [];
      }
      students[grade].push([name, average]);
    }
  }

  Object.entries(students).forEach((grade) => {
    let classAverage = 0;
    let studentList = [];
    grade[1].forEach((student) => {
      studentList.push(student[0]);
      classAverage += student[1];
    });
    classAverage /= studentList.length;
    console.log(`${grade[0]} Grade`);
    console.log(`List of students: ${studentList.join(", ")}`);
    console.log(
      `Average annual grade from last year: ${classAverage.toFixed(2)}`
    );
    console.log("");
  });
}

function browser() {
  let index = 0;
  let input = arguments;
  let currentBrowserState = input[index++];
  let procedures = input[index++];

  procedures.forEach((procedure) => {
    procedure = procedure.split(" ");
    let keyWord = procedure.shift();
    let remaining = procedure.join(" ");
    procedure.unshift(keyWord);

    switch (keyWord) {
      case "Open":
        currentBrowserState["Open Tabs"].push(remaining);
        currentBrowserState["Browser Logs"].push(procedure.join(" "));
        break;
      case "Close":
        currentBrowserState["Open Tabs"].forEach((tab) => {
          if (tab === remaining) {
            currentBrowserState["Open Tabs"].splice(
              currentBrowserState["Open Tabs"].indexOf(remaining),
              1
            );
            currentBrowserState["Recently Closed"].push(remaining);
            currentBrowserState["Browser Logs"].push(procedure.join(" "));
            return;
          }
        });
        break;
      case "Clear":
        currentBrowserState["Open Tabs"] = [];
        currentBrowserState["Recently Closed"] = [];
        currentBrowserState["Browser Logs"] = [];
        break;
    }
  });

  console.log(`${currentBrowserState["Browser Name"]}`);
  console.log(`Open Tabs: ${currentBrowserState["Open Tabs"].join(", ")}`);
  console.log(
    `Recently Closed: ${currentBrowserState["Recently Closed"].join(", ")}`
  );
  console.log(
    `Browser Logs: ${currentBrowserState["Browser Logs"].join(", ")}`
  );
}

function sequence(input) {
  let result = [];
  let printer = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      let row = "[";
      row += item.join(", ");
      row += "]";
      console.log(row);
    }
  };

  let comparator = (arr, test) => {
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item.length === test.length) {
        if (
          item.every((el, ind) => {
            if (el !== test[ind]) {
              return false;
            } else {
              return true;
            }
          })
        ) {
          return true;
        }
      }
    }
    return false;
  };
  for (let line of input) {
    let current = JSON.parse(line).sort((a, b) => b - a);
    if (!comparator(result, current)) {
      result.push(current);
    }
  }
  result.sort((a, b) => a.length - b.length);
  printer(result);
}
sequence([
  "[11, 0, 0, 0, 0, 0, 0]",
  "[0, 11, 0, 0, 0, 0, 0]",
  "[0, 0, 1, 0, 0, 0, 0]",
  "[0, 0, 0, 1, 0, 0, 0]",
  "[0, 0, 0, 0, 11, 0, 0]",
  "[0, 0, 0, 0, 0, 22, 0]",
  "[0, 0, 0, 0, 0, 22, 0]",
  "[0, 0, 0, 0, 0, 0, 0]",
]);
