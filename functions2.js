function task(number) {
  console.log(`-----task ${number}------`);
}

function isOdd(n) {
  if (n % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

task(1);
let result = isOdd(5);
console.log(result);

function squareOrDouble(n) {
  if (n % 2 == 0) {
    let numE = n * 2;
    return numE;
  } else {
    let numE2 = n ** 2;
    return numE2;
  }
}

task(3);
let result2 = squareOrDouble(4);
console.log(result2);

//---------------------------

function oddsSmallerThan(n) {
  const num = (n - 1) / 2;
  if (n % 2 == 1) {
    return num;
  }
}
task(2);
let result3 = oddsSmallerThan(5);
console.log(result3);
