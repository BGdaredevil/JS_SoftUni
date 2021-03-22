function to100() {
  for (i = 1; i <= 100; i++) {
    console.log(i);
  }
}
function back(input) {
  input = Number(input);
  for (i = input; i > 0; i--) {
    console.log(i);
  }
}
function skip3(num) {
  num = Number(num);
  for (i = 1; i <= num; i += 3) {
    console.log(i);
  }
}
function toPow(n) {
  n = Number(n);
  for (i = 0; i <= n; i += 2) {
    console.log(Math.pow(2, i));
  }
}
function string(inp) {
  for (i = 0; i < inp.length; i++) {
    console.log(inp[i]);
  }
}
function sum(word) {
  let a = 0,
    e = 0,
    i = 0,
    o = 0,
    u = 0;

  for (j = 0; j < word.length; j++) {
    switch (word[j]) {
      case "a":
      case "A":
        a += 1;
        break;
      case "e":
      case "E":
        e += 2;
        break;
      case "i":
      case "I":
        i += 3;
        break;
      case "o":
      case "O":
        o += 4;
        break;
      case "u":
      case "U":
        u += 5;
        break;
    }
  }
  console.log(a + e + i + o + u);
}
function sumNum(number) {
  let summ = 0;
  for (let i = 0; i < number.length; i++) {
    summ += Number(number[i]);
  }
  console.log(`The sum of the digits is:${summ}`);
}
function div9(rangStart, rangEnd) {
  rangStart = Number(rangStart);
  rangEnd = Number(rangEnd);
  let k = 0;
  let ar = [];
  for (i = rangStart; i <= rangEnd; i++) {
    switch (i % 9) {
      case 0:
        k += i;
        ar.push(i);
        break;
    }
  }
  console.log(`The sum: ${k}`);
  for (let n = 0; n < ar.length; n++) {
    console.log(ar[n]);
  }
}
function lili(age, washCost, dollCost) {
  age = Number(age);
  washCost = Number(washCost);
  dollCost = Number(dollCost);
  let toy = 0,
    mon = 0,
    counter = 0;
  for (let i = 1; i <= age; i++) {
    switch (i % 2) {
      case 0:
        counter++;
        mon = 10 * counter + mon;
        break;
      case 1:
        toy += 1;
        break;
    }
  }
  mon = mon + dollCost * toy - counter * 1;
  if (mon >= washCost) {
    console.log(`Yes! ${(mon - washCost).toFixed(2)}`);
  } else {
    console.log(`No! ${(washCost - mon).toFixed(2)}`);
  }
}
lili("10", "170", "6");
