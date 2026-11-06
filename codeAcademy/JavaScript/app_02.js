let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
};

let stopLight = 'green';
let pedestrians = 1;
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

let day = 'Friday';
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true


let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep')
} else {
  console.log('not bedtime yet')
};

let myVariable = 'I Exist!';

if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}


let wordCount = 9;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase1 = '';

if (favoritePhrase1) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let tool = '';

tool = 'marker';

// Use short-circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

let isLocked = false;

// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase2 = 'Love That!';

// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }

favoritePhrase2 === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season ===  'winter') {
console.log("It's winter! Everything is covered in snow.")
} else if (season === 'fall') {
console.log("It's fall! Leaves are falling!")
} else if (season === 'summer') {
console.log("It's sunny and warm because it's summer!")
} else {
  console.log('Invalid season.');
}

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

// Prints 'Papayas are $1.29'


let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
    break;
  case 'second place':
  console.log('You get the silver medal!');
    break;
  case 'third place':
  console.log('You get the bronze medal!');
    break;
  default:
  console.log('No medal awarded.');
    break;
}