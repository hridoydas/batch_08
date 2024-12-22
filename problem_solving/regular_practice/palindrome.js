// 123454321
// level
function isPalindrome(text) {
  let right = text.length;
  for (let left = 0; left < text.length; left++) {
    right = right - 1;
    console.log(`text[i]: ${text[left]}\ntext[j]:${text[right]} `);
    if (text[left] != text[right]) {
      return false;
    }
  }
  return true;
}

function printPalindrome(text = "level", printData = "No") {
  if (isPalindrome(text) == true) {
    console.log(`${text} is a palindrome number\n`);
    printData = "Yes";
    console.log(printData);
  } else {
    console.log(`${text} is not a palindrome number\n`);
    console.log(printData);
  }
}

printPalindrome();
