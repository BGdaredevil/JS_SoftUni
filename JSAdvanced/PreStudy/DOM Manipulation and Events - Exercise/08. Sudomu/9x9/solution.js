function solve() {
  let output = document.querySelector("div#check p");
  let table = document.querySelector("div#exercise table");
  let [checkBtn, clearBtn] = Array.from(
    document.querySelectorAll("tfoot button")
  );
  checkBtn.addEventListener("click", (e) => {
    let cellTexts = Array.from(document.querySelectorAll("tbody input")).map(
      (el) => (el = Number(el.value))
    );
    let result = (arrValues) => {
      let splitter = (arr, resultLength) => {
        let out = arr.reduce((acc, el, index, original) => {
          //columns
          let col = index % resultLength;
          if (Object.keys(acc).length === 0) {
            for (let i = 0; i < original.length; i++) {
              if (i / resultLength === 1) {
                break;
              }
              acc[`${i}v`] = [];
              acc[`${i}x9`] = [];
            }
          }
          acc[`${col}v`].push(el);
          //rows
          let row = Math.floor(index / resultLength);
          let horizontal = original.slice(
            row * resultLength,
            row * resultLength + resultLength
          );
          if (!acc.hasOwnProperty(row)) {
            acc[row] = horizontal;
          }
          return acc;
        }, {});
        Object.values(out)
          .slice(0, 9)
          .reduce((acc, arr, loc) => {
            let row = Math.floor(loc / 3);
            arr.map((el, ind) => {
              let col = Math.floor(ind / 3);
              let gridLoc = row * 3 + col;
              acc[`${gridLoc}x9`].push(el);
            });
            return acc;
          }, out);
        return out;
      };
      let checker = (arr, min, max) => {
        for (let i = 0; i < arr.length; i++) {
          let el = arr[i];
          let coppy = arr.slice(0, i);
          coppy.push(...arr.slice(i + 1, arr.length));
          if (coppy.includes(el) || coppy.includes(NaN)) {
            return false;
          }
          if (el < min || el > max || el % 1 != 0) {
            return false;
          }
        }
        return true;
      };
      let answerValues = Object.values(splitter(arrValues, 9)).map((el) => {
        return checker(el, 1, 9);
      });
      return !answerValues.includes(false);
    };
    if (result(cellTexts)) {
      output.textContent = "You solve it! Congratulations!";
      output.style.color = "green";
      table.style.border = "2px solid green";
    } else {
      output.textContent = "NOP! You are not done yet...";
      table.style;
      output.style.color = "red";
      table.style.border = "2px solid red";
    }
  });
  clearBtn.addEventListener("click", () => {
    Array.from(document.querySelectorAll("tbody input")).map(
      (el) => (el.value = "")
    );
    output.textContent = "";
    table.style.border = "";
  });
}
