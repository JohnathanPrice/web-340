/**
 * Author: Johnathan Price
 * Date: 6/9/24
 * File Name: index.js
 * Description:
*/

const { createRecipe, setTimer, quit } = require('./recipes');

const ingredients = ['flour', 'sugar', 'eggs'];
console.log(createRecipe(ingredients));

const minutes = 40;
console.log(setTimer(minutes));

console.log(quit());