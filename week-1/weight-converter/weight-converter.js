/**
 * Author: Johnathan Price
 * Date: 06/02/2024
 * File Name: weight-converter.js
 * Description: this script will convert pounds to kilograms
*/

"use strict";

// TODO: Implement the weight conversion logic here


// Check if command line argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node weight-converter.js <pounds>');
  process.exit(1);
}

// Get the weight in pounds from command line argument
const pounds = parseFloat(process.argv[2]);

// Check if the input is a number
if (isNaN(pounds)) {
  console.error('Input must be a number.');
  process.exit(1);
}

// Convert pounds to kilograms
const kilograms = pounds * 0.45359237;

// Print the converted weight in kilograms rounded to two decimal places
console.log(kilograms.toFixed(2));