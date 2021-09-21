const { assert } = require("chai")
const assertArraysEqual = require('../assertArraysEqual')

describe("#assertArraysEqual", () => {
  it("it should console.log if two arrays are equal", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  })

assertArraysEqual([1, 2, 3], [1, 2, 3]);
