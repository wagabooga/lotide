// ACTUAL FUNCTION
const middle = function(array) {
  let noMid = [];
  let middleEven = array[Math.floor(array.length / 2)];
  let middleOdd = array[Math.floor((array.length - 1) / 2)];
  //check if array has 1-2 indicies
  if (array.length <= 2) {
    return noMid;
  }
  // check if the array is even
  if (array.length % 2 === 0) {
    // add to the empty array created for catching array with 0-2 indicies
    noMid.push(middleOdd, middleEven);
  }
  // check if array is odd
  if (array.length % 2 !== 0) {
  // add to the empty array created for catching array with 0-2 indicies{
    noMid.push(middleOdd);
  }
  return noMid;
};



// TEST CODE
// ...
// assertArraysEqual((middle([1,2,3,4,5,6,7,8,9,10])), [5,6]);
// assertArraysEqual(middle([1])) // => []);
// assertArraysEqual(middle([1, 2])) // => []);
// assertArraysEqual(middle([1, 2, 3])) // => [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5])) // => [3]);
// assertArraysEqual(middle([1, 2, 3, 4])) // => [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]);


module.exports = middle


