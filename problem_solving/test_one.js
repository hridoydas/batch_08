function test(mark, text) {
  const mark_f = "Your grade is: F";
  const mark_d = "Your grade is: D";
  const mark_c = "Your grade is: C";
  const mark_b = "Your grade is: B";
  const mark_a = "Your grade is: A";
  const invalid = "Please enter a valid mark";

  if (mark >= 0 && mark <= 59) {
    return mark_f;
  } else if (mark > 59 && mark <= 69) {
    return mark_d;
  } else if (mark > 69 && mark <= 79) {
    return mark_c;
  } else if (mark > 79 && mark <= 89) {
    return mark_b;
  } else if (mark > 89 && mark <= 100) {
    return mark_a;
  } else {
    return invalid;
  }
}

console.log(test(-60));
