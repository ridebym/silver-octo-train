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

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

// The code defines several functions and demonstrates their usage.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit =>
console.log(`I want to eat a ${fruit}.`));

// The code defines an array of fruits and uses the forEach method to iterate over each fruit, printing a message to the console for each one.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
return animal[0]}); //hi five yo!!

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
});
console.log(smallNumbers);
// The code defines an array of animals and uses the map method to create a new array called secretMessage, which contains the first letter of each animal's name. The join method is then used to combine the letters into a single string, which is printed to the console. Additionally, the code defines an array of bigNumbers and uses the map method to create a new array called smallNumbers, which contains each number divided by 100. The smallNumbers array is then printed to the console.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const moreSmallNumbers = randomNumbers.filter(number => {
  return number < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});
console.log(moreSmallNumbers);
console.log(longFavoriteWords);
// The code defines an array of randomNumbers and uses the filter method to create a new array called smallNumbers, which contains only the numbers less than 250. It also defines an array of favoriteWords and uses the filter method to create a new array called longFavoriteWords, which contains only the words with more than 7 characters. Both arrays are then printed to the console.

const moreAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = moreAnimals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal);
console.log(moreAnimals[7]);

const startsWithS = moreAnimals.findIndex(animal => {
  return animal[0] === 's';
});

console.log(startsWithS);
console.log(moreAnimals[3]);
// The code defines an array of animals and uses the findIndex method to find the index of the first occurrence of 'elephant' in the array. It also uses findIndex to find the index of the first animal that starts with the letter 's'. The results are printed to the console, along with the corresponding animals at those indices.

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
});

console.log(newSum);
// The code defines an array of newNumbers and uses the reduce method to calculate the sum of all the numbers in the array. The accumulator starts with the first value in the array, and the currentValue represents the next value being processed. The console.log statements inside the reduce callback function print the values of accumulator and currentValue at each step of the reduction process. Finally, the total sum is printed to the console.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
});
console.log(interestingWords);


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));
// The code defines an array of words and uses the some method to check if any of the words have a length less than 6. It also uses the filter method to create a new array called interestingWords, which contains only the words with more than 5 characters. Finally, it uses the every method to check if all the words in interestingWords have a length greater than 5, and prints the result to the console.

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
// The code defines an array of cities and an array of numbers. It uses the forEach method to print a message for each city, the filter method to create a new array of cities with names longer than 7 characters, the reduce method to concatenate the first letters of each city name into a single string starting with "C", the map method to create a new array of numbers with 5 subtracted from each, and the some method to check if any number in the nums array is less than 0. The results are printed to the console where applicable.

