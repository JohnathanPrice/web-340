/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
*/

// For promises:
const fs = require('fs').promises;
const path = require('path');

async function writeCharacterToFile(filePath, character) {
  try {
    await fs.writeFile(filePath, JSON.stringify(character, null, 2));
  } catch (error) {
    throw new Error('Error writing to file');
  }
}

async function readCharacterFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error('Error reading from file');
  }
}

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacterCallback, getCharactersCallback }; // For callbacks
module.exports = { writeCharacterToFile, readCharacterFromFile };