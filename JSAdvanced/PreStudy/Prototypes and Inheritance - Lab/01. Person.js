class Person {
  constructor(first, second) {
    this.firstName = first;
    this.lastName = second;
  }
  set firstName(str) {
    this._firstName = str;
  }
  get firstName() {
    return this._firstName;
  }
  set lastName(str) {
    this._lastName = str;
  }
  get lastName() {
    return this._lastName;
  }
  set fullName(str) {
    if (str.includes(" ")) {
      [this.firstName, this.lastName] = str.split(" ");
    }
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
