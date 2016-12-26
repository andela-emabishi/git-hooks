String.prototype.hasVowels = function hasVowels() {
  // Returns true if a vowel exists in the input string. Returns false otherwise.
  const vowels = new RegExp('[aeiou]', 'i');
  return vowels.test(this);
};
