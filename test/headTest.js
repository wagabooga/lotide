const head = require('../head');
const { assert } = require("chai")
// TEST
describe("#head", () => {
  it("it should return 5 for [5,6,7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  })
  it(`it should return hello for [5,6,7] ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  })
});
