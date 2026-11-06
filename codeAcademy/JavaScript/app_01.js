// This is a single line comment
/* This is a multi-line comment
that spans multiple lines */
// This first js file shows simple math operations, string concatenation, and variable declarations.
console.log( 3.5 + 35);
console.log(2026 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

console.log('Hello' + 'World');
console.log('Hello' + ' ' + 'World')

console.log('Teaching the world how to code'.length);

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

console.log(Math.random() * 100);
console.log(Math.floor(Math.random()) * 100);
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
changeMe = false;
console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);
//entree = 'Tacos';

//const testing;

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log(gainedDollar, lostDollar);

let favoriteAnimal = "dog";
console.log('My favorite animal: ' + favoriteAnimal);

let myName = 'Yukio';
let myCity = 'Spokane';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

// A quick google question:
// "what is the most popular website on the internet that runs on javascript legacy code?"
// WordPress (powering a massive portion of the global web) and classic high-traffic platforms like Craigslist or older enterprise sites rely heavily on legacy JavaScript—specifically jQuery and older pre-ES6 scripts