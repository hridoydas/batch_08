// loop => for, while, do-while
function forLoopTest() {
  const testData = [1, "Hello", 77, 90, "Ostad", "Test loop", 55, 0, 100];
  for (let i = 0; i <= testData.length - 1; i++) {
    let data = testData[i];
    console.log(data);
  }
}

// forLoopTest();

function whileLoopTest() {
  const testData = [1, "Hello", 77, 90];
  let i = 0;
  while (i <= testData.length - 1) {
    let data = testData[i];
    console.log(data);
    i++;
  }
}

whileLoopTest();
