function pyramid(input) {
  let n = Number(input[0]);
  let current = 1;
  let isBigger = false;
  let printCurrentLine = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      if (current > n) {
        isBigger = true;
        break;
      }
      printCurrentLine += current + " ";
      current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger) {
      break;
    }
  }
}
function nums(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let printLine = "";
  for (let current = start; current <= end; current++) {
    current = current.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i <= current.length; i++) {
      let digit = Number(current.charAt(i));
      if (i % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    }
    if (oddSum === evenSum) {
      printLine += ` ${current}`;
    }
    current = Number(current);
  }
  console.log(printLine);
}
function primeSum(input) {
  let i = 0;
  let primeSum = 0;
  let nonPrimeSum = 0;
  while (input[i] !== "stop") {
    if (Number(input[i]) < 0) {
      console.log("Number is negative.");
      i++;
    } else {
      let j = 0;
      for (j = 2; j < Number(input[i]); j++) {
        if (Number(input[i]) % j === 0) {
          nonPrimeSum += Number(input[i]);
          break;
        }
      }
      if (j === Number(input[i])) {
        primeSum += Number(input[i]);
      }
      i++;
    }
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
function trainers(input) {
  let judges = Number(input[0]), //judge number
    i = 1,
    j = 0,
    gradeSum = 0,
    overallSum = 0,
    presentations = 0;
  while (input[i] !== "Finish") {
    //condition for end
    let presentationName = input[i];
    let presentationGrade = 0;
    for (j = i + 1; j <= judges + i; j++) {
      //looping over grades
      gradeSum += Number(input[j]);
      if (j === judges + i) {
        presentationGrade = gradeSum / judges;
        gradeSum = 0;
        i = 1 + j;

        break;
      }
    }
    console.log(`${presentationName} - ${presentationGrade.toFixed(2)}.`);
    overallSum += presentationGrade;
    presentations++;
  }
  console.log(
    `Student's final assessment is ${(overallSum / presentations).toFixed(2)}.`
  );
}
function magic(input) {
  let testNumber = Number(input[0]),
    magicNum = "",
    testNum = "",
    outputLine = "";

  for (let i = 1111; i <= 9999; i++) {
    testNum = i.toString();
    let charA = false;
    let charB = false;
    let charC = false;
    let charD = false;
    if (Number(testNumber) % Number(testNum.charAt(0)) === 0) {
      magicNum += testNum.charAt(0);
      charA = true;
    }
    if (Number(testNumber) % Number(testNum.charAt(1)) === 0) {
      magicNum += testNum.charAt(1);
      charB = true;
    }
    if (Number(testNumber) % Number(testNum.charAt(2)) === 0) {
      magicNum += testNum.charAt(2);
      charC = true;
    }
    if (Number(testNumber) % Number(testNum.charAt(3)) === 0) {
      magicNum += testNum.charAt(3);
      charD = true;
    }
    if (charA && charB && charC && charD) {
      outputLine = outputLine + magicNum + " ";
      magicNum = "";
    } else {
      magicNum = "";
    }
  }
  console.log(outputLine);
}
