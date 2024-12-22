// 5! = 5*4*3*2*1 = 120 || 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8
// 4! = 4*3*2*1 = 24
// 0! = 1

function factorialRecursion(n) {
  if (n == 0) {
    return 1;
  }
  return n * (n - 1);
}

console.log(factorialRecursion(5));
