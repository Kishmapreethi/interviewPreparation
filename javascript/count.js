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

//print the highest occured value from an array

const arr = [2, 5, 3, 8, 4, 9, 5, 6, 7, 8, 9, 3, 5, 6, 8, 9, 9, 0];

const countOccur = (arr) => {
  const countObj = {};

  for (let num of arr) {
    countObj[num] = (countObj[num] || 0) + 1;
  }
  let maxKey = null;
  let maxOccurance = 0;
  for (let [key, value] of Object.entries(countObj)) {
    if (value > maxOccurance) {
      maxOccurance = value;
      maxKey = key;
    }
  }
  return [maxKey, maxOccurance];
};

console.log(countOccur(arr));
