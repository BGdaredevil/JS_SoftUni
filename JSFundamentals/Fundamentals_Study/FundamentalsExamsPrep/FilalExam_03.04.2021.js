function problemOne(input) {
  let userName = input.shift();
  let row = "";
  let tokens = {
    Case(str, toCase) {
      switch (toCase) {
        case "lower":
          str = str.toLowerCase();
          row += `${str}\n`;
          break;
        case "upper":
          str = str.toUpperCase();
          row += `${str}\n`;
          break;
      }
      return str;
    },
    Reverse(str, start, end) {
      start = Number(start);
      end = Number(end);
      if (start >= 0 && end < str.length) {
        row += `${str
          .substring(start, end + 1)
          .split("")
          .reverse()
          .join("")}\n`;
      }
      return str;
    },
    Cut(str, toRemove) {
      if (str.includes(toRemove)) {
        str = str.replace(toRemove, "");
        row += `${str}\n`;
      } else {
        row += `The word ${str} doesn't contain ${toRemove}.\n`;
      }
      return str;
    },
    Replace(str, char) {
      while (str.includes(char)) {
        str = str.replace(char, "*");
      }
      row += `${str}\n`;
      return str;
    },
    Check(str, char) {
      if (str.includes(char)) {
        row += `Valid\n`;
      } else {
        row += `Your username must contain ${char}.\n`;
      }
      return str;
    },
  };
  let line = input.shift();
  while (line !== "Sign up") {
    let [token, ...rest] = line.split(" ");
    userName = tokens[token](userName, ...rest);
    line = input.shift();
  }
  return row;
}

function problemTwo(input) {
  let sucessCount = 0;
  let count = Number(input.shift());
  let test = /(U\$)(?<name>[A-Z][a-z]{2,})\1.{0,}(P@\$)(?<pass>[A-Za-z]{5,}\d+)\3/;
  let row = "";
  while (count > 0) {
    let line = input.shift();
    let result = test.exec(line);
    if (result) {
      row += `Registration was successful\nUsername: ${result.groups.name}, Password: ${result.groups.pass}\n`;
      sucessCount++;
    } else {
      row += `Invalid username or password\n`;
    }
    count--;
  }
  row += `Successful registrations: ${sucessCount}\n`;
  return row;
}

function problemThree(input) {
  let peterFB = {};
  let tokens = {
    "New follower"(user) {
      if (!peterFB.hasOwnProperty(user)) {
        peterFB[user] = { user, actions: 0 };
      }
    },
    Like(user, count) {
      tokens["New follower"](user);
      peterFB[user].actions += Number(count);
    },
    Comment(user) {
      tokens["New follower"](user);
      peterFB[user].actions++;
    },
    Blocked(user) {
      if (!peterFB.hasOwnProperty(user)) {
        console.log(`${user} doesn't exist.`);
      } else {
        delete peterFB[user];
      }
    },
  };
  let line = input.shift();
  while (line != "Log out") {
    let [token, ...rest] = line.split(": ");
    tokens[token](...rest);
    line = input.shift();
  }
  let FBResult = Object.values(peterFB).sort(
    (a, b) => b.actions - a.actions || a.user.localeCompare(b.user)
  );
  console.log(`${FBResult.length} followers`);
  FBResult.forEach((el) => {
    console.log(`${el.user}: ${el.actions}`);
  });
}

//go to 02:15:00

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.write = function (message) {
  console.log(`${this.firstName} wrote ${message}`);
};

function newOperator(constructor, ...params) {
  //allocate memory
  const result = Object.create(constructor.prototype);
  //execute constr. with params
  constructor.apply(result, params);
  //return ref
  return result;
}

const myPerson = newOperator(Person, "John", "Cena");
const otherPerson = newOperator(Person, "Jim", "Karry");

console.log(myPerson, otherPerson);

myPerson.write("Hello");
otherPerson.write("Wellcome");

console.log(myPerson.write === otherPerson.write);
