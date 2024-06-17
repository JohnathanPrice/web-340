'use strict';

const planetDistances = {
  Mercury: 0.39,
  Venus: 0.72,
  Earth: 1.00,
  Mars: 1.52,
  Jupiter: 5.20,
  Saturn: 9.58,
  Uranus: 19.22,
  Neptune: 30.05,
  Pluto: 39.48
};

function calculateDistance(planet1, planet2) {
  if (!planetDistances.hasOwnProperty(planet1) || !planetDistances.hasOwnProperty(planet2)) {
    throw new Error('Invalid planet name');
  }

  return Math.abs(planetDistances[planet1] - planetDistances[planet2]);
}

module.exports = calculateDistance;