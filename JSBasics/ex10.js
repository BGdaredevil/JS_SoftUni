function clock() {
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      console.log(`${i}:${j}`);
    }
  }
}
function multipy() {
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}
function realSolve(input) {
  let n = Number(input[0]),
    valid = Number();
  for (let a = 0; a <= n; a++) {
    for (let b = 0; b <= n; b++) {
      for (let c = 0; c <= n; c++) {
        if (a + b + c === n) {
          valid++;
        }
      }
    }
  }
  console.log(valid);
}
function sum2nums(input) {
  let min = Number(input[0]);
  let max = Number(input[1]);
  let result = Number(input[2]);
  let passedCombo = Number();
  let isFound = Number();
  for (let i = min; i <= max; i++) {
    if (isFound !== 0) {
      break;
    }
    for (let j = min; j <= max; j++) {
      passedCombo++;
      if (i + j === result) {
        console.log(`Combination N:${passedCombo} (${i} + ${j} = ${result})`);
        isFound++;
        break;
      }
    }
  }
  if (isFound === 0) {
    console.log(`${passedCombo} combinations - neither equals ${result}`);
  }
}
function roadTrip(input) {
  let i = 0;
  while (input[i] !== "End") {
    let destination = input[i];
    let neededCash = Number(input[i + 1]);
    let currCash = 0;
    let j = i + 2;
    while (currCash < neededCash) {
      currCash = currCash + Number(input[j]);
      j++;
    }
    console.log(`Going to ${destination}!`);
    i = 0 + j;
  }
}
function building(input) {
  let story = Number(input[0]);
  let rooms = Number(input[1]);
  let letter;

  for (let i = story; i <= story && i > 0; i--) {
    if (i === story) {
      letter = "L";
    } else {
      if (i % 2 !== 1) {
        letter = "O";
      } else {
        letter = "A";
      }
    }
    let array = [];
    for (let j = 0; j < rooms; j++) {
      array.push(`${letter}${i}${j}`);
    }
    console.log(array.join(" "));
    array = [];
  }
}
function cinema(input) {
  let i = 0,
    j = 2,
    totStudent = 0,
    currStudent = 0,
    totStandard = 0,
    currStandard = 0,
    totKid = 0,
    currKid = 0;
  while (input[i] !== "Finish") {
    let movieName = input[i];
    let seats = Number(input[i + 1]);
    currKid = 0;
    currStandard = 0;
    currStudent = 0;
    while (input[j] !== "End") {
      if (input[j] === "Finish") {
        break;
      }
      if (currKid + currStandard + currStudent === seats) {
        break;
      }
      switch (input[j]) {
        case "student":
          currStudent++;
          totStudent++;
          j++;
          break;
        case "standard":
          currStandard++;
          totStandard++;
          j++;
          break;
        case "kid":
          currKid++;
          totKid++;
          j++;
          break;
      }
    }
    console.log(
      `${movieName} - ${(
        ((currKid + currStandard + currStudent) * 100) /
        seats
      ).toFixed(2)}% full.`
    ); //na film
    if (currKid + currStandard + currStudent === seats) {
      i = 0 + j;
      j += 2;
    } else {
      i = 1 + j;
      j += 3;
    }
  }
  console.log(`Total tickets: ${totKid + totStandard + totStudent}`); //total
  console.log(
    `${((totStudent * 100) / (totKid + totStandard + totStudent)).toFixed(
      2
    )}% student tickets.`
  ); //studenti
  console.log(
    `${((totStandard * 100) / (totKid + totStandard + totStudent)).toFixed(
      2
    )}% standard tickets.`
  ); //standartni
  console.log(
    `${((totKid * 100) / (totKid + totStandard + totStudent)).toFixed(
      2
    )}% kids tickets.`
  ); //deca
}
function tournament(input) {
  let duration = Number(input[0]),
    i = 0,
    wins = 0,
    losses = 0,
    dailyWins = 0,
    wonDays = 0,
    passedDays = 0,
    totalWinnings = 0;
  while (passedDays < duration) {
    while (input[i] !== "Finish") {
      switch (input[i]) {
        case "win":
          wins++;
          break;
        case "lose":
          losses++;
          break;
        default:
          break;
      }
      i++;
    }
    if (wins > losses) {
      dailyWins = wins * 20 * 1.1;
      wonDays++;
    } else {
      dailyWins = wins * 20;
    }
    totalWinnings += dailyWins;
    passedDays++;
    i++;
    wins = 0;
    losses = 0;
  }
  if (wonDays > passedDays / 2) {
    totalWinnings = totalWinnings * 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalWinnings.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalWinnings.toFixed(2)}`
    );
  }
}
