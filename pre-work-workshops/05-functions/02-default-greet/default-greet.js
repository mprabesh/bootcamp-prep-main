// YOUR CODE BELOW
const defaultGreet = (fname, lname) => {
  if (lname === undefined) {
    return `Hi ${fname} Doe!`;
    // return "Hi " + fname + " Doe!";
  }
  return `Hi ${fname} ${lname}!`;
};

defaultGreet("apple", "orange");
