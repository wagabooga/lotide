// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🤨🤨🤨	Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  // loop to find allItems(firstNames)
  for (let item of allItems) {
    // check if itemsToCount object [key] is In the allItems Loop
    if (itemsToCount[item]) {
      // If it is, we see if it is in results and add +1 for the count
      if (results[item]) {
        results[item] += 1
      } else {
        // this else catches if the object [key] is in the AllItems Loop, but has not been already added to results as result[key], and sets by default a value of 1
        results[item] = 1
      }
    }
  }
  return results;
}


// initial test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log("result1:",result1)

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
