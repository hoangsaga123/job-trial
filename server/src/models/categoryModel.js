import db from '../config/db.js';

export const initTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS categories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL UNIQUE
    );
  `;
  await db.query(sql);
};

export const findAll = async () => {
  const [rows] = await db.query('SELECT * FROM categories ORDER BY name ASC');
  return rows;
};

export const create = async (name) => {
  const [result] = await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
  return result.insertId;
};

export const update = async (id, name) => {
  const [result] = await db.query('UPDATE categories SET name= ? WHERE id = ?', [name, id])
  return result.affectedRow;
};

export const remove = async (id) => {
  const [result] = await db.query('DELETE FROM categories WHERE id = ?', [id]);
  return result.affectedRow;
}