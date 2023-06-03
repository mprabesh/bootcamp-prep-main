// YOUR CODE BELOW
const oddCouple = (arr) => {
  let new_arr = [];
  let oddCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      new_arr.push(arr[i]);
      oddCount++;
    }
  }
  if (new_arr.length > 2) {
    return new_arr.splice(0, 2);
  }
  if (new_arr.length === 0) {
    return [];
  }
  return new_arr;
};

oddCouple([1, 2, 3, 4, 5, 9]);
