/**
 * Author:
 * Date:
 * File Name: pie.js
 * Description:
 */
"use strict";

function bakePie(type, ingredients) {
  const essentialIngredients = ['flour', 'sugar', 'butter'];
  const missingIngredients = essentialIngredients.filter(item => !ingredients.includes(item));

  if (missingIngredients.length > 0) {
      console.warn(`Missing ingredients: ${missingIngredients.join(', ')}`);
      process.exit(1);
  } else {
      return `Successfully baked a ${type} pie!`;
  }
}

module.exports = bakePie;