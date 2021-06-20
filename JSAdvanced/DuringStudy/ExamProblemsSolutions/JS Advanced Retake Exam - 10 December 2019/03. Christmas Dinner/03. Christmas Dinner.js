class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  shopping(productArr) {
    let [item, price] = productArr;
    if (this._budget < price) {
      throw new Error("Not enough money to buy this product");
    }
    this.products.push(item);
    this._budget = this._budget - Number(price);
    return `You have successfully bought ${item}!`;
  }

  recipes(recipeObj) {
    let { recipeName, productsList } = recipeObj;
    // let recipeName = recipeObj.recipeName;
    // let productsList = recipeObj.productsList;

    if (productsList.every((item) => this.products.includes(item))) {
      this.dishes.push(recipeObj);
      return `${recipeName} has been successfully cooked!`;
    }

    throw new Error("We do not have this product");
  }

  inviteGuests(name, dish) {
    let item = this.dishes.find((d) => d.recipeName === dish);
    if (item === undefined) {
      throw new Error("We do not have this dish");
    }
    if (this.guests.hasOwnProperty(name)) {
      throw new Error("This guest has already been invited");
    }
    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let row = [];
    for (const guest in this.guests) {
      row.push(
        `${guest} will eat ${
          this.guests[guest]
        }, which consists of ${this.dishes
          .find((d) => d.recipeName === this.guests[guest])
          .productsList.join(", ")}`
      );
    }
    return row.join("\n");
  }

  set budget(num) {
    if (num < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this._budget = num;
  }

  get budget() {
    return this._budget;
  }
}

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

console.log(dinner.showAttendance());
