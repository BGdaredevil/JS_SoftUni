class Restaurant {
  constructor(budget) {
    this.budgetMoney = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    let currResult = [];
    products.forEach((product) => {
      let [pName, pQty, pPrice] = product.split(" ");
      pQty = Number(pQty);
      pPrice = Number(pPrice);

      if (this.budgetMoney < pPrice) {
        this.history.push(
          `There was not enough money to load ${pQty} ${pName}`
        );
        currResult.push(`There was not enough money to load ${pQty} ${pName}`);
      } else {
        this.history.push(`Successfully loaded ${pQty} ${pName}`);
        currResult.push(`Successfully loaded ${pQty} ${pName}`);
        this.budgetMoney -= pPrice;
        if (this.stockProducts.hasOwnProperty(pName)) {
          this.stockProducts[pName] += pQty;
        } else {
          this.stockProducts[pName] = pQty;
        }
      }
    });
    return currResult.join("\n");
  }

  addToMenu(meal, ingredients, price) {
    if (this.menu.hasOwnProperty(meal)) {
      return `The ${meal} is already in the our menu, try something different.`;
    }

    this.menu[meal] = { products: ingredients, price };

    if (Object.entries(this.menu).length === 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    } else {
      return `Great idea! Now with the ${meal} we have ${
        Object.entries(this.menu).length
      } meals in the menu, other ideas?`;
    }
  }

  showTheMenu() {
    let menu = Object.entries(this.menu);
    if (menu.length === 0) {
      return `Our menu is not ready yet, please come later...`;
    }

    let row = [];
    menu.forEach((item) => {
      let [product, info] = item;

      row.push(`${product} - $ ${info.price}`);
    });
    return row.join("\n");
  }

  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    let mealIngredients = this.menu[meal].products.reduce((a, ingr) => {
      let [item, qty] = ingr.split(" ");
      qty = Number(qty);
      a.push({ item, qty });
      return a;
    }, []);

    if (
      mealIngredients.every((e) => this.stockProducts.hasOwnProperty(e.item))
    ) {
      if (mealIngredients.every((e) => this.stockProducts[e.item] >= e.qty)) {
        mealIngredients.forEach((x) => (this.stockProducts[x.item] -= x.qty));
        this.budgetMoney += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
      }
    }
    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
  }
}

// Testing makeTheOrder
let test = new Restaurant(1000);
console.log(
  test.loadProducts([
    "Yogurt 30 3",
    "Honey 50 4",
    "Strawberries 20 10",
    "Banana 5 1",
  ])
);
console.log(
  test.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(test.makeTheOrder("frozenYogurt"));
//"Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.");
