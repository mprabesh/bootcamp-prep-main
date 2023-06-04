let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
const leetTranslator = (text) => {
  let charObj = {};
  let final_string = "";
  for (let i = 0; i < letters.length; i++) {
    let element = letters[i];
    let character = leetChars[i];
    charObj[element] = character; //we created an object with letter as key and character as value
  }
  // console.log(charObj);
  for (let k = 0; k < text.length; k++) {
    let letter = text[k].toLowerCase();
    let encrypted = charObj[letter]; //look out for this line
    final_string += encrypted;
  }
  console.log(final_string);
};

leetTranslator("prabesh");
//"|D|2@835#"
