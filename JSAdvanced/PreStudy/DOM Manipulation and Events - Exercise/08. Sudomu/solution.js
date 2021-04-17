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
          let col = index % resultLength;
          if (Object.keys(acc).length === 0) {
            for (let i = 0; i < original.length; i++) {
              if (i / resultLength === 1) {
                break;
              }
              acc[`${i}v`] = [];
            }
          }
          acc[`${col}v`].push(el);
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
      let answerValues = Object.values(splitter(arrValues, 3)).map((el) => {
        return checker(el, 1, 3);
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
