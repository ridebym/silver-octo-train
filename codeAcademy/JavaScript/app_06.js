// this lesson will be about loops in JavaScript. Loops are used to execute a block of code repeatedly until a certain condition is met. There are several types of loops in JavaScript, including for loops, while loops, and do...while loops.

const vacationSpots = ['Japan', 'Amsterdam', 'Canada'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
// the console.log() statements will print each element of the vacationSpots array to the console. However, this approach is not efficient for larger arrays, as it requires writing a separate console.log() statement for each element.

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
// the for loop will iterate over each element of the vacationSpots array and print a message to the console for each element. The loop will continue until the condition i < vacationSpots.length is no longer true, at which point the loop will terminate. This approach is more efficient for larger arrays, as it allows us to write a single block of code that can handle any number of elements in the array.

for (let counter = 5; counter <= 10; counter++) {
  console.log(counter);
}
// the for loop will iterate from 5 to 10, inclusive, and print each value of counter to the console. The loop will continue until the condition counter <= 10 is no longer true, at which point the loop will terminate. This demonstrates how to use a for loop to iterate over a range of numbers.

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
// the for loop will iterate from 3 to 0, inclusive, and print each value of counter to the console. The loop will continue until the condition counter >= 0 is no longer true, at which point the loop will terminate. This demonstrates how to use a for loop to iterate over a range of numbers in reverse order.

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
// the for loop will iterate over each element of the vacationSpots array and print a message to the console for each element. The loop will continue until the condition i < vacationSpots.length is no longer true, at which point the loop will terminate. This approach is more efficient for larger arrays, as it allows us to write a single block of code that can handle any number of elements in the array.

// Write your code below
const bobsFollowers = ['Yelena', 'John', 'Ava', 'Alexei'];
const tinasFollowers = ['John', 'Louise', 'Ava'];
const mutualFollowers = [];

// const arrayA = [6, 19, 20];
// const arrayB = [19, 81, 2];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers);
// the nested for loops will iterate over each element of the bobsFollowers and tinasFollowers arrays and compare them. If a match is found, the matching element will be pushed to the mutualFollowers array. The console.log() statement will print the mutualFollowers array to the console, which will contain the names of the followers that are common to both Bob and Tina. In this case, the output will be ['John', 'Ava'].