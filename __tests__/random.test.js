//const { test } = require('jest'); I don't remember where this came from...
/*
const checkIfEqual = require('../lib/random.js');

test('checks if 10 is equal to 10', () => {
  expect(checkIfEqual(10, 10)).toBe(true);
});
*/
/////  new test  /////

const randomNumber = require('../lib/random.js');
//const { test } = require('picomatch');
//const { expect } = require('@jest/globals');
//const { random } = require('lodash');

test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});