function localTest(input) {
  input = Number(input);
  let start = input;
  let abandonLevel = 100;
  let dailyCrew = 26;
  let daysWorked = 0;
  let stored = 0;
  let depletion = 10;

  while (start >= abandonLevel) {
    daysWorked++;
    stored += start;
    start -= depletion;
    if (stored >= dailyCrew) {
      stored -= dailyCrew;
    } else {
      stored = 0;
    }
  }
  if (stored >= dailyCrew) {
    stored -= dailyCrew;
  } else {
    stored = 0;
  }
  console.log(`${daysWorked}\n${stored}`);
}
localTest(10);
