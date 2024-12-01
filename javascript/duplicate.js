const arr = [1, 2, 4, 2, 5, 6, 3, 5, 6, 7, 8, 6];
//remove dup using set
function removeDuplicate(array) {
  return [...new Set(array)];
}

console.log("using set", removeDuplicate(arr));

//remove dup using filter and indexOf
function removeDup(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log("using fiter and indexOf", removeDup(arr));

//get dup using filter and indexOf
function getDup(array) {
  return array.filter((item, index) => array.indexOf(item) !== index);
}

console.log("get dup using fiter and indexOf", getDup(arr));

//remove dup using reduce method

function removeDupReduce(array) {
  return array.reduce((unique, item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
    return unique;
  }, []);
}

console.log("remove dup using reduce", removeDupReduce(arr));

//without inbuilt methods and foreach

function withoutInbuilt(array) {
  let unique = [];
  let dup = [];

  array.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    } else {
      dup.push(element);
    }
  });
  return [unique, dup];
}

console.log("remove dup and get dup using foreach", withoutInbuilt(arr));

//using forloop
//it has O(n^2) time, O(n)space complexity becuase of includes()
function removeDupUsingFor(array) {
  const unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique;
}

console.log("remove dup  using for", removeDupUsingFor(arr));

//using for loop but with better optimization
//ithas O(n) time , O(n) spcae complexity becuase of  seen object

function remDupUsingFor(array) {
  const unique = [];
  const seen = {};
  for (let i = 0; i < array.length; i++) {
    if (!seen[array[i]]) {
      unique.push(array[i]);
      seen[array[i]] = true;
    }
  }
  return [unique, seen];
}

console.log("remove dup  using for with optimized", remDupUsingFor(arr));

//remove dup in Objects/complex datattypes using JSon.stringify

function removeDuplicateObjects(arr){
    const uniqueSet = new Set(arr.map((item)=>JSON.stringify(item)));
    return Array.from(uniqueSet).map((item)=>JSON.parse(item));
}

const array = [{a: 1}, {b: 2}, {a: 1}, {a: 3}];
console.log('rem dup objects', removeDuplicateObjects(array));

//to check whether an array contains dup

function isDuplicate(array){
    return array.length !== new Set(array).size
};

console.log('is duplicate', isDuplicate(arr));
console.log('is duplicate', isDuplicate(array));


