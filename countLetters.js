//The function should take in a sentence (as a string) and then return a count of each of the letter in that sentence.


const countLetters = function(sentenceString) {
  const results = {};
  // loop to find letter
  for (let letter of sentenceString) {
    // omit spaces
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        // this else catches if the object [key] is in the but has not been already added to results as result[key], and sets by default a value of 1
        results[letter] = 1;
      }
    }
  }
  return results;
};



console.log(countLetters("lighthouse in the house"));