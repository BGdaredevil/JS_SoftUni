function personAndTeacher() {
  class Person {
    constructor(name, mail) {
      this.name = name;
      this.email = mail;
    }
  }

  class Teacher extends Person {
    constructor(name, mail, subj) {
      super(name, mail);
      this.subject = subj;
    }
  }
  return {
    Person,
    Teacher,
  };
}
