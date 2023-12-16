//Rest and Spread Exercise
//Randy Nguyen

//ES5 function that takes a variable number of arguments
/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  } */

//ES2015 version 
const filterOutOdds = (...nums) => nums.filter(n => n % 2 === 0)

//findMin function
const findMin = (...nums) => Math.min(...nums)

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})


//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(n => n * 2)]


//Slice and Dice

//function removeRandom = (items){}
const removeRandom = items => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

//function extend(array1, array2){}
const extend = (array1, array2) => {
  return [...array1, array2];
}

//function addKeyVal(obj, key, value){}
const addKeyVal = (obj, key, value) => {
  let newObj = { ...obj }
  newObj[key] = value;
  return newObj;
}

//function removeKey(obj, key){}
const removeKey = (obj, key) => {
  let newObj = { ...obj }
  delete newObj[key]
  return newObj;
}

//function combine(obj1, obj2){}
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2};
}

//function update(obj, key, val){}
const update = (obj, key, value) => {
  let newObj = { ...obj }
  newObj[key] = value;
  return newObj;
}



