// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibonacci(n) {
  var series = [0];
  if (n == 1) {
    series = series;
  } else {
    series = [0, 1];
  }
  for (let i = 2; i < n; i++) {
    var result = series[i - 1] + series[i - 2];
    series.push(result);
  }
  console.log(series);
}

fibonacci(3);
