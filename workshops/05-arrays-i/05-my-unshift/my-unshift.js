// YOUR CODE BELOW
const myUnshift = (arr, val) => {
  let new_arr = [val];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(arr[i]);
  }
  return new_arr;
};
