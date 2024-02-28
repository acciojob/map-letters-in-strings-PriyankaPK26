function mapLetters(word) {
  // Initialize an empty object to store the result
  const result = {};

  // Iterate over each character in the word
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    // Check if the character already exists in the result object
    if (result[char]) {
      // If it exists, push the index into the array
      result[char].push(i);
    } else {
      // If it doesn't exist, create a new array with the index
      result[char] = [i];
    }
  }

  return result;
}