function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    let txt = JSON.parse(document.querySelector("textarea").value);
    let bestR;

    let list = txt.reduce((acc, el) => {
      let [rName, rest] = el.split(" - ");
      rest = rest.split(", ");

      let currRest = rest.reduce(
        (add, elem) => {
          let [eName, salary] = elem.split(" ");
          if (add.best < Number(salary)) {
            add.best = Number(salary);
          }
          add.workers[eName] = Number(salary);
          add.sum += Number(salary);
          add.emp++;
          return add;
        },
        {
          sum: 0,
          average: 0,
          emp: 0,
          workers: {},
          best: 0,
        }
      );
      currRest.rName = rName;

      if (acc.hasOwnProperty(rName)) {
        acc[rName].workers = Object.assign(
          acc[rName].workers,
          currRest.workers
        );
        acc[rName].best =
          acc[rName].best > currRest.best ? acc[rName].best : currRest.best;
        acc[rName].emp += Object.entries(currRest.workers).length;
        acc[rName].sum += Object.values(currRest.workers).reduce(
          (a, e) => (a += e),
          0
        );
      } else {
        acc[rName] = currRest;
      }
      acc[rName].average = acc[rName].sum / acc[rName].emp;
      return acc;
    }, {});

    list = Object.entries(list).sort((a, b) => b[1].average - a[1].average);
    //console.log(list);
    bestR = list.shift()[1];
    //console.log(bestR);
    let lala = {
      restaurant: `Name: ${bestR.rName} Average Salary: ${bestR.average.toFixed(
        2
      )} Best Salary: ${bestR.best.toFixed(2)}`,
      workers: Object.entries(bestR.workers)
        .sort((a, b) => b[1] - a[1])
        .reduce((acc, el) => {
          acc.push(`Name: ${el[0]} With Salary: ${el[1]}`);
          return acc;
        }, [])
        .join(" "),
    };

    let theBest = document.querySelector("#outputs #bestRestaurant p");
    let theBestEmp = document.querySelector("#outputs #workers p");
    theBest.textContent = lala.restaurant;
    theBestEmp.textContent = lala.workers;
    //console.log(theBest)
  }
}
