const tail = require('../tail');
const { assert } = require("chai")

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(["Hello", "Lighthouse", "Labs"]);

// TEST
describe("#tail", () => {
  it(`"it should return ["Lighthouse, "Labs"]`, () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"] );
  })
  it("It should return [Lighthouse, Labs]", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"])
  })
});
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// // Test Case: Check the original array

// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

