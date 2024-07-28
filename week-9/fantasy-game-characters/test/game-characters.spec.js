// game-characters.spec.js
const GameCharacters = require('../src/game-characters');
const path = require('path');

describe('GameCharacters', () => {
  it('should return data from the game-characters-data script', (done) => {
    const gameCharacters = new GameCharacters('game-characters-data.js');
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(data).toBeInstanceOf(Array);
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should handle an error when the script is not found', (done) => {
    const gameCharacters = new GameCharacters('non-existent-script.js');
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeInstanceOf(Error);
      expect(data).toBeUndefined();
      done();
    });
  });

  it('should handle an error when the script fails', (done) => {
    const gameCharacters = new GameCharacters('failing-script.js');
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeInstanceOf(Error);
      expect(data).toBeUndefined();
      done();
    });
  });
});
