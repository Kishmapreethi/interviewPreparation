//countthe occurance in string
const str = "kishmapreethi";
const countOccurance = (str) => {
  let lettersCount = {};
  for (let char of str) {
    if (lettersCount[char]) {
      lettersCount[char]++;
    } else {
      lettersCount[char] = 1;
    }
  }
  return lettersCount;
};

console.log("count occurance of charactersin string ", countOccurance(str));

//count the vowels in a string

const countVowels = (str) => {
  let vowelsCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let char of str) {
    if (vowelsCount.hasOwnProperty(char)) {
      vowelsCount[char]++;
    }
  }

  return vowelsCount;
};

console.log("count occurance of vowels in string ", countVowels(str));
