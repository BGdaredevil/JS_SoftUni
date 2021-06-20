class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    if (typeof customer != "object") {
      throw new Error("custpmer is nor an object");
    }
    if (
      this._allCustomers.some(
        (cus) =>
          cus.firstName === customer.firstName &&
          cus.lastName === customer.lastName &&
          cus.personalId === customer.personalId
      )
    ) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }
    let person = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      personalId: customer.personalId,
      totalMoney: 0,
      transactions: [],
    };

    this._allCustomers.push(person);
    return person;
  }

  depositMoney(pId, amount) {
    let person = this._validate(pId, amount);
    person.totalMoney += amount;
    person.transactions.push({
      num: person.transactions.length + 1,
      depost: true,
      amount,
    });
    return `${person.totalMoney}$`;
  }

  withdrawMoney(pId, amount) {
    let person = this._validate(pId, amount);
    if (person.totalMoney < amount) {
      throw new Error(
        `${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`
      );
    }

    person.totalMoney -= amount;
    person.transactions.push({
      num: person.transactions.length + 1,
      depost: false,
      amount,
    });
    return `${person.totalMoney}$`;
  }

  customerInfo(pId) {
    let person = this._validate(pId, 0);
    let rows = [
      `Bank name: ${this._bankName}`,
      `Customer name: ${person.firstName} ${person.lastName}`,
      `Customer ID: ${person.personalId}`,
      `Total Money: ${person.totalMoney}$`,
      `Transactions:`,
      ...person.transactions
        .sort((a, b) => b.num - a.num)
        .reduce((acc, tr) => {
          acc.push(
            `${tr.num}. ${person.firstName} ${person.lastName} ${
              tr.depost ? "made deposit of" : "withdrew"
            } ${tr.amount}$!`
          );

          return acc;
        }, []),
    ];
    return rows.join("\n");
  }

  _validate(pId, amount) {
    if (isNaN(pId)) {
      throw new Error("ID is not a number");
    }
    if (isNaN(amount)) {
      throw new Error("Amount is not a number");
    }
    let person = this._allCustomers.filter((e) => e.personalId === pId);
    if (person.length === 0) {
      throw new Error("We have no customer with this ID!");
    }
    return person[0];
  }

  // set bankName(str) {
  //   if (typeof str === "string") {
  //     this._bankName = str;
  //   } else {
  //     throw new Error("Name is not string");
  //   }
  // }

  // get bankName() {
  //   return this._bankName;
  // }

  set allCustomers(ref) {
    if (Array.isArray(ref)) {
      this._allCustomers = ref;
    } else {
      throw new Error("Not an Array");
    }
  }

  get allCustomers() {
    return this._allCustomers;
  }
}
