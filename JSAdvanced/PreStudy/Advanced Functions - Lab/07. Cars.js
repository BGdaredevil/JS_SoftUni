function solve(input) {
  let collection = {};
  let engine = {
    create(name, parent = null) {
      if (parent === null) {
        collection[name] = new Object(null);
        //console.log(collection[parent]);
      } else {
        collection[name] = Object.create(collection[parent]);
      }
    },
    set(who, key, value) {
      collection[who][key] = value;
    },
    print(who) {
      let temp = Object.entries(collection[who]).reduce((acc, el) => {
        acc.push(`${el[0]}:${el[1]}`);
        return acc;
      }, []);

      let test = Object.getPrototypeOf(collection[who]);

      while (!test.hasOwnProperty("hasOwnProperty")) {
        let temp2 = Object.entries(test).reduce((acc, el) => {
          acc.push(`${el[0]}:${el[1]}`);
          return acc;
        }, []);
        temp.push(...temp2);
        test = Object.getPrototypeOf(test);
      }

      console.log(temp.join(", "));
    },
  };

  input.map((el) => {
    let [oper, ...rest] = el.split(" ");
    if (oper === "create" && rest.length > 1) {
      let [obj, inh, parr] = rest;
      engine[oper](obj, parr);
    } else {
      engine[oper](...rest);
    }
  });
}
solve([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "set c2 newest FromC2",
  "set c1 newest22 FromC1",
  "create c3 inherit c2",
  "print c1",
  "print c2",
  "print c3",
]);
