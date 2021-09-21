const { assert } = require("chai")
const eqArrays = require('../eqArrays')

describe("#eqArrays", () => {
  it(`"it should return if both arrays are equal: True`, () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  })
  it(`"it should return if both arrays are equal: True`, () => {
    assert.strictEqual(eqArrays([3, 2, 1], [3, 2, 1]), true);
  })
  it(`"it should return if both arrays are equal: True`, () => {
    assert.strictEqual(eqArrays([1, 2, 5], [1, 2, 5]), true);
  })
})