// creating functions
function getReminder() {
  console.log('Water the plants.')
}

function greetInSpanish() {
  console.log('Buenas tardes.')
}

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();

//setting parameters for functions and passing arguments
function sayThanks(name) {
  console.log('Thank you for your purchase, ' + name + '! We appreciate your business.');
}

sayThanks('Cole');

//default parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread',  item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();

//returning values
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);


//helper functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);

console.log(totalCost);


//function expresssions
const plantsNeedWater = function(day) {
  if(day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

// arrow functions
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// concise body arrow functions
const squareNum = (num) => {
  return num * num;
}; // can be refactored to:
const squareNum = num => num * num;

// so plantNeedsWater can be refactored to:
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


// Rock, Paper, Scissors!


________________________________________________________________________________
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

function getCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};

getCelsius(89); // Returns 31.666666666666668