class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  set budget(num) {
    if (isNaN(num)) {
      throw new Error("Budget must be a number");
    }
    if (num < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this._budget = num;
  }
  get budget() {
    return this._budget;
  }

  shopping(productArr) {
    let [itemName, price] = productArr;

    if (this.budget < price) {
      throw new Error("Not enough money to buy this product");
    } else {
      this.budget -= price;
      this.products.push(itemName);
      return `You have successfully bought ${itemName}!`;
    }
  }

  recipes(obj) {
    // potentially there is an error here
    let item = obj.recipeName;
    let ingredients = obj.productsList;

    if (ingredients.every((ingr) => this.products.includes(ingr))) {
      this.dishes.push(obj);
      return `${item} has been successfully cooked!`;
    } else {
      throw new Error("We do not have this product");
    }
  }

  inviteGuests(name, dish) {
    // potentially there is a mistake here
    if (!this.dishes.some((d) => d.recipeName === dish)) {
      throw new Error("We do not have this dish");
    }
    if (this.guests.hasOwnProperty(name)) {
      throw new Error("This guest has already been invited");
    }
    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let result = [];

    Object.entries(this.guests).forEach(([name, dish]) => {
      let products = this.dishes.filter((el) => el.recipeName === dish);
      products = products[0].productsList.join(", ");
      result.push(`${name} will eat ${dish}, which consists of ${products}`);
    });

    return result.join("\n");
  }
}

// const ChristmasDinner = result;
let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);
dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});
dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");
let actual = dinner.showAttendance();

// `Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt`;

console.log(actual);
