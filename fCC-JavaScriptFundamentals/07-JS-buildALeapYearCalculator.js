// Define a function called isLeapYear that takes a number as an argument.

function isLeapYear(year) {
  // Inside the function, use an if/ else statement or a ternary operator to check if the year is a leap year.

  // To check if the year is a leap year, fulfill the following conditions:
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return year + " is a leap year.";
      } else {
        return year + " is not a leap year.";
      }
    } else {
      return year + " is a leap year.";
    }
  } else {
    return year + " is not a leap year.";
  }
}

// Outside the function, declare a variable year that stores the value of the year you want to check.
var year = 2020;

// You should declare a variable named result and assign it the value returned by calling the isLeapYear function with year as the argument.
var result = isLeapYear(year);

// You should output the result variable to the console using console.log().
console.log(result);

// If the year is divisible by 4, then it is a leap year.
// Unless the year is also divisible by 100, then it is not a leap year.
// Unless the year is also divisible by 400, then it is a leap year.
// If the year is a leap year, return [year] is a leap year.. Otherwise, return [year] is not a leap year.. You will replace [year] with the parameter defined in the isLeapYear function.

// You should declare a variable named result and assign it the value returned by calling the isLeapYear function with year as the argument.

// You should output the result variable to the console using console.log().

