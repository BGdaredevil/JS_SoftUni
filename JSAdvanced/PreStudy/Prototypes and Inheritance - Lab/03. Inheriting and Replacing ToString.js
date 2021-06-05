function toStringExtension() {
  class Person {
    constructor(name, mail) {
      this.name = name;
      this.email = mail;
    }
    toString() {
      if (Teacher[Symbol.hasInstance](this)) {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
      } else if (Student[Symbol.hasInstance](this)) {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
      } else if (Person[Symbol.hasInstance](this)) {
        return `Person (name: ${this.name}, email: ${this.email})`;
      }
    }
  }

  class Teacher extends Person {
    constructor(name, mail, subj) {
      super(name, mail);
      this.subject = subj;
    }
  }

  class Student extends Person {
    constructor(name, mail, course) {
      super(name, mail);
      this.course = course;
    }
  }
  return {
    Person,
    Teacher,
    Student,
  };
}
let info = toStringExtension();
let a = new info.Person("pers", "pers@pers.bg");
let A = new info.Person("pers", "pers@pers.bg");
let b = new info.Student("stud", "stud@uni.bg", "JSadv");
let B = new info.Student("stud", "stud@uni.bg", "JSadv");
let c = new info.Teacher("teach", "teach@uni.bg", "JS-mentor");
let C = new info.Teacher("teach", "teach@uni.bg", "JS-mentor");
console.log(a.toString());
console.log(A.toString());
console.log(b.toString());
console.log(B.toString());
console.log(c.toString());
console.log(C.toString());
