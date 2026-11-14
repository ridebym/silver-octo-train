// You should have a function called booWho that receives one argument.
// If the argument received is a boolean primitive, the function should return true.
// If the argument is any other value, the function should return false.
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean';
}
//this was way easier than i thought it would be. I was overthinking it. I was trying to use a bunch of if statements and stuff when all I had to do was use the typeof operator.