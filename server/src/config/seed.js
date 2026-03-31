import db from './db.js';

export const seedData = async () => {
  try {
    const [categories] = await db.query('SELECT COUNT(*) as count FROM categories');

    if (categories[0].count === 0) {
      console.log('🌱 Starting full system seeding...');

      await db.query("INSERT INTO categories (name) VALUES ('Công nghệ'), ('Đời sống'), ('Học tập')");

      await db.query(`
        INSERT INTO users (fullname, email, password, role) 
        VALUES 
        ('Hoàng Admin', 'admin@techzen.vn', '123456', 'admin'),
        ('Minh Hoàng', 'hoang@techzen.vn', '123456', 'author')
      `);

      const [catRows] = await db.query("SELECT id FROM categories WHERE name = 'Công nghệ' LIMIT 1");
      const [userRows] = await db.query("SELECT id FROM users WHERE email = 'hoang@techzen.vn' LIMIT 1");

      const catId = catRows[0].id;
      const userId = userRows[0].id;

      const postSql = `
        INSERT INTO posts (title, content, author_id, category_id) 
        VALUES 
        (?, ?, ?, ?),
        (?, ?, ?, ?)
      `;

      const postValues = [
        'Chào mừng đến với Techzen Blog',
        'Đây là bài viết đầu tiên được nạp tự động từ hệ thống seed.',
        userId,
        catId,

        'Lộ trình học Fullstack 2026',
        'Hướng dẫn chi tiết từ Frontend ReactJS đến Backend Node.js và MySQL.',
        userId,
        catId
      ];

      await db.query(postSql, postValues);

      console.log('Seeding completed! Database is ready for the test.');
    } else {
      console.log('Database already has data. Skipping seed to protect existing records.');
    }
  } catch (error) {

    console.error('Seeding failed. Check your table structure!');
    console.error('Error Detail:', error.message);
  }
};

seedData();