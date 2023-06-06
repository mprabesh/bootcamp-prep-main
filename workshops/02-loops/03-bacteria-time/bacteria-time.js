function bacteriaTime(currentNum, targetNum) {
  debugger;
  let timeTaken = 0;
  if (currentNum > targetNum) {
    return "targetNum must be larger than currentNum";
  }

  while (currentNum < targetNum) {
    currentNum *= 2;
    timeTaken += 20;
  }
  console.log(timeTaken);
  return timeTaken;
}

bacteriaTime(1, 8);
