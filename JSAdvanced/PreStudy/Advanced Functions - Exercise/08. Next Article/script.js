function getArticleGenerator(articles) {
  let resulting = document.querySelector("#content");
  let info = articles.slice();
  let produce = () => {
    if ((temp = info.shift())) {
      let art = document.createElement("article");
      art.innerText = temp;
      resulting.appendChild(art);
    }
  };
  return produce;
}
