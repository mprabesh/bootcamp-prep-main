//YOUR CODE BELOW
// const myMnemonic = (firstWord, secondWord, thirdWord, fourthWord) => {
//   let finalString = "";
//   console.log(arguments[0]);
//   for (let i = 0; i < argument.length; i++) {
//     console.log(argument[i]);
//   }
//   if (firstWord !== undefined) {
//     finalString += firstWord[0];
//   }
//   // console.log(finalString)
//   if (secondWord !== undefined) {
//     finalString += secondWord[0];
//   }
//   if (thirdWord !== undefined) {
//     finalString += thirdWord[0];
//   }
//   if (fourthWord !== undefined) {
//     finalString += fourthWord[0];
//   }

//   return finalString;
// };

//using arguments only ...
function myMnemonic(firstWord, secondWord, thirdWord, fourthWord) {
  let final_string = "";
  for (let i = 0; i < arguments.length; i++) {
    final_string += arguments[i][0];
  }
  console.log(final_string);
  return final_string;
}
myMnemonic("Must");
