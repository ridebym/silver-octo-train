// object literals in javascript are a comma-separated list of name-value pairs inside curly braces. The name is a string (also called a key), and the value can be any data type, including another object literal.
// Write your fasterShip object literal below
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;
// The code defines an object literal called fasterShip with two properties: 'Fuel Type' and color. It also defines another object literal called spaceship with several properties, including homePlanet, color, 'Fuel Type', numCrew, and flightPath. The code then retrieves the values of the numCrew and flightPath properties from the spaceship object and assigns them to the variables crewCount and planetArray, respectively.

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   'Active Mission' : true,
//   homePlanet : 'Earth', 
//   numCrew: 5
//  };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);
// The code defines an object literal called spaceship with several properties, including 'Fuel Type', 'Active Mission', homePlanet, and numCrew. It then retrieves the value of the 'Active Mission' property using bracket notation and assigns it to the variable isActive. Finally, it logs the value of the 'Active Mission' property to the console using the propName variable.

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth',
//   color: 'silver',
//   'Secret Mission' : 'Discover life outside of Earth.'
// };

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 7;
console.log(spaceship);
delete spaceship['Secret Mission'];
console.log(spaceship);
// The code defines an object literal called spaceship with several properties, including 'Fuel Type', homePlanet, color, and 'Secret Mission'. It then modifies the color property to 'glorious gold', adds a new property called numEngines with a value of 7, and logs the updated spaceship object to the console. Finally, it deletes the 'Secret Mission' property from the spaceship object and logs the updated object to the console again.

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
console.log(alienShip.retreat());
console.log(alienShip.takeOff());
// The code defines a string variable called retreatMessage with a message about not wanting to conquer a planet. It then defines an object literal called alienShip with two methods: retreat and takeOff. The retreat method logs the retreatMessage to the console, while the takeOff method logs a message indicating that the ship is taking off. Finally, it calls both methods and logs their outputs to the console.

