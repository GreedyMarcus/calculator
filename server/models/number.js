const fs = require('fs');

const dataPath = 'server/data/db.json';
const encoding = 'utf8';

class Number {
  static save(number) {
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({ number: number });

      fs.writeFile(dataPath, data, encoding, (err) => {
        if (err) {
          return reject(err);
        }
        resolve({ message: 'Saved in memory!' });
      });
    });
  }

  static load() {
    return new Promise((resolve, reject) => {
      fs.readFile(dataPath, encoding, (err, data) => {
        if (err) {
          return reject({ message: 'Empty memory.' });
        }
        resolve(data);
      });
    });
  }
}

module.exports = Number;