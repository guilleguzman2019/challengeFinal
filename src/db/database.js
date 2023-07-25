// database.js
const sqlite3 = require('sqlite3').verbose();

// Crea o abre la base de datos SQLite
const db = new sqlite3.Database('users.db');

db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        apiKey TEXT NOT NULL UNIQUE
      )
    `);
  });

module.exports = db;