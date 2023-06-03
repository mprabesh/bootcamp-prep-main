// YOUR CODE BELOW
const rotateArray = (arr, num) => {
  let new_arr = [];
  if (num > 0) {
    for (let k = arr.length - num; k < arr.length; k++) {
      new_arr.push(arr[k]);
    }
    for (i = 0; i < arr.length - num; i++) {
      new_arr.push(arr[i]);
    }
  } else if (num < 0) {
    let x = Math.abs(num); //-ve to positive
    for (let i = x; i < arr.length; i++) {
      new_arr.push(arr[i]);
    }
    for (let k = 0; k < x; k++) {
      new_arr.push(arr[k]);
    }
  } else {
    return arr;
  }
  console.log(new_arr);
  return new_arr;
};

// by using slice in javascript

rotateArray([1, 2, 3, 4, 5], -3);
