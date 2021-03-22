function skip3(n) {
  n = Number(n[0]);
  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}
function back(n) {
  n = Number(n[0]);
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}
function power(n) {
  n = Number(n[0]);
  let num = 1;
  for (let i = 0; i <= n; i++) {
    console.log(num);
    num = num * 2;
  }
}
function evenPower(n) {
  n = Number(n[0]);
  let num = 1;
  for (let i = 0; i <= n; i += 2) {
    console.log(num);
    num = num * 2 * 2;
  }
}
function numberLine(n) {
  n = Number(n[0]);
  let num = 1;
  while (num <= n) {
    console.log(num);
    num = num * 2 + 1;
  }
}
function check(n) {
  let i = 0;
  while (Number(n[i]) < 1 || Number(n[i]) > 100) {
    i++;
    console.log("Invalid number!");
  }
  console.log(`The number is: ${Number(n[i])}`);
}
function commonDivider(n) {
  let num1 = Number(n[0]);
  let num2 = Number(n[1]);
  if (num2 > num1) {
    num1 = Number(n[1]);
    num2 = Number(n[0]);
  }
  while (num2 !== 0) {
    let prev = num2;
    num2 = num1 % num2;
    num1 = prev;
  }
  console.log(num1);
}
function factoriel(n) {
  n = Number(n[0]);
  let fact = 1;
  do {
    fact = fact * n;
    n--;
  } while (n > 1);
  console.log(fact);
}
function numSum(n) {
  n = n[0];
  let sum = 0;
  let i = 0;
  do {
    sum += Number(n[i]);
    i++;
  } while (i < n.length);
  console.log(sum);
}
function checkPrime(n) {
  n = Number(n);
  let endCondition = Math.sqrt(n);
  let i = 2;
  let isPrime = true;
  while (i <= endCondition) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }
  if (isPrime) {
    console.log(`Prime`);
  } else {
    console.log(`Not prime`);
  }
  if (n <= 1) {
    console.log(`Not prime`);
  }
}
function checkInput(n) {
  for (let i = 0; i < n.length; i++) {
    const element = Number(n[i]);
    if (element % 2 === 0) {
      console.log(`Even number entered: ${n[i]}`);
      break;
    } else {
      console.log("The number is not even.");
    }
  }
}
function combination() {
  let shouldRun = true;
  for (let num1 = 1; num1 <= 3; num1++) {
    if (shouldRun) {
      for (let num2 = 3; num2 >= 1; num2--) {
        if (num1 + num2 === 2) {
          shouldRun = false;
          break;
        }
        console.log(`${num1} ${num2}`);
      }
    }
  }
}
function fibunaci(n) {
  n = Number(n[0]);
  let fibunaci = [1, 1];
  for (let i = 2; i <= n; i++) {
    let nextItem = fibunaci[i - 1] + fibunaci[i - 2];
    fibunaci.push(nextItem);
  }
  console.log(fibunaci[n]);
}
function pyramid(n) {
  n = Number(n[0]);
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j > 1) {
        row += " ";
      }
      row += num;
      num++;
      if (num > n) {
        break;
      }
    }
    console.log(row);
    if (num > n) {
      break;
    }
  }
}
function numberTable(n) {
  n = Number(n[0]);
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      let num = i + j + 1;
      if (num > n) {
        num = 2 * n - num;
      }
      row += num + " ";
    }
    console.log(row);
  }
}
numberTable(["3"]);
