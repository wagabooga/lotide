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


function eqArrays(arr1,arr2) {
  let var1 = makeString(arr1);
  let var2 = makeString(arr2);

  if (var1 === var2) {
    return true;
  } else {
    return false;
  }

}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);