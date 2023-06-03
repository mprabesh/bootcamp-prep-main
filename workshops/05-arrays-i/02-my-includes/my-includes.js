// YOUR CODE BELOW
const myIncludes = (arr, searchVal) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === searchVal) {
      return true;
    }
  }
  return false;
};
