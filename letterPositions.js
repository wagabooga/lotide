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
// creating letterPositions

function letterPositions(letters) {

  const results = {};

  for (let i = 0; i < letters.length; i++) {
    if (results[letters[i]]) {
      results[letters[i]].push(i);
    } else {
      results[letters[i]] = [i];
    }
  }
  return results;
}

//TEST CASE
assertArraysEqual(letterPositions("hello").e, [1]);
