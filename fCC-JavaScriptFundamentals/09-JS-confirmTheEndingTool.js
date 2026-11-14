// You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
// The function should return true if the first string ends with the second string, and false otherwise.
// You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.

function confirmEnding(str, target) {
  // Get the length of the target string
  var targetLength = target.length;
  
  // Get the substring of str that matches the length of target
  var strEnding = str.substring(str.length - targetLength);
  
  // Compare the substring with the target string
  if (strEnding === target) {
    return true;
  } else {
    return false;
  }
}