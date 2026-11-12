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

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)]
  console.log(currentCard);
};
// the while loop will continue to execute as long as the condition currentCard !== 'spade' is true. Inside the loop, a random card will be selected from the cards array and assigned to the currentCard variable. The console.log() statement will print the value of currentCard to the console. Once a 'spade' is selected, the condition will become false and the loop will terminate. This demonstrates how to use a while loop to repeatedly execute a block of code until a certain condition is met.


let cupsOfSugarNeeded = 5;
let cupsAdded = 0;
do {
  cupsAdded++
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded) {
};
// the do...while loop will execute the block of code inside the do statement at least once, and then continue to execute it as long as the condition cupsAdded < cupsOfSugarNeeded is true. Inside the loop, the cupsAdded variable will be incremented by 1 and printed to the console. Once cupsAdded reaches 5, the condition will become false and the loop will terminate. This demonstrates how to use a do...while loop to ensure that a block of code is executed at least once before checking the condition.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
    if (rapperArray[i] == 'Notorious B.I.G.') {
      break;
    }
}
console.log("And if you don't know, now you know");
// the for loop will iterate over each element of the rapperArray and print it to the console. If the current element is 'Notorious B.I.G.', the break statement will terminate the loop, and the message "And if you don't know, now you know" will be printed to the console. This demonstrates how to use a break statement to exit a loop early when a certain condition is met.


