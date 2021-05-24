function solve(...input) {
  let [steps, sLengthM, speedKMpH] = input.map(Number);
  let totalTime =
    (sLengthM * steps) / (speedKMpH / 3.6) +
    Math.floor((sLengthM * steps) / 500) * 60;
  let hours = Math.floor(totalTime / 3600);
  let rem = totalTime - hours * 3600;
  let mins = Math.floor(rem / 60);
  let secs = rem - mins * 60;
  return `${hours > 9 ? hours : `0${hours}`}:${mins > 9 ? mins : `0${mins}`}:${
    secs > 9 ? secs.toFixed(0) : `0${secs.toFixed(0)}`
  }`;
}

solve(4000, 0.6, 5);
solve(2564, 0.7, 5.5);
