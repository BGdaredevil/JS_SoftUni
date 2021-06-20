function solve() {
  let inputs = document.querySelectorAll("form > input");
  let descriptElement = document.querySelector("form > textarea");
  let [taskElement, dueDateElement] = inputs;
  let addBtn = document.querySelector("#add");
  addBtn.addEventListener("click", addBtnOnClick);

  let [
    addTaskDiv,
    openDiv,
    inProgressDiv,
    completeDiv,
  ] = document.querySelectorAll("section > div:nth-of-type(2)");

  //console.log(divElements);

  function addBtnOnClick(e) {
    e.preventDefault();
    let taskText = taskElement.value;
    let descriptionText = descriptElement.value;
    let dueDateText = dueDateElement.value;

    if (valid(taskText, descriptionText, dueDateText)) {
      taskElement.value = "";
      descriptElement.value = "";
      dueDateElement.value = "";
      let startBtn = el("button", ["green"], "Start");
      startBtn.addEventListener("click", btnOnClick);
      let delBtn = el("button", ["red"], "Delete");
      delBtn.addEventListener("click", btnOnClick);

      let art = el(
        "article",
        undefined,
        el("h3", undefined, taskText),
        el("p", undefined, `Description: ${descriptionText}`),
        el("p", undefined, `Due Date: ${dueDateText}`),
        el("div", ["flex"], startBtn, delBtn)
      );
      openDiv.appendChild(art);
    }
  }

  function btnOnClick(e) {
    let btnTypes = {
      Start: function () {
        inProgressDiv.appendChild(e.target.parentElement.parentElement);
        let fBtn = el("button", ["orange"], "Finish");
        fBtn.addEventListener("click", btnOnClick);
        e.target.parentElement.appendChild(fBtn);
        e.target.remove();
      },
      Delete: function () {
        e.target.parentElement.parentElement.remove();
      },
      Finish: function () {
        completeDiv.appendChild(e.target.parentElement.parentElement);
        e.target.parentElement.remove();
      },
    };
    btnTypes[e.target.innerText]();
  }

  function valid(...str) {
    if (str.every((s) => typeof s === "string" && s.length > 0)) {
      return true;
    }
    return false;
  }

  function el(tag, classNamesArr, ...content) {
    let result = document.createElement(tag);
    if (classNamesArr !== undefined) {
      classNamesArr.forEach((c) => {
        result.classList.add(c);
      });
    }
    content.forEach((cont) => {
      if (typeof cont === "string") {
        result.textContent = cont;
      } else {
        result.appendChild(cont);
      }
    });
    return result;
  }
}
