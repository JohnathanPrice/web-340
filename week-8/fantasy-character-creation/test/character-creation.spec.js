"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
// const fs = require('fs').promises;

const fs = require('fs');
const path = require('path');
const { writeCharacterToFile, readCharacterFromFile } = require('../src/character-creation');

const filePath = path.join(__dirname, 'character.json');

describe('Character Creation System', () => {
  afterEach(() => {
    // Clean up the file after each test
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });

  test('should write character data to a file', async () => {
    const character = { class: 'Mage', gender: 'Female', funFact: 'Loves to read magic books' };
    await writeCharacterToFile(filePath, character);

    const data = fs.readFileSync(filePath, 'utf8');
    const readCharacter = JSON.parse(data);

    expect(readCharacter).toEqual(character);
  });

  test('should read character data from a file', async () => {
    const character = { class: 'Warrior', gender: 'Male', funFact: 'Has a pet dragon' };
    fs.writeFileSync(filePath, JSON.stringify(character));

    const readCharacter = await readCharacterFromFile(filePath);

    expect(readCharacter).toEqual(character);
  });

  test('should handle errors when reading from a non-existent file', async () => {
    await expect(readCharacterFromFile('non-existent.json')).rejects.toThrow('Error reading from file');
  });
});
