// game-characters.js
const { spawn } = require('child_process');
const path = require('path');

class GameCharacters {
  constructor(scriptName) {
    this.scriptPath = path.join(__dirname, scriptName);
  }

  getCharacters(callback) {
    const child = spawn('node', [this.scriptPath]);

    let data = '';
    let error = '';

    child.stdout.on('data', (chunk) => {
      data += chunk;
    });

    child.stderr.on('data', (chunk) => {
      error += chunk;
    });

    child.on('close', (code) => {
      if (code !== 0 || error) {
        console.error(`Child process exited with code ${code}`);
        return callback(error || new Error(`Process exited with code ${code}`));
      }
      callback(null, JSON.parse(data));
    });

    child.on('error', (err) => {
      console.error('Failed to start child process.', err);
      callback(err);
    });
  }
}

module.exports = GameCharacters;
