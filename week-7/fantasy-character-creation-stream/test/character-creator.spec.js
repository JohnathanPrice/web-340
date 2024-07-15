const CharacterCreator = require('../src/character-creator');
const { Writable } = require('stream');

describe('CharacterCreator', () => {
    let characterCreator;
    beforeEach(() => {
        characterCreator = new CharacterCreator();
    });

    test('processes data correctly when written to', (done) => {
        const data = 'Warrior Male Brave';
        const writable = new Writable({
            write(chunk, encoding, callback) {
                expect(chunk.toString()).toBe(data);
                done();
                callback();
            }
        });

        characterCreator.pipe(writable);
        characterCreator.write(data);
        characterCreator.end();
    });

    test('emits an "error" event when an empty string is written to it', (done) => {
        characterCreator.on('error', (error) => {
            expect(error.message).toBe('Data cannot be empty');
            done();
        });

        characterCreator.write('');
    });

    test('transforms the data correctly when written to', (done) => {
        const data = 'Mage Female Intelligent';
        const writable = new Writable({
            write(chunk, encoding, callback) {
                expect(chunk.toString()).toBe(data);
                done();
                callback();
            }
        });

        characterCreator.pipe(writable);
        characterCreator.write(data);
        characterCreator.end();
    });
});
