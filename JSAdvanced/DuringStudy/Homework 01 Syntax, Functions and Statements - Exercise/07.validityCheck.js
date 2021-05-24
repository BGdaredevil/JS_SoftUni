function solve(...input) {
  let [x1, y1, x2, y2] = input.map(Number);

  return `${getDist(x1, y1)}\n${getDist(x2, y2)}\n${getDist(x1, y1, x2, y2)}`;

  function getDist(ax, ay, bx = 0, by = 0) {
    let dx = Math.abs(ax - bx);
    let dy = Math.abs(ay - by);
    let dist = Math.sqrt(dx ** 2 + dy ** 2);
    return `{${ax}, ${ay}} to {${bx}, ${by}} is ${
      dist % 1 === 0 ? "valid" : "invalid"
    }`;
  }
}
