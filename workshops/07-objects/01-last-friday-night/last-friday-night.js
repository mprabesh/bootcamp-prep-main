// YOUR CODE BELOW
const lastFridayNight = (arr) => {
  let total_cost = 0;
  for (let i = 0; i < arr.length; i++) {
    total_cost += arr[i].amount;
  }
  return total_cost;
};
