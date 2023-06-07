// YOUR CODE BELOW
function isTruthy(val) {
  if (val) {
    return true;
  }
  if (val === false) {
    return "The boolean value false is falsey";
  }
  if (val === null) {
    return "The null value is falsey";
  }
  if (val === 0) {
    return "The number 0 is falsey (the only falsey number)";
  }
  if (val === "") {
    return "The empty string is falsey (the only falsey string)";
  }
  if (val === undefined) {
    return "undefined is falsey";
  }
}
