function solve() {
  let createBtn = document.querySelector("aside button");
  createBtn.addEventListener("click", postArticle);

  function postArticle(e) {
    e.preventDefault();
    let creator = document.getElementById("creator").value;
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let content = document.getElementById("content").value;
    let posts = document.querySelector("main > section");

    let delBtn = el("button", "Delete");
    delBtn.classList.add("btn");
    delBtn.classList.add("delete");
    delBtn.addEventListener("click", deleteBtn);

    let arcBtn = el("button", "Archive");
    arcBtn.classList.add("btn");
    arcBtn.classList.add("archive");
    arcBtn.addEventListener("click", archiveBtn);

    let divEl = document.createElement("div");
    divEl.classList.add("buttons");
    divEl.appendChild(delBtn);
    divEl.appendChild(arcBtn);

    let article = el(
      "article",
      el("h1", title),
      el("p", "Category: ", el("strong", category)),
      el("p", "Creator: ", el("strong", creator)),
      el("p", content),
      divEl
    );
    posts.appendChild(article);
  }

  function deleteBtn(e) {
    e.target.parentNode.parentNode.remove();
  }

  function archiveBtn(e) {
    let titleName = e.target.parentNode.parentNode.querySelector("h1")
      .innerText;
    let arcSectionOl = document.querySelector("section.archive-section > ol");
    arcSectionOl.appendChild(el("li", titleName));

    [].slice
      .call(arcSectionOl.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((val) => {
        arcSectionOl.appendChild(val);
      });

    e.target.parentNode.parentNode.remove();
  }

  function el(tag, ...strContent) {
    //makes elements
    let element = document.createElement(tag);
    strContent.forEach((e) => {
      if (typeof e === "string") {
        element.textContent = e;
      } else {
        element.appendChild(e);
      }
    });
    return element;
  }
}
