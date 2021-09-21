const middle = require('../middle');
const { assert } = require("chai")


describe("#middle", () => {
  it(`"it should return [5,6]`, () => {
    assert.deepEqual((middle([1,2,3,4,5,6,7,8,9,10])), [5,6]);
  })
  it("It should return []", () => {
    assert.deepEqual(middle([1]), [])
  })
  it("It should return []", () => {
    assert.deepEqual(middle([1,2]), [])
  })
})

// TEST CODE
// ...
// assertArraysEqual((middle([1,2,3,4,5,6,7,8,9,10])), [5,6]);
// assertArraysEqual(middle([1])) // => []);
// assertArraysEqual(middle([1, 2])) // => []);
// assertArraysEqual(middle([1, 2, 3])) // => [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5])) // => [3]);
// assertArraysEqual(middle([1, 2, 3, 4])) // => [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]);
