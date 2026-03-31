import db from '../config/db.js';

export const initTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      fullname VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'author'
    );
  `;
  await db.query(sql);
};

export const findByID = async (id) => {
  const [rows] = await db.query('SELECT * FROM users where id = ?', [id])
}

export const findByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

export const create = async (data) => {
  const { fullname, email, password, role } = data;
  const [result] = await db.query(
    'INSERT INTO users (fullname, email, password, role) VALUES (?, ?, ?, ?)',
    [fullname, email, password, role]
  );
  return result.insertId;
};