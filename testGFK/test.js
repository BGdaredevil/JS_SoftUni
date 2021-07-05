function sortIt(arrA, arrB) {
  //   using built in

  //   arrA.push(...arrB);

  //   return arrA.sort((a, b) => a - b);

  //using self made
  let result = [];
  arrA.push(...arrB);

  while (arrA.length > 0) {
    let currSmallest = getSmallest(arrA);
    result.push(currSmallest);
    arrA.splice(arrA.indexOf(currSmallest), 1);
  }

  return result;

  function getSmallest(arr) {
    return arr.reduce((a, e) => {
      if (a > e) {
        a = e;
      }
      return a;
    }, Infinity);
  }
}

console.log(sortIt([3, 6, 9, 1, 2], [2, 0, -4, 10]));
//(9) [-4, 0, 1, 2, 2, 3, 6, 9, 10]
