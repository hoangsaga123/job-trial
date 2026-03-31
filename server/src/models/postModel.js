import db from '../config/db.js';

export const initTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS posts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      category_id INT,
      author_id INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL,
      FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
    );
  `;
  await db.query(sql);
};

// Lấy tất cả kèm tên danh mục (JOIN)
export const findAll = async () => {
  const sql = `
    SELECT posts.*, categories.name as category_name 
    FROM posts 
    LEFT JOIN categories ON posts.category_id = categories.id 
    ORDER BY posts.created_at DESC
  `;
  const [rows] = await db.query(sql);
  return rows;
};

export const findById = async (id) => {
  const [rows] = await db.query('SELECT * FROM posts WHERE id = ?', [id]);
  return rows[0];
};

export const create = async (data) => {
  const { title, content, category_id, author_id } = data;
  const sql = 'INSERT INTO posts (title, content, category_id, author_id) VALUES (?, ?, ?, ?)';
  const [result] = await db.query(sql, [title, content, category_id, author_id]);
  return result.insertId;
};

export const update = async (id, data) => {
  const { title, content, category_id } = data;
  const sql = 'UPDATE posts SET title = ?, content = ?, category_id = ? WHERE id = ?';
  const [result] = await db.query(sql, [title, content, category_id, id]);
  return result.affectedRows > 0;
};

export const remove = async (id) => {
  const [result] = await db.query('DELETE FROM posts WHERE id = ?', [id]);
  return result.affectedRows > 0;
};