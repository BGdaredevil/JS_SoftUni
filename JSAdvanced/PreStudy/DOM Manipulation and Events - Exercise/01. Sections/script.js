function create(words) {
  let result = document.getElementById("content");
  words.forEach((statement) => {
    let div = document.createElement("div");
    let par = document.createElement("p");
    par.innerText = statement;
    par.setAttribute("style", "display:none");
    div.appendChild(par);
    div.addEventListener("click", showUp);
    result.appendChild(div);
  });
  function showUp(e) {
    //console.log(e.target.children);
    e.target.children[0].setAttribute("style", "display:block");
  }
}
