// YOUR CODE BELOW
function myIndexOf(source, searchVal, startIdx) {
  if (startIdx === undefined) {
    startIdx = 0;
  }
  const search_length = searchVal.length;
  for (let i = startIdx; i <= source.length; i++) {
    if (source[i] === searchVal[0]) {
      console.log(i);
      console.log(search_length);
      console.log(source.slice(i, i + search_length));
      let x = source.slice(i, i + search_length);
      if (x === searchVal) {
        console.log(i, "apple");
        return i;
      }
      return -1;
    }
  }
}

myIndexOf("here and there", "re");
