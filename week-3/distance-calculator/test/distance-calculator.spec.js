'use strict';

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.52);
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testVenusToJupiter() {
  try {
    assert.strictEqual(calculateDistance('Venus', 'Jupiter'), 4.48);
    console.log('Passed testVenusToJupiter');
    return true;
  } catch (error) {
    console.error(`Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

function testMercuryToPluto() {
  try {
    const actual = calculateDistance('Mercury', 'Pluto');
    const expected = 39.09;
    assert.strictEqual(Math.round(actual * 100) / 100, expected);
    console.log('Passed testMercuryToPluto');
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToPluto: ${error.message}`);
    return false;
  }
}

// Run tests
testEarthToMars();
testVenusToJupiter();
testMercuryToPluto();