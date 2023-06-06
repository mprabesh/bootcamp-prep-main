// YOUR CODE BELOW
function mostVowels(sentence) {
  debugger;
  let count = 0;
  let final_word = "";
  let word = "";
  let vcount = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && i !== sentence.length - 1) {
      word = word + sentence[i];
      if (isVowel) {
        // console.log("ax");
        vcount = vcount + 1;
      }
    } else {
      if (vcount > count) {
        // console.log("set", word);
        count = vcount;
        final_word = word;
      }
      vcount = 0;
      word = "";
    }
  }
  console.log(final_word);
  return final_word;

  function isVowel(char) {
    let vowels = "aeiouAEIOU";
    if (vowels.indexOf(char) >= 0) {
      return true;
    }
    return false;
  }
}

// mostVowels("my name is prabesh magar");
//00098987777777777777777777777777777777777777777777777

mostVowels("I am a keeper with some real rhythms");
