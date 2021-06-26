function solve() {
  let [
    addTaskSection,
    openSection,
    inProgressSection,
    completeSection,
  ] = document.querySelectorAll("div.wrapper > section");
  let taskNameElement = addTaskSection.querySelector("#task");
  let taskContentElement = addTaskSection.querySelector("#description");
  let taskDueDateElement = addTaskSection.querySelector("#date");

  let addBtn = addTaskSection.querySelector("#add");
  addBtn.addEventListener("click", addBtnOnClick);

  function addBtnOnClick(ev) {
    ev.preventDefault();
    if (
      taskNameElement.value === "" ||
      taskContentElement.value === "" ||
      taskDueDateElement.value === ""
    ) {
      return;
    }

    let article = e("article", undefined, [
      e("h3", undefined, [taskNameElement.value]),
      e("p", undefined, [`Description: ${taskContentElement.value}`]),
      e("p", undefined, [`Due Date: ${taskDueDateElement.value}`]),
      e("div", "flex", [
        e("button", "green", ["Start"], ["click", startBtnOnClick]),
        e("button", "red", ["Delete"], ["click", deleteBtnOnClick]),
      ]),
    ]);
    openSection.querySelectorAll("div")[1].appendChild(article);
  }

  function startBtnOnClick(ev) {
    let currArt = ev.target.parentElement.parentElement;
    let btnDiv = ev.target.parentElement;
    ev.target.remove();
    btnDiv.appendChild(
      e("button", "orange", ["Finish"], ["click", finishBtnOnClick])
    );
    inProgressSection.querySelectorAll("div")[1].appendChild(currArt);
  }

  function finishBtnOnClick(ev) {
    let currArt = ev.target.parentElement.parentElement;
    ev.target.parentElement.remove();
    completeSection.querySelectorAll("div")[1].appendChild(currArt);
  }

  function deleteBtnOnClick(ev) {
    ev.target.parentElement.parentElement.remove();
  }

  function e(tag, classStr, content, listner) {
    let result = document.createElement(tag);
    if (classStr != undefined) {
      result.classList.add(classStr);
    }
    content.forEach((c) => {
      if (typeof c === "string") {
        result.textContent = c;
      } else {
        result.appendChild(c);
      }
    });
    if (listner != undefined) {
      result.addEventListener(listner[0], listner[1]);
    }
    return result;
  }
}
