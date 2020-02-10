function sumFor(numList) {
  let sum = 0;
  for (let x = 0; x < numList.length; x++) {
    sum += numList[x];
  }
  return sum;
}

function sumWhile(numList) {
  let sum = 0;
  let x = 0;
  while (x < numList.length) {
    sum += numList[x];
    x++;
  }
  return sum;
}

function sumRecursion(numList) {
  if (numList.length === 0) {
    return 0;
  }
  return sumRecursion(numList.slice(1, numList.length)) + numList[0];
}

function sumTheSimpleWay(numList) {
  return _.reduce(numList, function (memo, num) { return memo + num; }, 0);
}

const test = [1, 2, 3];
console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));
