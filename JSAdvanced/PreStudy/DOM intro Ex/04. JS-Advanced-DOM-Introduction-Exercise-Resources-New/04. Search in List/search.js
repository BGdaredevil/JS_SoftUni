function search() {
  let count = 0;
  let searchItem = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  let listItems = [...document.getElementsByTagName("li")];

  for (const item of listItems) {
    if (item.innerText.includes(searchItem)) {
      count++;
      item.style["font-weight"] = "bold";
      item.style["text-decoration-line"] = "underline";
    }
  }
  result.innerText = `${count} matches found`;
  //console.log(result);
}

//text-decoration-line: underline
//font-weight: bold
