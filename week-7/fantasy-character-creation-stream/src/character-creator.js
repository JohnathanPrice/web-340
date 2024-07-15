const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
    constructor(options) {
        super(options);
        this.characterData = '';
    }

    _write(chunk, encoding, callback) {
        const data = chunk.toString().trim();
        if (!data) {
            this.emit('error', new Error('Data cannot be empty'));
            return callback(new Error('Data cannot be empty'));
        }
        this.characterData += data + ' ';
        callback();
    }

    _read(size) {
        if (this.characterData) {
            this.push(this.characterData.trim());
            this.characterData = '';
        }
        this.push(null);
    }
}

module.exports = CharacterCreator;