//const apiKeys = {};

//module.exports = apiKeys;

const db = require('../db/database');

function createUser(name, lastName, email, apiKey) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO users (name, lastName, email, apiKey) VALUES (?, ?, ?, ?)',
      [name, lastName, email, apiKey],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      }
    );
  });
}

function findUserByApiKey(apiKey) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE apiKey = ?', [apiKey], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
}

module.exports = {
  createUser,
  findUserByApiKey,
};