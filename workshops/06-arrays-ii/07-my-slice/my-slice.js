// YOUR CODE BELOW
const mySlice = (arr, startIdx, endIdx) => {
  // set start and end values
  let new_arr = [];
  if (endIdx === undefined) {
    endIdx = arr.length;
  }
  if (startIdx === undefined) {
    startIdx = 0;
  }
  if (startIdx < 0) {
    startIdx = startIdx + arr.length;
  }
  if (endIdx < 0) {
    endIdx = endIdx + arr.length;
  }

  for (let i = startIdx; i < endIdx; i++) {
    new_arr.push(arr[i]);
  }
  console.log(new_arr);
  return new_arr;
};

mySlice([1, 2, 3, 4, 5, 6, 7, 8, 9], -3, -2);
