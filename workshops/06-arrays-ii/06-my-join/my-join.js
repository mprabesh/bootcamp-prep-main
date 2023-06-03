// YOUR CODE BELOW

const myJoin = (arr, separator) => {
  let new_string = "";
  if (separator === undefined) {
    separator = ",";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined || arr[i] === null) {
      arr[i] = "";
    }
    if (i === 0) {
      new_string += arr[i];
    } else {
      let add_separator = separator + arr[i];
      new_string += add_separator;
    }
  }
  console.log(new_string);
  return new_string;
};
// myJoin(["hello", undefined, "world"], "-");
// myJoin([null, "came, ", "saw, ", "conquered."], "I ");
