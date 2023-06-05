// YOUR CODE BELOW
function frequencyAnalysis(word) {
  let letterFrequency = {};
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter in letterFrequency) {
      letterFrequency[letter]++;
    } else {
      letterFrequency[letter] = 1;
    }
  }
  console.log(letterFrequency);
  return letterFrequency;
}

// frequencyAnalysis("lordrama");
frequencyAnalysis("abca");
