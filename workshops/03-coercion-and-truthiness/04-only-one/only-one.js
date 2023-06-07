// YOUR CODE BELOW
function onlyOne(val1, val2, val3) {
  if (val1 && !val2 && !val3) {
    return true;
  }
  if (!val1 && val2 && !val3) {
    return true;
  }
  if (!val1 && !val2 && val3) {
    return true;
  }
  return false;
}

console.log(onlyOne("", -20, true));
