function sum(num1, num2, method) {
  // const, var, let
  const result = "";
  if (method == "sum") {
    result = num1 + num2;
  } else if (method == "div") {
    result = num1 - num2;
  }

  console.log(result);
}

sum(8, 2, "div");
