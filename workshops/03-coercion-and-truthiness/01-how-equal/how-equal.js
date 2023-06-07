// YOUR CODE BELOW
function howEqual(val1, val2) {
  if (val1 === val2) {
    return "strictly";
  }
  if (val1 == val2) {
    return "loosely";
  }
  return "not equal";
}

console.log(howEqual(3, -1));
