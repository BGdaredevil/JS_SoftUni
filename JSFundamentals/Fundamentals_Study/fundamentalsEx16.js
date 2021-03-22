function personInfo() {
  let index = 0;
  let input = arguments;
  let result = {
    firstName: input[index++],
    lastName: input[index++],
    age: input[index++],
  };
  console.log(result);
}

function city(input) {
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      const element = input[key];
      console.log(`${key} -> ${element}`);
    }
  }
}

function jsonToObject(input) {
  let result = JSON.parse(input);
  for (const key in result) {
    if (result.hasOwnProperty(key)) {
      const element = result[key];
      console.log(`${key}: ${element}`);
    }
  }
}

function objectToJson() {
  input = arguments;
  let index = 0;
  let medium = {
    name: input[index++],
    lastName: input[index++],
    hairColor: input[index++],
  };

  let result = JSON.stringify(medium);
  console.log(result);
}

function cats(input) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  for (let i = 0; i < input.length; i++) {
    let catInfo = input[i].split(" ");
    let name, age;
    [name, age] = [catInfo[0], catInfo[1]];
    cats.push(new Cat(name, age));
  }

  for (const Cat of cats) {
    Cat.meow();
  }
}

function songs(input) {
  let listLength = Number(input.shift());
  let songs = [];
  let filter = input.pop();
  class song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  for (let i = 0; i < listLength; i++) {
    let songInfo = input[i].split("_");
    let typeList, name, time;
    [typeList, name, time] = [songInfo[0], songInfo[1], songInfo[2]];
    songs.push(new song(typeList, name, time));
  }

  if (filter === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.typeList === filter);
    filtered.forEach((i) => console.log(i.name));
  }
}
