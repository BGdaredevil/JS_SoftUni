function solve(arr) {
  return arr
    .sort((a, b) => a.localeCompare(b))
    .reduce((acc, el, loc) => (acc += `${loc + 1}.${el}\n`), "");
}
