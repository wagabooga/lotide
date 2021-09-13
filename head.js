const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑🤑🤑 Assertion Passed: ${actual}  ===  ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🤨🤨🤨	Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

function head(){
  for (let i = 0; i < 0; i++){
    return i[0]
  }
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");