const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);
// the function checkThatTwoPlusTwoEqualsFourAMillionTimes will iterate 1,000,000 times and check if 2 + 2 equals 4. If the condition is not met, it will print an error message to the console. The function is then assigned to the variable isTwoPlusTwo, which can be called to execute the same logic. The console.log() statement will print the name of the function, which is 'checkThatTwoPlusTwoEqualsFourAMillionTimes'.

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';  
}

console.log(checkConsistentOutput(addTwo, 10));
// the function addTwo takes a number as an argument and returns that number plus 2. The function checkConsistentOutput takes a function and a value as arguments, and checks if the output of the function is consistent with the expected output. If the outputs are consistent, it returns the result of the function; otherwise, it returns 'inconsistent results'. The console.log() statement will print the result of calling checkConsistentOutput with addTwo and 10 as arguments, which will be 12.