// blocks and scope
const city = 'New York City';
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());
// this code will throw an error if you try to access the skyscraper variable outside of the function, because it is scoped to the function block. The city variable, however, is accessible because it is defined in the global scope.

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';
function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky());
// the variables satellite, galaxy, and stars are all defined in the global scope, so they are accessible inside the function callMyNightSky().

function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);
// the variable lightWaves is defined inside the function logVisibleLightWaves(), so it is not accessible outside of that function. The last line will throw an error because lightWaves is not defined in the global scope.

// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius'
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
// the variable stars is defined in the global scope, so it is accessible inside the function callMyNightSky(). The last line will log 'Sirius' because the function callMyNightSky() reassigns the value of stars to 'Sirius'.

const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError
// the variable color is defined inside the function logSkyColor(), so it is not accessible outside of that function. The last line will throw an error because color is not defined in the global scope.
// . If a variable does not need to exist outside a block, it shouldn’t be defined outside of that block. This is a good rule of thumb to follow when writing code, as it helps to keep your code organized and prevents variables from being accidentally overwritten or misused.

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
    if(region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
  console.log(lightWaves);
};

logVisibleLightWaves();
// the variable lightWaves is defined inside the function logVisibleLightWaves(), so it is not accessible outside of that function. The last line will log 'Moonlight' because the variable lightWaves defined inside the if block is a different variable than the one defined in the outer scope of the function.


