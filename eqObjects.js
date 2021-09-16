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

//test
// const ab = { a: "1", b: "2" };
// // const ba = { b: "2", a: "1" };
// // assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false