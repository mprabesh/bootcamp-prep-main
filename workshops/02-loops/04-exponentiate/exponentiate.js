// YOUR CODE BELOW
function exponentiate(base, power) {
  let final = 1;
  for (let i = 0; i < power; i++) {
    final = final * base;
  }
  console.log(final);
  return final;
}

exponentiate(3, 0);
