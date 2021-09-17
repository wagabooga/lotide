function assertArraysEqual(name1, name2) {
  if (eqArrays(name1, name2)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${name1}  ===  ${name2}`);
  } else {
    console.log(`🤨🤨🤨	Assertion Failed: ${name1}  !==  ${name2}`);
  }
}


function makeString(input) {
  return input.toString();
}

function eqArrays(arr1, arr2) {
  let var1 = makeString(arr1);
  let var2 = makeString(arr2);

  if (var1 === var2) {
    return true;
  } else {
    return false;
  }

}

const words = ["ground", "control", "to", "major", "tom"];
const arr1 = [1,2,3,4,5]
const arr2 = ["test", 3, 7,"55", null]
const arr3 = [true, false, true, true]

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);

assertArraysEqual(map(arr1, number => number + 2 ), [3,4,5,6,7]);

assertArraysEqual(map(arr2, item => item === null), [false,false,false,false,true]);


assertArraysEqual(map(arr3, bool => !bool), [false,true,false,false]);