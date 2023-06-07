// YOUR CODE BELOW
function zeroDarkThirty(num) {
  let final_num = "";
  if (num != 0) {
    num = String(num);
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "0") {
        continue;
      }
      final_num = final_num + num[i];
    }
    final_num = parseInt(final_num);
    return final_num;
  }
  return NaN;
}
