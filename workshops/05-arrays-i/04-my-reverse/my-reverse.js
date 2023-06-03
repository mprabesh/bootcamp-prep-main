// YOUR CODE BELOW
const myReverse = (arr) => {
  let length = arr.length - 1;
  let rev_arr = [];
  for (let i = length; i >= 0; i--) {
    rev_arr.push(arr[i]);
  }
  return rev_arr;
};
