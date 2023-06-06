// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
  let final_string = "";
  if (startIdx === undefined) {
    console.log("xxxx");
    startIdx = 0;
  }
  if (endIdx == undefined) {
    console.log("yyyy");
    endIdx = originalString.length;
  }
  for (let i = startIdx; i < endIdx; i++) {
    final_string = final_string + originalString[i];
  }
  console.log(final_string);
  return final_string;
}

// mySlice("My name is prabesh magar", 2, 7);
// mySlice("slice and dice", 2, 5);
// mySlice("prabesh", 1);
// mySlice("a piece of pie");
// mySlice("a piece of pie", 2, 7);
// mySlice("a piece of pie");
