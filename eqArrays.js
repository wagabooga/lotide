let eqArrays = function eqArrays(arr1,arr2) {
  let var1 = makeString(arr1);
  let var2 = makeString(arr2);

  if (var1 === var2) {
    return true;
  } else {
    return false;
  }

}
let makeString = function makeString(input) {
  return input.toString();
}
module.exports = eqArrays