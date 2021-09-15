const assertEqual = function(actual, expected) {
  if (eqArrays(actual , expected)) {
    return `🤑🤑🤑 Assertion Passed: ${actual}  ===  ${expected}`;
  }
  else {
    return `🤨🤨🤨	Assertion Failed: ${actual}  !==  ${expected}`;
  }
};



array1 = [1,2,3,4,5]
array2 = [1,2,3,4,5]

function makeString(input){
  return input.toString()
}


function eqArrays(arr1,arr2){
  let var1 = makeString(arr1)
  let var2 = makeString(arr2)

  if (var1 === var2){
    return true
  }
  else{
    return false
  }

}

console.log(assertEqual(array1,array2))