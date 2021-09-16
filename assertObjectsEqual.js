// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🤨🤨🤨	Assertion Failed: ${actual}  !==  ${expected}`);
  }
};


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


//function
const eqObjects = function(object1, object2) {
  //variable
  ifTrue = false;
  // check if the length of the two objects keys are the same, if they are not the same it defaults to false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // cycle through keys of object1 loop
  for (let key of Object.keys(object1)) {
    // if both [keys] are arrays, progress
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //both [keys] are arrays, use eqArrays to check if they are equal, and if equal returns true, checks if true === true and returns true to our variable
      if (eqArrays(object1[key],object2[key]) === true) {
        ifTrue = true;
      }
      // both [keys] are arrays, however eqArray did not pass, therefore it will be false
      else {
        return false;
      }
      // checks to see if obeject1 at [key] is an array, or if object2 at [key] is an array, using Or, we can find that they will not be matching data types therefore will be false
    } else if (Array.isArray(object1[key]) || Array.isArray(object2)[key]) {
      return false;
    }

    // Returns true if both objects have identical key with identical values.
    else if (object1[key] === object2[key]) {
      ifTrue = true;
    }
    // Otherwise you get back a big fat false!
    else {
      return false;
    }
  }
  return ifTrue;
};

// code
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (eqObjects(object1,object2)) {
    console.log(`🤑🤑🤑 Assertion Passed: ${object1}  ===  ${object2}`);
  } else {
    console.log(`🤨🤨🤨	Assertion Failed: ${object1}  !==  ${object2}`);
  }

};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

testArray = [
  {a: 1},
  {a: 1}, //true
  true,

  {a: 1},
  {a: 2}, //false
  false,

  {a: 1},
  {b: 1}, //false
  false,

  {a: 1, b: 1},
  {a: 1, b: 1}, //true
  true,

  {a: 1, b: 2},
  {a: 1, b: 1}, //false
  false,

  //these object literals look different, but they are actually the same, becuase object literals aren't ordered like arrays are
  {a: 1, b: 1},
  {b: 1, a: 1}, //true
  true,

  {a: 1, b: 2},
  {a: 2, b: 1}, //false
  false,
  
  {a: 1, a: 1},
  {a: 1, b: 1}, //false
  false,

  {a: 1, a: 2},
  {a: 1, b: 1}, //false
  false,

  {a: 1, b: 1},
  {a: 1, a: 1}, //false
  false,

  {a: 1, b: 1},
  {a: 1, a: 2}, //false
  false,
  
  //this is a special case. the objects look different, but they are actually the same.
  {a: 1, b: 1, b: 1},
  {a: 1, a: 1, b: 1}, //true
  true,

  //this is a special case. the objects look different, but they are actually the same.
  {a: 1, b: 2, b: 1},
  {a: 2, a: 1, b: 1}, //true
  true,

  {a: 1, b: {c: 2}},
  {a: 1, b: {c: 2}}, //true
  true,

  {a: 1, b: {c: 2}},
  {a: 1, b: {c: 3}}, //false
  false,

  {a: 1, b: {c: {d: 2}}},
  {a: 1, b: {c: {d: 2}}}, //true
  true,

  {a: 1, b: {c: {d: 2}}},
  {a: 1, b: {c: {d: 3}}}, //false
  false,

  {a: 1, b:2, c: undefined},
  {a: 1, b:2, f: undefined}, //false
  false,

  {a: 1, b:2, c: undefined},
  {a: 1, b:2, c: undefined}, //true
  true,

  [1],
  [1], //true
  true,

  ['a'],
  ['a'], //true
  true,

  [1],
  [2], //false
  false,

  ['a'],
  ['b'], //false
  false,

  ['a'],
  [''], //false
  false,

  [''],
  [''], //true
  true,

  [1, 2],
  [1, 2], //true
  true,

  [1, 2],
  [2, 1], //false
  false,

  [1,[1,2]],
  [1,[1,2]], //true
  true,
  
  [1,[1,3]],
  [1,[1,2]], //false
  false,

  [1,[[5,1],2]],
  [1,[[5,1],2]], //true
  true,
  
  [1,[[5,2],3]],
  [1,[[5,1],2]], //false
  false
];

let actualResult;
let expectedResult;
let passCount = 0;
let failCount = 0;
let testNumber = 0;
let arrayOfPassedTests = [];
let arrayOfFailedTests = [];

console.log('//Test Set 1 of 4: obj1 vs obj2.');
for (let i = 0; i < testArray.length; i += 3) {
  testNumber++;
  console.log(`Test #${testNumber}`);
  actualResult = eqObjects(testArray[i], testArray[i + 1]);
  expectedResult = testArray[i + 2];
  if (actualResult === expectedResult) {
    passCount++;
    arrayOfPassedTests.push(testNumber);
    console.log('PASSED');
  } else {
    failCount++;
    arrayOfFailedTests.push(testNumber);
    console.log('X FAILED');
  }
  console.log('obj1: \t\t' + JSON.stringify(testArray[i]));
  console.log('obj2: \t\t' + JSON.stringify(testArray[i + 1]));
  console.log('Actual: \t' + actualResult);
  console.log('Expected: \t' + expectedResult);
  console.log('----');
}
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------');

console.log('//Test Set 2 of 4: Reversed order. Here, we try obj2 vs obj1, instead of obj1 vs obj2.');
for (let i = 0; i < testArray.length; i += 3) {
  testNumber++;
  console.log(`Test #${testNumber}`);
  actualResult = eqObjects(testArray[i + 1], testArray[i]);
  expectedResult = testArray[i + 2];
  if (actualResult === expectedResult) {
    passCount++;
    arrayOfPassedTests.push(testNumber);
    console.log('PASSED');
  } else {
    failCount++;
    arrayOfFailedTests.push(testNumber);
    console.log('X FAILED');
  }
  console.log('obj1: \t\t' + JSON.stringify(testArray[i]));
  console.log('obj2: \t\t' + JSON.stringify(testArray[i + 1]));
  console.log('Actual: \t' + actualResult);
  console.log('Expected: \t' + expectedResult);
  console.log('----');
}
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------');

console.log('//Test Set 3 of 4: Checking each object against itself (obj1 vs obj1). Should return `true`. (Part 1 of 2.)');
for (let i = 0; i < testArray.length; i += 3) {
  testNumber++;
  console.log(`Test #${testNumber}`);
  actualResult = eqObjects(testArray[i], testArray[i]);
  expectedResult = true;
  if (actualResult === expectedResult) {
    passCount++;
    arrayOfPassedTests.push(testNumber);
    console.log('PASSED');
  } else {
    failCount++;
    arrayOfFailedTests.push(testNumber);
    console.log('X FAILED');
  }
  console.log('obj1: \t\t' + JSON.stringify(testArray[i]));
  console.log('obj2: \t\t' + JSON.stringify(testArray[i + 1]));
  console.log('Actual: \t' + actualResult);
  console.log('Expected: \t' + expectedResult);
  console.log('----');
}
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------');

console.log('//Test Set 4 of 4: Checking each object against itself (obj2 vs obj2). Should return `true`. (Part 2 of 2.)');
for (let i = 0; i < testArray.length; i += 3) {
  testNumber++;
  console.log(`Test #${testNumber}`);
  actualResult = eqObjects(testArray[i + 1], testArray[i + 1]);
  expectedResult = true;
  if (actualResult === expectedResult) {
    passCount++;
    arrayOfPassedTests.push(testNumber);
    console.log('PASSED');
  } else {
    failCount++;
    arrayOfFailedTests.push(testNumber);
    console.log('X FAILED');
  }
  console.log('obj1: \t\t' + JSON.stringify(testArray[i]));
  console.log('obj2: \t\t' + JSON.stringify(testArray[i + 1]));
  console.log('Actual: \t' + actualResult);
  console.log('Expected: \t' + expectedResult);
  console.log('----');
}
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------');

let numberOfTests = failCount + passCount;
let failPercentage = failCount / (numberOfTests) * 100;
let passPercentage = passCount / (numberOfTests) * 100;

console.log(`Number of Failed Tests: ${failCount}/${numberOfTests} (${failPercentage}%)`);
console.log(`Id's Of Tests That Failed: ${arrayOfFailedTests}`);
console.log('----');
console.log(`Number Of Passed Tests: ${passCount}/${numberOfTests} (${passPercentage}%)`);
console.log(`Id's Of Tests That Passed: ${arrayOfPassedTests}`);
console.log('----');