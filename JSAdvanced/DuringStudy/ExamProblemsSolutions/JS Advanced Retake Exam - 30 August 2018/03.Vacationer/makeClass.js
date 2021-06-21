class Vacationer {
  constructor(nameObj, cardObj) {
    this.fullName = nameObj;
    this.idNumber = this.generateIDNumber(nameObj);
    this.creditCard =
      cardObj === undefined
        ? {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111,
          }
        : this.addCreditCardInfo(cardObj);
    this.wishList = [];
  }

  set fullName(arr) {
    if (arr.length != 3) {
      throw new Error(
        "Name must include first name, middle name and last name"
      );
    }

    let regEks = /^[A-Z]{1}[a-z]+$/;
    if (!arr.every((n) => regEks.test(n))) {
      throw new Error("Invalid full name");
    }

    let [first, second, third] = arr;
    this._fullName = {
      firstName: first,
      middleName: second,
      lastName: third,
    };
  }

  get fullName() {
    return this._fullName;
  }

  generateIDNumber() {
    let temp = this.fullName;
    let id = `${
      231 * temp.firstName.charCodeAt(0) + 139 * temp.middleName.length
    }${
      ["a", "e", "o", "i", "u"].includes(
        temp.lastName[temp.lastName.length - 1]
      )
        ? 8
        : 7
    }`;
    return id;
  }

  addCreditCardInfo(arr) {
    if (arr.length < 3) {
      throw new Error("Missing credit card information");
    }
    let [cardNumber, expirationDate, securityNumber] = arr;
    if (typeof cardNumber != "number" || typeof securityNumber != "number") {
      throw new Error("Invalid credit card details");
    }

    this.creditCard = {
      cardNumber,
      expirationDate,
      securityNumber,
    };

    return {
      cardNumber,
      expirationDate,
      securityNumber,
    };
  }

  addDestinationToWishList(str) {
    if (this.wishList.includes(str)) {
      throw new Error("Destination already exists in wishlist");
    }

    this.wishList.push(str);
    this.wishList.sort((a, b) => a.length - b.length);
  }

  getVacationerInfo() {
    let row = [
      `Name: ${this._fullName.firstName} ${this._fullName.middleName} ${this._fullName.lastName}`,
      `ID Number: ${this.idNumber}`,
      `Wishlist:`,
      `${this.wishList.length === 0 ? "empty" : `${this.wishList.join(", ")}`}`,
      `Credit Card:`,
      `Card Number: ${this.creditCard.cardNumber}`,
      `Expiration Date: ${this.creditCard.expirationDate}`,
      `Security Number: ${this.creditCard.securityNumber}`,
    ];
    return row.join("\n");
  }
}

let classInstance1;
classInstance1 = new Vacationer(
  ["Tania", "Ivanova", "Zhivkova"],
  [123456789, "10/01/2018", 777]
);
//   "Instance creation failed with valid parameters"

console.log(classInstance1.getVacationerInfo());
//   "Name: Tania Ivanova Zhivkova
// ID Number: 203778
// Wishlist:
// empty
// Credit Card:
// Card Number: 123456789
// Expiration Date: 10/01/2018
// Security Number: 777",
//   "getVacationerInfo returns an incorrect message"

let classInstance2;
classInstance2 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
//   "Instance creation failed with valid parameters"

classInstance2.addDestinationToWishList("Spain");
classInstance2.addDestinationToWishList("Germany");

console.log(classInstance2.getVacationerInfo());
//   "Name: Vania Ivanova Zhivkova
// ID Number: 208398
// Wishlist:
// Spain, Germany
// Credit Card:
// Card Number: 1111
// Expiration Date:
// Security Number: 111",
//   "getVacationerInfo returns an incorrect message"

// Unexpected error: getVacationerInfo returns an incorrect message: expected 'Name: Vania Ivanova Zhivkova\nID Number: 208398\nWishlist:\nSpain, Germany\nCredit Card:\nCard Number: 111\nExpiration Date: \nSecurity Number: 111' to include 'Name: Vania Ivanova Zhivkova\nID Number: 208398\nWishlist:\nSpain, Germany\nCredit Card:\nCard Number: 1111\nExpiration Date: \nSecurity Number: 111'
