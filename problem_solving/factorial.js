// 5! = 5*4*3*2*1 = 120 || 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8
// 4! = 4*3*2*1 = 24
// 0! = 1

function factorial(n) {
  var result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  console.log(result);
}

factorial(5);
