// [2, 4, 8, 10, 5] , 12 => [4, 8]

function sumNumber(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(`numbers[i]: ${numbers[i]}\nnumbers[j]: ${numbers[j]}\n`);
      console.log(numbers[i] + numbers[j]);
      if (numbers[i] + numbers[j] == target) {
        console.log(`The expected numbers are ${numbers[i]} & ${numbers[j]}`);
        // return [numbers[i], numbers[j]];
      }
    }
  }
}
sumNumber([2, 4, 8, 10, 5], 22);
// console.log(`The expected numbers are ${sumNumber([2, 4, 8, 10, 5], 12)}`);
