function solve() {
  class Employee {
    constructor(name, age, salary = 0) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
    work() {
      console.log(this.tasks[0]);
      this.tasks.push(this.tasks.shift());
    }
    collectSalary() {
      let add = this.dividend !== undefined ? this.dividend : 0;

      console.log(
        `${this.name} received ${this.salary + this.bonus + add} this month.`
      );
    }
  }
  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.bonus = 0;
      this.tasks = [`${this.name} is working on a simple task.`];
    }
  }
  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.bonus = 0;
      this.tasks = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`,
      ];
    }
  }
  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.bonus = 0;
      this.dividend = 0;
      this.tasks = [
        `${this.name} scheduled a meeting.`,
        `${this.name} is preparing a quarterly report.`,
      ];
    }
  }
  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}

const list = solve();
const junior = new list.Junior("Ivan", 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new list.Senior("Alex", 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new list.Manager("Tom", 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
