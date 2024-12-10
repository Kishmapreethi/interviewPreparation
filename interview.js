//3pillar global

const obj1 = [{
    a:20, z:13},
    {b:21},
    {c:1},
    {d:0},
    {e:999}
    ]
    
    const  sortedValues=(obj1)=>{
      const obj2=obj1.map((item,index)=>{
            return Object.values(item)
    })
        const flatten= obj2.flat(1)
        console.log(flatten)
        return flatten.sort((a,b)=> a-b)
    }
    
    console.log(sortedValues(obj1));

//programming.com
//1.print only the duplicate values
//2.print all occurance of values in array
//3.print the highest occuranced value
//4.seperate string and numbers from array
const arr = [2, 5, 3, 8, 4, 9, 5, 6, 7, 8, 9, 3, 5, 6, 8, 9, 9, 0];
const mixed = [1, 4, 3, 7, 5, 'a', 'b', 'c', 8, 'f', 9];

const numbers = mixed.filter(item => typeof item === 'number');
const strings = mixed.filter(item => typeof item === 'string');

console.log('Numbers:', numbers);
console.log('Strings:', strings);

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

console.log('highest occured key',countOccur(arr));