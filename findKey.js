// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🤨🤨🤨	Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

// findkey function takes two inputs, object and callback
function findKey(object,cb){
  // cycle through the keys of {object (line 24)} 
  for (let key of Object.keys(object)) {
    //  callback (check x.stars 2)  on {object}at [key of "" ]





    if (cb(object[key]) === true) {
      return key
    }
  }
}


//testcase

// assert equal (actual, expected)
// actual = findKey(Obj(objkey)) 
// expected nooma
assertEqual(findKey({

  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")