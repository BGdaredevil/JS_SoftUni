class Bank {
  constructor(name) {
    this.bankName = name;
    this.allCustomers = [];
  }

  set bankName(str) {
    this._bankName = str;
  }

  newCustomer(person) {
    if (this.allCustomers.some((c) => c.personalId === person.personalId)) {
      throw new Error(
        `${person.firstName} ${person.lastName} is already our customer!`
      );
    }
    person.totalMoney = 0;
    person.transactions = [];

    this.allCustomers.push(person);
    return person;
  }

  depositMoney(id, qty) {
    if (!this.allCustomers.some((c) => c.personalId === id)) {
      throw new Error("We have no customer with this ID!");
    }

    let person = this.allCustomers.find((c) => c.personalId === id);

    person.totalMoney += qty;
    person.transactions.push(
      `${person.transactions.length + 1}. ${person.firstName} ${
        person.lastName
      } made deposit of ${qty}$!`
    );
    return `${person.totalMoney}$`;
  }

  withdrawMoney(id, qty) {
    if (!this.allCustomers.some((c) => c.personalId === id)) {
      throw new Error("We have no customer with this ID!");
    }

    let person = this.allCustomers.find((c) => c.personalId === id);

    if (person.totalMoney < qty) {
      throw new Error(
        `${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`
      );
    }

    person.totalMoney -= qty;
    person.transactions.push(
      `${person.transactions.length + 1}. ${person.firstName} ${
        person.lastName
      } withdrew ${qty}$!`
    );
    return `${person.totalMoney}$`;
  }

  customerInfo(id) {
    if (!this.allCustomers.some((c) => c.personalId === id)) {
      throw new Error("We have no customer with this ID!");
    }

    let person = this.allCustomers.find((c) => c.personalId === id);

    let row = [
      `Bank name: ${this._bankName}`,
      `Customer name: ${person.firstName} ${person.lastName}`,
      `Customer ID: ${person.personalId}`,
      `Total Money: ${person.totalMoney}$`,
    ];

    if (person.transactions.length > 0) {
      row.push("Transactions:");
      person.transactions.reverse().reduce((a, e) => {
        a.push(e);
        return a;
      }, row);
    }

    return row.join("\n");
  }
}

//zero test 1

let name = "SoftUni Bank";
let bank = new Bank(name);

let customer1 = bank.newCustomer({
  firstName: "Svetlin",
  lastName: "Nakov",
  personalId: 1111111,
});
console.log(customer1.firstName); //.to.be.equal('Svetlin');

let customer2 = bank.newCustomer({
  firstName: "Mihaela",
  lastName: "Mileva",
  personalId: 3333333,
});
console.log(customer2.lastName); //.to.be.equal('Mileva');
console.log(customer2.personalId); //.to.be.equal(3333333);

let totalMoney1 = bank.depositMoney(1111111, 250);
console.log(totalMoney1); //.to.be.equal('250$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney2 = bank.depositMoney(1111111, 250);
console.log(totalMoney2); //.to.be.equal('500$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney3 = bank.depositMoney(3333333, 555);
console.log(totalMoney3); //.to.be.equal('555$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney4 = bank.withdrawMoney(1111111, 125);
console.log(totalMoney4); //.to.equal('375$', 'Function withdrawMoney returns incorrect totalMoney');

let output = bank.customerInfo(1111111);
let expectedOutput = `Bank name: SoftUni Bank
Customer name: Svetlin Nakov
Customer ID: 1111111
Total Money: 375$
Transactions:
3. Svetlin Nakov withdrew 125$!
2. Svetlin Nakov made deposit of 250$!
1. Svetlin Nakov made deposit of 250$!`;
console.log(output);
