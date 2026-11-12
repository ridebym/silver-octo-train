// In this lesson, we learned about arrays in JavaScript. An array is a data structure that can hold multiple values of different types, including numbers, strings, and even other arrays. We can create an array using square brackets [] and separate the elements with commas. We can access the elements of an array using their index, which starts at 0 for the first element. We can also modify the elements of an array by assigning a new value to a specific index. Arrays have many built-in methods that allow us to manipulate them, such as .push(), .pop(), .shift(), .unshift(), .slice(), and .indexOf(). Arrays are mutable, meaning that their elements can be changed, but if an array is declared with const, the variable itself cannot be reassigned to a new array.
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);
// the variable newYearsResolutions is an array that contains three strings. The console.log() statement will print the entire array to the console.

const hobbies = ['coding', 'reading', 'video games'];
console.log(hobbies);

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);
// the variable listItem is assigned the value of the first element in the famousSayings array, which is 'Fortune favors the brave.'. The console.log() statements will print the first and third elements of the array to the console. The last console.log() statement will print undefined because there is no fourth element in the array.

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);
// the first console.log() statement will print the condiments array with 'Mayo' as the first element. The second console.log() statement will print the condiments array with only 'Mayo' as its element. The third console.log() statement will print the utensils array with 'Spoon' as the fourth element.
// arrays are mutable, meaning that their elements can be changed. However, if an array is declared with const, the variable itself cannot be reassigned to a new array. In this case, condiments was declared with let, so it can be reassigned to a new array. Utensils was declared with const, so its elements can be changed, but the variable itself cannot be reassigned to a new array.

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
// .length is a property of arrays that returns the number of elements in the array. It can be used to determine the size of an array and to iterate over its elements using loops.

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('feed animals', 'study');
console.log(chores);
// .push() is a method of arrays that adds one or more elements to the end of an array. It can be used to add new items to an existing array without creating a new array. In this case, the chores array will have two new elements added to it: 'feed animals' and 'study'.
// the .push() method modifies the original array and returns the new length of the array. It can be used to add elements to an array in a dynamic way, such as when collecting user input or when processing data from an external source. it is important to note that the .push() method can take multiple arguments, allowing you to add multiple elements to an array at once. aka a destructive method because it modifies the original array.

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
let elementRemoved = chores.pop();
console.log(elementRemoved);
console.log(chores);
// .pop() is a method of arrays that removes the last element from an array and returns that element. It can be used to remove items from an existing array without creating a new array. In this case, the chores array will have its last element removed, which is 'mop floor', and that element will be stored in the variable elementRemoved.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift()
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex);
// .shift() is a method of arrays that removes the first element from an array and returns that element. It can be used to remove items from the beginning of an existing array without creating a new array. In this case, the groceryList array will have its first element removed, which is 'orange juice'.
// .unshift() is a method of arrays that adds one or more elements to the beginning of an array and returns the new length of the array. It can be used to add new items to the beginning of an existing array without creating a new array. In this case, the groceryList array will have 'popcorn' added to the beginning of the array.
// .slice() is a method of arrays that returns a shallow copy of a portion of an array into a new array object. It can be used to extract a section of an existing array without modifying the original array. In this case, the groceryList.slice(1,4) will return a new array containing the elements from index 1 to index 3 (not including index 4), which are 'bananas', 'coffee beans', and 'brown rice'.
// .indexOf() is a method of arrays that returns the first index at which a given element can be found in the array, or -1 if it is not present. It can be used to find the position of an element in an existing array. In this case, groceryList.indexOf('pasta') will return the index of 'pasta' in the groceryList array, which is 4.
// .slice() does not modify the original array, while .splice() does. .slice() returns a new array containing the selected elements, while .splice() removes or replaces elements in the original array and returns the removed elements.
// .indexOf() returns the index of the first occurrence of a specified value in an array, while .lastIndexOf() returns the index of the last occurrence of a specified value in an array. If the value is not found, both methods return -1.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);
// arrays are mutable, meaning that their elements can be changed. In this case, the changeArr() function modifies the fourth element of the concept array to 'MUTATED', and the removeElement() function removes the last element of the concept array. The console.log() statements will print the modified concept array to the console.

const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target);
// the variable target is assigned the value of the second element of the third array in the numberClusters array, which is 6. The console.log() statement will print 6 to the console. This demonstrates how to access elements in a multi-dimensional array using bracket notation.