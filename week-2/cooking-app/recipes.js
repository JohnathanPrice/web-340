/**
 * Author: Johnathan Price
 * Date: 6/9/24
 * File Name: recipes.js
 * Description:
*/

// recipes.js

function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(', ')}`;
}

function setTimer(minutes) {
  // Remove the period at the end to match the expected output
  return `Timer set for ${minutes} minutes`;
}

function quit() {
  return 'Program exited';
}

module.exports = {
  createRecipe,
  setTimer,
  quit
};