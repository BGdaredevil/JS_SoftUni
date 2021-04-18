let manager = solution();

function solution() {
  let store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  let recipes = {
    apple(amount) {
      amount = Number(amount);
      let single = {
        protein: 0,
        carbohydrate: 1,
        fat: 0,
        flavour: 2,
      };
      return {
        protein: single.protein * amount,
        carbohydrate: single.carbohydrate * amount,
        fat: single.fat * amount,
        flavour: single.flavour * amount,
      };
    },
    lemonade(amount) {
      amount = Number(amount);
      let single = {
        protein: 0,
        carbohydrate: 10,
        fat: 0,
        flavour: 20,
      };
      return {
        protein: single.protein * amount,
        carbohydrate: single.carbohydrate * amount,
        fat: single.fat * amount,
        flavour: single.flavour * amount,
      };
    },
    burger(amount) {
      amount = Number(amount);
      let single = {
        protein: 0,
        carbohydrate: 5,
        fat: 7,
        flavour: 3,
      };
      return {
        protein: single.protein * amount,
        carbohydrate: single.carbohydrate * amount,
        fat: single.fat * amount,
        flavour: single.flavour * amount,
      };
    },
    eggs(amount) {
      amount = Number(amount);
      let single = {
        protein: 5,
        carbohydrate: 0,
        fat: 1,
        flavour: 1,
      };
      return {
        protein: single.protein * amount,
        carbohydrate: single.carbohydrate * amount,
        fat: single.fat * amount,
        flavour: single.flavour * amount,
      };
    },
    turkey(amount) {
      amount = Number(amount);
      let single = {
        protein: 10,
        carbohydrate: 10,
        fat: 10,
        flavour: 10,
      };
      return {
        protein: single.protein * amount,
        carbohydrate: single.carbohydrate * amount,
        fat: single.fat * amount,
        flavour: single.flavour * amount,
      };
    },
  };
  let instructionSet = {
    restock(microElement, qty) {
      store[microElement] += Number(qty);
      return `Success`;
    },
    prepare(meal, qty) {
      qty = Number(qty);
      let neededItems = Object.entries(recipes[meal](qty));
      let currentStore = Object.entries(store);

      for (let i = 0; i < neededItems.length; i++) {
        const [neededItemName, neededItemQty] = neededItems[i];
        const [currItem, currdItemQty] = currentStore[i];
        if (neededItemQty > currdItemQty) {
          return `Error: not enough ${neededItemName} in stock`;
        }
      }

      store.protein -= neededItems[0][1];
      store.carbohydrate -= neededItems[1][1];
      store.fat -= neededItems[2][1];
      store.flavour -= neededItems[3][1];
      return "Success";
    },
    report() {
      return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
    },
  };
  let master = (str) => {
    let [instr, ...rest] = str.split(" ");
    return instructionSet[instr](...rest);
  };
  return master;
}

console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); // Success

console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock protein 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("report")); // Success
