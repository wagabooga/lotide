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

function without(source, itemsToRemove) {
  let arrayWithSource = JSON.parse(JSON.stringify(source));
  // this loop will iterate through the copied source array
  for (let i = 0; i < arrayWithSource.length; i++) {
    // this loop checks to see if the itemstoRemove[j] is containing any arrayWithSource case
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (arrayWithSource[i] === itemsToRemove[j]) {
        arrayWithSource.splice(i, 1);
      }
    }
    console.log(arrayWithSource);
  }
}

without([1,2,3], [1,1,2])
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);