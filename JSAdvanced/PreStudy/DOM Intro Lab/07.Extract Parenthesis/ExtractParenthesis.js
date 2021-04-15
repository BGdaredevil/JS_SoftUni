function extract(content) {
  let test = /\(([\w\s]+)\)/g;
  content = document.getElementById(content).innerText;
  return content
    .match(test)
    .map((el) => (el = el.slice(1, el.length - 1)))
    .join("; ");
}
